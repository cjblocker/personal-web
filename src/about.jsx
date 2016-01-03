var React = require('react');
var InfoBox = require('./timeline/info');

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
                In the near future, I hope to attend graduate school and pursue a PhD. 
                I have loved engineering since I was young. I got into programming in 3rd
                grade but I wanted to create things that had life outside of the box of my 
                computer monitor. I got into electrical engineering, and was buying college
                text books in engineering before I'd even completed high school.
            </p>
    		<p>
    			I am an <a href="http://www.16personalities.com/intp-personality"> INTP</a>, a hardware hacker, and a Mormon.
    		</p>
    	</div>
    </div>
    </div>
  }
});