import axios from 'axios';

// const APIKEY = 'b9f91d369ff59547cd47b931d8cbc56b:0:74623931';

// const queryUrlBase = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=' + APIKEY + '&q=';

export default {
  getTasks: function() {
    return axios.get('/api/saved/');
  },
  deleteTasks: function(id) {
    return axios.delete('/api/saved/' + id);
  }
  /*saveArticle: function(articleData) {
    return axios.post('/api/saved', articleData);
  }*/
};
