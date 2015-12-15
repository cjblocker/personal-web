var React = require('react');

module.exports = React.createClass({
  render: function() {
    return <div style={{margin:'auto', width: 600, minHeight: 400}}>
    	<h1> Contact Me: </h1>
    	<div style={{paddingLeft: 50}}>
    	<h3> Cameron Blocker </h3>
    	<p>
    		cameronjblocker [at] gmail [dot] com <br />
    		<a href="https://github.com/ekisu"> Github: @ekisu </a> <br />
    		<a href="https://www.facebook.com/cameron.blocker"> Facebook: Cameron Blocker </a> <br />
    		<a href="https://twitter.com/cameronjblocker"> Twitter: @cameronjblocker </a> <br />
    		<a href="https://www.linkedin.com/in/cameronjblocker"> LinkedIn: Cameron Blocker </a> <br />
    		Skype: cameron.blocker <br />

    	</p>
    	</div>
    </div>
  }
});