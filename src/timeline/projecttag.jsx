var React = require('react');
var Project = require('./project');
var Info = require('./info');

module.exports = React.createClass({
  getInitialState: function () {
	return {shift: false,
          infobox: false};
  },
  handleClick: function() {
    this.setState({infobox: !this.state.infobox});
  },
  handleMouseEnter: function() {
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

    return <div style={{position:'absolute', top: this.props.pos + 25 - (165/2), width:300, height:165}}>
        <Info flip={this.props.flip} title="Project" desc="here is an example description" link='about' visible={this.state.infobox} />
        <div style={majorDiv}>
  	      <Project flip={this.props.flip} 
                  onMouseEnter={this.handleMouseEnter} 
                  onMouseOut={this.handleMouseOut} 
                  onClick={this.handleClick} 
                  imageUrl={this.props.imageUrl} />
      </div>
    </div>
  }
});