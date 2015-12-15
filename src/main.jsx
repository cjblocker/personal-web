var React = require('react');
var NaviBar = require('./navibar');
var Footer = require('./footer');
var About = require('./about');

module.exports = React.createClass({
  render: function() {
    return <div>
      <NaviBar />
      {this.props.children || <About />}
      <Footer />
    </div>
  }
});