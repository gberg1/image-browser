var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var Reflux = require('reflux');
var TopicActions = require('../actions/topic-actions');
var TopicStore = require('../stores/topic-store');

var Header = React.createClass({
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
      <nav className="navbar navbar-default header">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            Image Client
          </Link>
          <ul className="nav navbar-nav navbar-right">
            {this.renderTopics()}
          </ul>
        </div>
      </nav>
    );
  },
  renderTopics: function() {
    return this.state.topics.slice(0,4).map(function(topic) {
      return (
        <li key={topic.id}>
          <Link to={"topics/" + topic.id}>
            {topic.name}
          </Link>
        </li>
      );
    });
  },
  onChange: function(event, topics) {
    this.setState({
      topics: topics
    });
  }
});

module.exports = Header;