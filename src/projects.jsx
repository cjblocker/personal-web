var React = require('react');
var Timeline = require('./timeline/timeline');
var List = require('./proj_list')

module.exports = React.createClass({
	getInitialState: function() {
    return {timeline: true}
  },
  listButtonClick: function() {
    this.setState({timeline: false})
  },
  tlButtonClick: function() {
    this.setState({timeline: true})
  },
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
            <div className="title_rect">
                <div style={{backgroundColor: 'rgba(255,255,255, 10)', margin: '0 auto', width:350, borderRadius: 20, opacity:.7}}>
                	Projects
                </div>
           </div>
         </div>
         <div style={{margin:'5 auto' ,width: 154}}> 
            <div onClick={this.tlButtonClick}
                  style={{borderRadius:"10px 0 0 10px",
                  width: 75,
                  textAlign: 'center',
                  backgroundColor:'black',
                  color:'white',
                  display: 'inline-block',
                  padding: 5,
                  margin: 1,
                  cursor: 'pointer'}}>Timeline</div> 
            <div onClick={this.listButtonClick}
                  style={{borderRadius:"0 10px 10px 0",
                  width: 75, 
                  textAlign: 'center',
                  backgroundColor:'black',
                  color:'white',
                  display:'inline-block',
                  padding: 5,
                  margin: 1,
                  cursor: 'pointer'}}>List</div>
         </div>
      {this.state.timeline?<Timeline />:<List />}
    </div>
  }
});