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
    return <div>
    	<div style={bannerImg}>
            
         </div>
      <Timeline />
    </div>
  }
});