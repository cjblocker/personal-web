var React = require('react');
var ReactRouter = require('react-router');
var HashHistory = require('react-router/lib/hashhistory');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var IndexRoute = ReactRouter.IndexRoute;

var Main = require('./main');
var Projects = require('./projects');
var About = require('./about');
var Contact = require('./contact');
var Resume = require('./resume');


module.exports = (
  <Router history={new HashHistory}>
    <Route path="/" component={Main}>
      <Route path="projects" component={Projects} />
      <Route path="contact" component={Contact} />
      <Route path="resume" component={Resume} />
    </Route>
  </Router>
)