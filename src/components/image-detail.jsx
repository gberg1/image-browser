var React = require('react');
var Reflux = require('reflux');
var ImageStore = require('../stores/image-store');
var ImageActions = require('../actions/image-actions');

var ImageDetail = React.createClass({
  mixins: [
    Reflux.listenTo(ImageStore, 'onChange')
  ],
  getInitialState: function() {
    return {
      image: null
    }
  },
  componentWillMount: function() {
    ImageActions.getImage(this.props.params.id);
  },
  render: function() {
    return (
      <div>
        {this.state.image}
      </div>
    );
  },
  onChange: function() {
    this.setState({
      image: ImageStore.find(this.props.params.id)
    });
  }
});

module.exports = ImageDetail;