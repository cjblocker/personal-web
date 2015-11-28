var React = require('react');

module.exports = React.createClass({
  render: function() {
    var divStyle = {
      width:'100%',
      padding: 'auto',
      textAlign: 'center'
    };
    return <div style={divStyle}>
      <span>&#169; Cameron Blocker 2015</span>
    </div>
  }
});