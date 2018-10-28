import API from '../../utils/API';
import moment from 'moment';

export default {
	newTaskToggle: function() {
		this.setState({
	          newTask: !this.state.newTask,
	          newTaskData:{
		          name: '',
		          deadline: moment(),
		          priority: 1,
		          description: ''
	          }
	        });
	    this.render();
	},
	submitNewTask: function() {
		var taskdata = {
	      ...this.state.newTaskData,
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