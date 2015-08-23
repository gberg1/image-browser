var Reflux = require('reflux');
var Api = require('../utils/api');
var ImageActions = require('../actions/image-actions');

var CommentStore = Reflux.createStore({
  listenables: [ImageActions],
  getImage: function(id) {
    Api.get('gallery/' + id + '/comments')
      .then(function(json) {
        this.comment = json.data;
        this.triggerChange();
      }.bind(this));
  },
  triggerChange: function() {
    this.trigger('change', this.comment);
  }
});

module.exports = CommentStore;

