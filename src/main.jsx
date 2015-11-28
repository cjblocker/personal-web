var React = require('react');
var NaviBar = require('./navibar');
var Footer = require('./footer');

module.exports = React.createClass({
  render: function() {
    return <div>
      <NaviBar />
      {this.props.children}
      <Footer />
    </div>
  }
});