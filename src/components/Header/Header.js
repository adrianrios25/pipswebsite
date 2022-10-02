import React, { Component } from 'react';
import './Header.css';
import logo from './images/logo.png';
import { Link, Element} from 'react-scroll'


class Header extends Component {
  render() {
    return (

    	
		<Element name="hero" className="element">
			<div className="hero" id="">
				<div className="navbar-fixed">
				<nav className="nav-hero">
				<div className="nav-wrapper">
					<Link activeClass="active" to="hero" className="brand-logo center navlink" spy={true} smooth={true} offset={0} duration={500} onSetActive={this.handleSetActive}>
						
					<img id="arlogo" src={logo} alt="AR Logo"/>
					</Link>
					<a href="/#" data-activates="mobile-demo" className="button-collapse">
						<i className="material-icons">menu</i>
					</a>
					<ul className="right hide-on-med-and-down">
						<li>
							<Link activeClass="active" to="services" className="navlink" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
								Services
							</Link>
						</li>
						<li>
							<Link activeClass="active" to="projects" className="navlink" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
							Projects
							</Link>
						</li>
						<li>
							<Link activeClass="active" to="about" className="navlink" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
							About
							</Link>
						</li>
						<li>
							<Link activeClass="active" to="contact" className="navlink" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
							Contact
							</Link>
						</li>
					</ul>
					<ul className="side-nav" id="mobile-demo">
					<li>
							<Link activeClass="active" to="services" className="navlink" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
								Services
							</Link>
						</li>
						<li>
							<Link activeClass="active" to="projects" className="navlink" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
							Projects
							</Link>
						</li>
						<li>
							<Link activeClass="active" to="about" className="navlink" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
							About
							</Link>
						</li>
						<li>
							<Link activeClass="active" to="contact" className="navlink" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
							Contact
							</Link>
						</li>
					</ul>
				</div>
				</nav>
				</div>
				<div className="row name">
					<div className="col l8 m8 s12 offset-l2 offset-m2 center-align">
						<h1 className="header header-hero">Adrian Philip Rios</h1>
					</div>
				</div>
				<div className="row">
					<div className="col l10 m10 s10 offset-l1 offset-m1 offset-s1 valign-wrapper">
						<p className="flow-text center-align content-hero valign">
							<span>Hello!!!</span>
							<br />
							I’m Adrian, a freelance web developer based Makati City, Metro Manila. <br />
							Check out the services that I offer to help you with your business. 
							Don’t forget to get in touch and contact me. 
						</p>
					</div>
				</div>
			</div>
		</Element>
    );
  }
}

export default Header;
