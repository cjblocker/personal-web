var React = require('react');
var ProjListItem = require('./proj_list_item');
var projectList = require('./timeline/projs.jsx');

function sortByDate(array) {
    return array.sort(function(a, b) {
        var x = new Date(a['date']); 
        var y = new Date(b['date']);
        return ((x < y) ? 1 : ((x > y) ? -1 : 0));
    });
}

module.exports = React.createClass({
  render: function() {
    list = sortByDate(projectList).map(function (proj) {
      return <ProjListItem key={proj.ID} {...proj} />
    })
    return <div>
        {list}
    </div>
  }
});