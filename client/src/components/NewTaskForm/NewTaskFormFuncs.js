import API from '../../utils/API';

export default {
	newTaskToggle: function() {
		this.setState({
	          newTask: !this.state.newTask,
	          newName: '',
	          newDeadline: '',
	          newPriority: '',
	          newDescription: ''
	        });
	    this.render();
	},
	submitNewTask: function() {
		var taskdata = {
	      name: this.state.newName,
	      deadline: this.state.newDeadline,
	      priority: this.state.newPriority,
	      description: this.state.newDescription,
	      completed: false
	    }
	    console.log(taskdata);
	    API.createTask(taskdata)
	    .then(res => {
	      this.getTasks();
	      this.newTaskToggle();
	    });
	}
};