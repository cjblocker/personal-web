var React = require('react');
var InfoBox = require('./timeline/info');
var TwitterFeed = require('./twitter');

module.exports = React.createClass({
  render: function() {
    bannerImg = {
        background: "linear-gradient( rgba(255,255,255,0), rgba(255,255,255,255)), url('/img/desk.jpg')",
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        minHeight: 600,
        opacity: .7
    }
    title = {    
        fontFamily: "'Roboto Slab', serif",
        fontWeight: 700,
        fontSize: "7em",
        textAlign: 'center',
        margin: '0 auto',
        width: 800,
        minHeight: 600,
        padding: "200px 0"
    }
    return <div>
         <div style={bannerImg}>
            <div style={title}>
                Cameron Blocker
                <div>
                    <a href="mailto:cameronjblocker@gmail.com"><img className="large-icon" src="img/icons/mail3.png" /></a>
                    <a href="https://www.facebook.com/cameron.blocker"><img className="large-icon" src="img/icons/facebook.png" /></a>
                    <a href="https://twitter.com/cameronjblocker"><img className="large-icon" src="img/icons/twitter.png" /></a>
                    <a href="https://www.linkedin.com/in/cameronjblocker"><img className="large-icon" src="img/icons/linkedin.png" /></a>
                    <a href="https://github.com/ekisu"><img className="large-icon" src="img/icons/github.png" /></a>
                </div>
           </div>
         </div>
        <div style={{margin:'auto', width: 600, minHeight: 400}}>
    	<h1 id="about"> About Me: </h1>
    	<div style={{paddingLeft: 50}}>
    		<p> <img src="img/cameron_blocker.png" style={{float:'left', width: 150, height: 'auto', marginRight: 10, borderRadius: 10}} />
                My name is Cameron Blocker and I am a 1st year PhD student at <a href="http://www.umich.edu/">the 
                University of Michigan</a> studying <a href="https://en.wikipedia.org/wiki/Light-field_camera">
                Plenoptic imaging</a> for a <a href="http://ns.umich.edu/new/releases/23576-a-better-3d-camera-with-clear-graphene-light-detectors">
                focal-stack light-field camera</a>. My interests include computational displays and imaging, 
                computer vision, human-computer interaction, and embedded systems.
            </p>
            <p>
                I graduated Magna Cum Laude from <a href="https://www.byu.edu">Brigham Young University</a> 
                with my Bachelor's degree in Electrical Engineering (with minors in Computer Science and 
                    Mathmatics) in August of 2016. I have loved engineering since I was young. I got into 
                    programming in 3rd grade but I wanted to create things that had life outside of the box 
                    of my computer monitor. I got into electrical engineering, and was buying college text books 
                    in engineering before I'd even completed high school.
            </p>
            <p>
                I am an <a href="http://www.16personalities.com/intp-personality"> INTP</a>, 
                a <a href="https://hackaday.io/ekisu">hardware hacker</a>, and 
                a <a href="https://www.mormon.org/">Mormon</a>.
            </p>
    	</div>
    </div>
    </div>
  }
});