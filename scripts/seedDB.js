const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;
// This file empties the db ad inserts into it

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/listapp",
  {
    useMongoClient: true
  }
);
// Create data for seeding
const userSeed = [
  {
    username: "migs",
    email: "miguelfwebdev@gmail.com",
    password: "themigs"
  },
  {
    username: "gabs",
    email: "gabs@123.com",
    password: "thegabs"
  }
];
const folderSeed = [
  {
    name: "migsRoot",
    deletable: false,
    childLists: []
  },
  {
    name: "gabsRoot",
    deletable: true,
    childLists: []
  }
];
const listSeed = [
  {
    name: "migsList",
    childTasks: []
  },
  {
    name: "gabsList",
    childTasks: []
  }
];
const taskSeed = [
  {
    name: "Do the thing",
    description: "just do it",
    deadline: new Date(2018,8,8),
    priority: 1,
    completed: false
  },
  {
    name: "Laundry",
    description: "",
    deadline: new Date(2019,9,20),
    priority: 2,
    completed: false
  }
];

// Functions defined which return promises for asychronous execution
const del = (model) => {
  //remove all instances of a model from db
  return new Promise((resolve,reject) => {
    db[model].remove({}).then(()=>{
      resolve(`${model}`);
    }).catch(err=> {
      console.log(err);
      process.exit(1);
    })
  })
}

const ins = (model,seed) => {
  // insert array of model instances into db
  return new Promise((resolve,reject) => {
    db[model].collection.insertMany(seed)
    .then(data => {
      resolve(data.insertedIds.length + ' ' + model);
    }).catch(err=> {
      console.log(err);
      process.exit(1);
    })
  })
}

const myFindOne = (model, query) => {
  // finds one instance in db and returns data through promise
  return new Promise((resolve, reject) => {
    db[model].findOne(query, (err, obj) => {
      resolve(obj);
    })
  })
}

const findTwo = (model1, query1, model2, query2) => {
  //finds two instances in the db and returns both their info using promises
  return new Promise((resolve,reject) => {
    Promise.all([myFindOne(model1, query1), myFindOne(model2, query2)])
    .then(data => resolve(data))
  })
}

const insertID = (P,field,model) => {
  // takes findTwo output promise, inserts id of first 
  // in designated field of second
  return new Promise((resolve,reject) => {
    P.then((data) => {
      db[model].findByIdAndUpdate({_id:data[1]._id},
        {[Array.isArray(data[1][field])?('$push'):('$set')]: {[field]: data[0]._id}})
        .then(() => {
          resolve('id inserted');
      })
    })
  })
}

// makes the moval request for each model at the same time
Promise.all([del('Users'), del('Tasks'), del('Lists'), del('Folders')])
  .then(data=> {
    
  console.log();
  console.log(`Data removed for following models: ${data.slice(0,-1).join(', ')}, and ${data.slice(-1)}`);

  Promise.all([ins('Users',userSeed), ins('Tasks',taskSeed), ins('Lists',listSeed), ins('Folders',folderSeed)])
    .then(data => {
    
    console.log();
    console.log(`${data.slice(0,-1).join(', ')}, and ${data.slice(-1)} insterted`);

    Promise.all([
      insertID(findTwo('Folders',{name:"migsRoot"},'Users',{username:"migs"}),'rootFolder','Users'),
      insertID(findTwo('Folders',{name:"gabsRoot"},'Users',{username:"gabs"}),'rootFolder','Users'),      
      insertID(findTwo('Lists',{name:"migsList"},'Folders',{name:"migsRoot"}),'childLists','Folders'),
      insertID(findTwo('Lists',{name:"gabsList"},'Folders',{name:"gabsRoot"}),'childLists','Folders'),
      insertID(findTwo('Tasks',{name:"Do the thing"},'Lists',{name:"migsList"}),'childTasks','Lists'),
      insertID(findTwo('Tasks',{name:"Laundry"},'Lists',{name:"migsList"}),'childTasks','Lists')
      ])
        .then(data => {

        console.log();
        console.log(`${data.length} connections made between instances`)
        process.exit(0);
        
      })

    })
  });

