var React = require('react');
var TwitterFeed = require('./twitter');

module.exports = React.createClass({
  render: function() {
    bannerImg = {
        backgroundImage: 'url(/img/clutter.jpg)',
        backgroundPosition: '50% 50%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        minHeight: 300
    }
    return <div>
        <div style={bannerImg}>
            <div className="title_rect">
                <div style={{backgroundColor: 'rgba(255,255,255, 10)', margin: '0 auto', width:400, borderRadius: 20, opacity:.7}}>
                    Contact Me
                </div>
           </div>
         </div>
    <div style={{margin:'auto', width: 600, minHeight: 400}}>
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
        <TwitterFeed />
    </div>
    </div>
  }
});