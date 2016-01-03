var React = require('react');
var Link = require('react-router').Link

module.exports = React.createClass({
  renderLink: function() {
  	if (this.props.link) {
  		return <Link to={this.props.link}> Click here for more info </Link>
  	}
  	else{
  		return null;
  	};
  },
  render: function() {
  	divStyle ={
		width:250,
		height: 200,
		borderRadius: 25,
		padding: 5,
		backgroundColor: 'black',
		color: 'white',
		position: 'absolute',
		left: this.props.flip?306:-256,
		visibility: this.props.visible?'visible':'hidden',
		zIndex: 10
	};
    return <div style={divStyle}>
		<h3> {this.props.title} </h3>
		<hr />
		<p> {this.props.desc} </p>
		{this.renderLink()}
	</div>
  }
});