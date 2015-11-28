var React = require('react');
var Project = require('./project');

module.exports = React.createClass({
  getInitialState: function () {
	return {shift: false};
  },
  handleMouseOver: function() {
  	this.setState({shift: true});
  },
  handleMouseOut: function() {
  	this.setState({shift: false});
  },
  render: function() {
  	var majorDiv = {
  		width: 300,
  		height: 165,
  		backgroundImage: 'url(img/projecttag.png)',
  		position: 'absolute',
  		top: this.props.pos + 25 - (165/2),
  		left: this.state.shift?(this.props.flip?5:-5):0
  	}
  	var flipStyle = {
	    MozTransform: "scaleX(-1)",
	    OTransform: "scaleX(-1)",
	    WebkitTransform: "scaleX(-1)",
	    Transform: "scaleX(-1)",
	    Filter: "FlipH",
	    msFilter: "FlipH"
	}
	if (this.props.flip == true) {
		for (var attrname in flipStyle) { majorDiv[attrname] = flipStyle[attrname]; }
	};

    return <div style={majorDiv}>
	      <Project onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} imageUrl={this.props.imageUrl} />
    </div>
  }
});