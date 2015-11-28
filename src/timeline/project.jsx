var React = require('react');


module.exports = React.createClass({
  getInitialState: function () {
	return {opaque: false};
  },
  handleMouseEnter: function() {
  	this.setState({opaque: true});
  	this.props.onMouseEnter();
  },
  handleMouseOut: function() {
  	this.setState({opaque: false});
  	this.props.onMouseOut();
  },
  handleClick: function() {
    this.props.onClick();
  },
  render: function() {
  	var dim = 150;
  	var borderStyle ={
  		width: dim*1.1,
  		height: dim*1.1,
  		borderRadius: (dim*1.1)/2,
  		backgroundColor: '#000000',
  		padding: (dim*0.05),
  		// position: 'relative',
  		// top: -1*(dim)/2
  	}
  	var imgStyle = {
  		width: dim, 
  		height: dim, 
  		backgroundImage: 'url('+this.props.imageUrl+')', 
  		backgroundSize: 'auto '+dim+'px', 
  		backgroundRepeat: 'no-repeat',
  		borderRadius: dim/2,
  		opacity: this.state.opaque?1:.7
  	};
    var flipStyle = {
      MozTransform: "scaleX(-1)",
      OTransform: "scaleX(-1)",
      WebkitTransform: "scaleX(-1)",
      Transform: "scaleX(-1)",
      Filter: "FlipH",
      msFilter: "FlipH"
    }
    if (this.props.flip == true) {
      for (var attrname in flipStyle) { borderStyle[attrname] = flipStyle[attrname]; }
    };
    return <div style={borderStyle}>
        <div style={imgStyle} 
              onMouseEnter={this.handleMouseEnter} 
              onMouseOut={this.handleMouseOut} 
              onClick={this.handleClick}>
        </div>
    </div>
  }
});