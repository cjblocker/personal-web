var React = require('react');
var ProjectTag = require('./projecttag');

var projectList = require('./projs.jsx');

var pixPerDay = .5;
var today = new Date();

Date.daysSince = function( date0 ) {
  //Get 1 day in milliseconds
  var one_day=1000*60*60*24;

  // Convert both dates to milliseconds
  var date1_ms = date0.getTime();
  var today_ms = today.getTime();

  // Calculate the difference in milliseconds
  var difference_ms = today_ms - date1_ms;
    
  // Convert back to days and return
  return Math.round(difference_ms/one_day); 
}

module.exports = React.createClass({
  renderYears: function() {
    res = [];
    for (var yr = today.getFullYear(); yr > 1992; yr--) {
      var sty = {
        color: 'gray',
        width: '50',
        textAlign: 'center',
        position: 'absolute',
        top: Date.daysSince(new Date(yr, 0, 1))*pixPerDay + 25
      };
      res.push(<div key={yr} style={sty}>
        {yr}
        </div>)
    };
    return res;
  },
  render: function() {
  	var birth = new Date(1992, 4, 12);
  	var grad = new Date(2011, 5, 5);
  	var college = new Date(2014, 0, 4);
  	var baptized = new Date(2000, 5, 5);
  	var hght = Date.daysSince(birth)*pixPerDay + 50;
  	var containerDiv ={
  		width: 652,
  		height:hght + 165 - 50,
  		margin: 'auto',
  		paddingTop: 165/2 - 25,
  		paddingBottom: 165/2 - 25
  	}
  	var tagsDiv = {
  		width: 300,
  		height:hght,
  		float: 'left',
  		position: 'relative'
  	}
  	var timelineDiv = {
  		width:50,
  		height:hght,
  		margin: "0 1 0 1",
  		borderRadius:25,
  		float:'left',
  		backgroundColor: '#000000',
  		position: 'relative'
  	}
    
    var left = projectList.filter(function(proj){return !proj.right && proj.tags[0] != "school"}).map(function(proj){
      return <ProjectTag key={proj.ID} pos={Date.daysSince(new Date(proj.date))*pixPerDay} flip={false} imageUrl={proj.thumbnail} desc={proj.description} title={proj.title} link={proj.url}/>
    })
    var right = projectList.filter(function(proj){return proj.right && proj.tags[0] != "school"}).map(function(proj){
      return <ProjectTag key={proj.ID} pos={Date.daysSince(new Date(proj.date))*pixPerDay} flip={true} imageUrl={proj.thumbnail} desc={proj.description} title={proj.title} link={proj.url}/>
    })
    return <div style={containerDiv}>
    	<div style={tagsDiv}>
      		{left}
    	</div>
    	<div style={timelineDiv}>{this.renderYears()}</div>
    	<div style={tagsDiv}>
      		{right}
    	</div>
    </div>
  }
});