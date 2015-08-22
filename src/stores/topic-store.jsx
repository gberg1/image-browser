var Api = require('../utils/api');
var Reflux = require('reflux');
var TopicActions = require('../actions/topic-actions');

var TopicStore = Reflux.createStore({
  listenables: [TopicActions],
  getTopics: function() {
    return Api.get('topics/defaults')
      .then(function(json) {
        this.topics = json.data;
        this.triggerChange();
      }.bind(this));
  },
  triggerChange: function() {
    this.trigger('change', this.topics);
  }
});

module.exports = TopicStore;

