var React = require('react');
var Reflux = require('reflux');
var TopicStore = require('../stores/topic-store');
var TopicActions = require('../actions/topic-actions');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var TopicList = React.createClass({
  mixins: [
    Reflux.listenTo(TopicStore, 'onChange')
  ],
  getInitialState: function() {
    return {
      topics: []
    }
  },
  componentWillMount: function() {
    TopicActions.getTopics();
  },
  render: function() {
    return (
      <div className="list-group">
        {this.renderTopics()}
      </div>
    );
  },
  renderTopics: function() {
    return this.state.topics.slice(0,4).map(function(topic) {
      return (
        <Link to={"topics/" + topic.id} className="list-group-item" key={topic.id}>
          <h4>{topic.name}</h4>
          <p>{topic.description}</p>
        </Link>
      );
    });
  },
  onChange: function(event, topics) {
    this.setState({
      topics: topics
    });
  }
});

module.exports = TopicList;

