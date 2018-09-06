import API from '../../utils/API';

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
			    deadline: '',
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
			      deadline: res.data.deadline,
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
	      name: this.state.inEditData.name,
	      deadline: this.state.inEditData.deadline,
	      priority: this.state.inEditData.priority,
	      description: this.state.inEditData.description
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