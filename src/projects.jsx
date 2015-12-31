var React = require('react');
var Timeline = require('./timeline/timeline');

module.exports = React.createClass({
	
  render: function() {
  	bannerImg = {
        backgroundImage: 'url(/img/flugtag.jpg)',
        backgroundPosition: '50% 63%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        minHeight: 300
    }
    title = {    
        fontFamily: "'Roboto Slab', serif",
        fontWeight: 700,
        fontSize: "5em",
        textAlign: 'center',
        margin: '0 auto',
        width: 800,
        minHeight: 300,
        padding: "100px 0"
    }
    return <div>
    	<div style={bannerImg}>
            <div style={title}>
                <div style={{backgroundColor: 'rgba(255,255,255, 10)', margin: '0 auto', width:350, borderRadius: 20, opacity:.7}}>
                	Projects
                </div>
           </div>
         </div>
      <Timeline />
    </div>
  }
});