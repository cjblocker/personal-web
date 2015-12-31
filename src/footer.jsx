var React = require('react');

module.exports = React.createClass({
  render: function() {
    var divStyle = {
      width:'100%',
      padding: 'auto',
      textAlign: 'center',
      padding: "5 0"
    };
    return <div style={divStyle}>
      <span>&#169; Cameron Blocker 2015</span>
      <div>
          <a href="mailto:cameronjblocker@gmail.com"><img className="small-icon" src="img/icons/mail3.png" /></a>
          <a href="https://www.facebook.com/cameron.blocker"><img className="small-icon" src="img/icons/facebook.png" /></a>
          <a href="https://twitter.com/cameronjblocker"><img className="small-icon" src="img/icons/twitter.png" /></a>
          <a href="https://www.linkedin.com/in/cameronjblocker"><img className="small-icon" src="img/icons/linkedin.png" /></a>
          <a href="https://github.com/ekisu"><img className="small-icon" src="img/icons/github.png" /></a>
      </div>
    </div>
  }
});