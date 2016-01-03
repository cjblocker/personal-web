var React = require('react');

module.exports = React.createClass({
	getInitialState: function() {
		return {open: true}
	},

	handleClick: function(){
		this.setState({open: !this.state.open});
	},

	keycount: 0,

	renderList: function(list){
		var res = [];
		for (var i = 0; i < list.length; i++) {
			if(typeof(list[i])=="object"){
				res.push(this.renderList(list[i]))
			}
			else{
				res.push(<li key={this.keycount++}>{list[i]}</li>)
			}
		};
		return <ul key={this.keycount++}>{res}</ul>
	},

	renderInfo: function() {
		return (<div>
			{this.renderList(this.props.info)}
		</div>);
	},

	render: function() {
  	var category = {
	    width: 800,
	    minHeight: 20,
	    display: 'inline-block',
	    margin: '1px auto',
	    verticalAlign: 'top'
	}

    return (
    	<div className='center' style={{width:800}}>
    		<div style={category}>
    			<div onClick={this.handleClick}>
    				<div style={{fontFamily: "'Roboto Slab', serif",fontWeight: 700, fontSize: "2em"}}> {this.props.title} </div>
    			</div>
    			{this.state.open?this.renderInfo():""}
    		</div>
    	</div>

    	);
	}

});