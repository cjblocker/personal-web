var React = require('react');
var ProjectTag = require('./projecttag');

var pixPerDay = .5;

Date.daysSince = function( date0 ) {
  //Get 1 day in milliseconds
  var one_day=1000*60*60*24;

  var today = new Date();

  // Convert both dates to milliseconds
  var date1_ms = date0.getTime();
  var today_ms = today.getTime();

  // Calculate the difference in milliseconds
  var difference_ms = today_ms - date1_ms;
    
  // Convert back to days and return
  return Math.round(difference_ms/one_day); 
}

module.exports = React.createClass({

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
    return <div style={containerDiv}>
    	<div style={tagsDiv}>
      		<ProjectTag pos={0} flip={false} imageUrl='http://3.bp.blogspot.com/-2dOnVkjwolI/VZ6T8ND5F1I/AAAAAAAAAHk/TZacJKM-e78/s400/2015-04-10%2B19.56.08.jpg' />
      		<ProjectTag pos={Date.daysSince(grad)*pixPerDay} flip={false} imageUrl='http://3.bp.blogspot.com/-2dOnVkjwolI/VZ6T8ND5F1I/AAAAAAAAAHk/TZacJKM-e78/s400/2015-04-10%2B19.56.08.jpg' />
      		<ProjectTag pos={Date.daysSince(birth)*pixPerDay} flip={false} imageUrl='http://3.bp.blogspot.com/-2dOnVkjwolI/VZ6T8ND5F1I/AAAAAAAAAHk/TZacJKM-e78/s400/2015-04-10%2B19.56.08.jpg' />
    	</div>
    	<div style={timelineDiv}></div>
    	<div style={tagsDiv}>
      		<ProjectTag pos={Date.daysSince(college)*pixPerDay} flip={true} imageUrl='http://3.bp.blogspot.com/-2dOnVkjwolI/VZ6T8ND5F1I/AAAAAAAAAHk/TZacJKM-e78/s400/2015-04-10%2B19.56.08.jpg' />
      		<ProjectTag pos={Date.daysSince(baptized)*pixPerDay} flip={true} imageUrl='http://3.bp.blogspot.com/-2dOnVkjwolI/VZ6T8ND5F1I/AAAAAAAAAHk/TZacJKM-e78/s400/2015-04-10%2B19.56.08.jpg' />
    	</div>
    </div>
  }
});