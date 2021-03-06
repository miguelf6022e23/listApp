import API from '../../utils/API';
import moment from 'moment';

export default {
	getTasks: function() {
		API.getTasks()
	      .then(res => {
	        console.log(res);
	        this.setState({
	          tasks: res.data,
	          loaded:true
	        });
	        console.log(this.state)
	      })
	      .catch(err => console.log(err));
	},
	setInEdit: function(id) {
		this.setState({
          inEdit: id
        });

		id===''? (
		  this.setState({
		    inEditData: {
			    name: '',
			    deadline: moment(),
			    priority: '',
			    description: ''
		    }
		  })
		  ):(
		  API.getOneTask(id)
		  .then(res => {
		    this.setState({
		    	inEditData: {
			      name: res.data.name,
			      deadline: moment(res.data.deadline),
			      priority: res.data.priority,
			      description: res.data.description
		    	}
		    });
		  })
		  )

		console.log(this.state);
	},
	submitEdits: function(id) {
		var taskdata = {
	      ...this.state.inEditData
	    }
	    console.log(taskdata);
	    API.updateOneTask(id, taskdata)
	    .then(res => {
	      this.getTasks();
	      this.setInEdit('');
	    });
	},
	completeTask: function(id) {
		API.updateOneTask(id, {completed: true})
		.then(res => {
      		this.getTasks();
		}
		)

	}
};