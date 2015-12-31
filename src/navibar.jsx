var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

module.exports = React.createClass({
  render: function() {
    logo = {
      fontFamily: "'Roboto Slab', serif",
      fontWeight: 700,
      textAlign: 'center',
      color: '#777',
      borderRadius: 5,
      height: 30,
      padding: 5,
      marginLeft: 100,
      float: 'left',
      height: '50px',
      padding: '15px 15px',
      fontSize: '18px',
      lineHeight: '20px',
      position: 'relative'
    }
    return <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">

        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link className="" to="">
            <div style={logo}>
              <img src='img/logo.png' style={{width:30,height:30,position:'absolute', top: '11px', left: '-20px', opacity: ".5"}} />
              Cameron Blocker
            </div>
          </Link>
        </div>


        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          
          <ul className="nav navbar-nav">

          </ul>
          
          <ul className="nav navbar-nav navbar-right">
            <li><Link activeClassName='active' to="">About Me</Link></li>
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