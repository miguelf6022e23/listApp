import axios from 'axios';

// const APIKEY = 'b9f91d369ff59547cd47b931d8cbc56b:0:74623931';

// const queryUrlBase = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=' + APIKEY + '&q=';

export default {
  getTasks: function() {
    return axios.get('/api/tasks/');
  },
  getOneTask: function(id) {
  	return axios.get('/api/tasks/' + id);
  },
  createTask: function(taskData) {
  	return axios.post('/api/tasks', taskData);
  },
  deleteTasks: function(id) {
    return axios.delete('/api/tasks/' + id);
  },
  updateOneTask: function(id, taskData){
  	return axios.put('/api/tasks/' + id, taskData);
  }
  /*saveArticle: function(articleData) {
    return axios.post('/api/saved', articleData);
  }*/
};
