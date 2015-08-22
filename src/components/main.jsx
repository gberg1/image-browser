var React = require('react');

var Main = React.createClass({
  render: function() {
    return (
      <div>
        I am a header.
        {this.props.children}
      </div>
    );
  }

});

module.exports = Main;