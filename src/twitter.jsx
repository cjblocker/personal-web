
var React = require('react');

module.exports = React.createClass({
  getInitialState: function() {
  	return {initialized: false}
  },
  componentDidMount: function(){
  	twttr.widgets.load(this.getDOMNode())
  },
  render: function() {
    return <div>
      	<a className="twitter-timeline" 
      		href="https://twitter.com/cameronjblocker" 
      		data-widget-id="693662316059987968">Tweets by @cameronjblocker</a>
		<script>
		</script>

    </div>
  }
});