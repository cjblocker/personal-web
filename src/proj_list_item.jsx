var React = require('react');

module.exports = React.createClass({
  renderTags: function() {
    return this.props.tags.map(function (tag_str) {
      return <span className='project_tag' key={tag_str}>{tag_str}</span>
    })
  },
  render: function() {
  	var majorDiv = {
  		width: 700,
  		height: 165,
      borderRadius: 20,
      backgroundColor: "#000",
      color: 'white',
      margin: '5 auto'
  	}

    return <div style={majorDiv}>
  	      <img style={{float:'left', width:150, height: 150, margin: 7.5, borderRadius:20}} src={this.props.thumbnail} /> 
         <div style={{padding:10}}>
          <span className="project_heading">{this.props.title}</span > {this.renderTags()}
          <hr />
          <p> &nbsp;&nbsp;&nbsp;&nbsp;
            {this.props.description}
            {this.props.url==""?"":<a href={this.props.url}>Click here for more info</a>}
          </p>

      </div>
    </div>
  }
});