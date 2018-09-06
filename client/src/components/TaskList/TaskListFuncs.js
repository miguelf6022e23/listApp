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
		    inEditName: '',
		    inEditDeadline: '',
		    inEditPriority: '',
		    inEditDescription: ''
		  })
		  ):(
		  API.getOneTask(id)
		  .then(res => {
		    this.setState({
		      inEditName: res.data.name,
		      inEditDeadline: res.data.deadline,
		      inEditPriority: res.data.priority,
		      inEditDescription: res.data.description
		    });
		  })
		  )

		console.log(this.state);
	},
	submitEdits: function(id) {
		var taskdata = {
	      name: this.state.inEditName,
	      deadline: this.state.inEditDeadline,
	      priority: this.state.inEditPriority,
	      description: this.state.inEditDescription
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