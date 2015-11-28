var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

module.exports = React.createClass({
  render: function() {
    return <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">

        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">Cameron Blocker</a>
        </div>


        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          
          <ul className="nav navbar-nav">
          </ul>
          
          
          <ul className="nav navbar-nav navbar-right">
            <li><Link activeClassName='active' to="about">About Me</Link></li>
            <li><Link activeClassName='active' to="projects">My Projects</Link></li>
            <li><Link activeClassName='active' to="resume">My Resume</Link></li>
            <li><Link activeClassName='active' to="contact">Contact Me</Link></li>
            <li><a href="https://cjblocker.blogspot.com">My Blog</a></li>
          </ul>
        </div>
      </div>
    </nav>
  }
});