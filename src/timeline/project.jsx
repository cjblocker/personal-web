var React = require('react');


module.exports = React.createClass({
  getInitialState: function () {
	return {opaque: false};
  },
  handleMouseOver: function() {
  	this.setState({opaque: true});
  	this.props.onMouseOver();
  },
  handleMouseOut: function() {
  	this.setState({opaque: false});
  	this.props.onMouseOut();
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
    return <div style={borderStyle}>
        <div style={imgStyle} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}></div>
    </div>
  }
});