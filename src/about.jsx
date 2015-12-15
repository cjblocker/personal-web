var React = require('react');
var InfoBox = require('./timeline/info');

module.exports = React.createClass({
  render: function() {
    return <div style={{margin:'auto', width: 600, minHeight: 400}}>
    	<h1> About Me: </h1>
    	<h3> <em>[Under Construction]</em> </h3>
    	<div style={{paddingLeft: 50}}>
    		<p> <img src="img/cameron_blocker.png" style={{float:'left', width: 150, height: 'auto', marginRight: 10, borderRadius: 10}} />
    			My name is Cameron Blocker and I am an Electrical Engineering
    			undergraduate student studying at <a href="https://www.byu.edu">Brigham Young University</a>. My
    			interests include computational displays and imaging, robotic
    			vision, human-computer interaction, and embedded systems. I 
    			currently work as a research assistant in BYU's <a href="https://holography.byu.edu">Electroholography
    			Lab</a> where I design circuits and software for a 3D holographic display 
    			capable of recreating all the depth cues characteristic of real 
    			objects. 
    		</p>
    		<p>
    			I am an <a href="http://www.16personalities.com/intp-personality"> INTP </a>, a hardware hacker, and a mormon.
    		</p>
    	</div>
    </div>
  }
});