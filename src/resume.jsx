var React = require('react');
var Category = require('./category');
var info = require('./resume_txt');

module.exports = React.createClass({
  renderResume: function() {
		res = [];
		console.log(info);
		for(var key in info){
			if(info.hasOwnProperty(key)){
				res.push(<Category key={key} title={key} info={info[key]} />)
			}
		}
		return res
	},
  render: function() {
  	bannerImg = {
        backgroundImage: 'url(/img/cleanroom.jpg)',
        backgroundPosition: '50% 30%',
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
            	Resume
            </div>
       </div>
     </div>
    <div style={{margin:'auto', width: 600, minHeight: 400}}><br />
    	{this.renderResume()}
    </div>
    </div>
  }
});