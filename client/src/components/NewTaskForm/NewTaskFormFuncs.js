import API from '../../utils/API';

export default {
	newTaskToggle: function() {
		this.setState({
	          newTask: !this.state.newTask,
	          newTaskData:{
		          name: '',
		          deadline: '',
		          priority: '',
		          description: ''
	          }
	        });
	    this.render();
	},
	submitNewTask: function() {
		var taskdata = {
	      name: this.state.newTaskData.name,
	      deadline: this.state.newTaskData.deadline,
	      priority: this.state.newTaskData.priority,
	      description: this.state.newTaskData.description,
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