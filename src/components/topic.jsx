var React = require('react');
var Reflux = require('reflux');
var ImageActions = require('../actions/image-actions');
var ImageStore = require('../stores/image-store');
var ImagePreview = require('./image-preview');

var Topic = React.createClass({
  mixins: [
    Reflux.listenTo(ImageStore, 'onChange')
  ],
  getInitialState: function() {
    return {
      images: []
    }
  },
  componentWillMount: function() {
    ImageActions.getImages(this.props.params.id);
  },
  componentWillReceiveProps: function(nextProps) {
    ImageActions.getImages(nextProps.params.id);
  },
  render: function() {
    return (
      <div>
        {this.renderImages()}
      </div>
    );
  },
  renderImages: function() {
    return this.state.images.slice(0,20).map(function(image) {
      return (
        <ImagePreview key={image.id} {...image} />
      );  
    });
  },
  onChange: function(event, images) {
    this.setState({
      images: images
    });
  }
});

module.exports = Topic;
