import React, { Component } from 'react';
import Slider from "react-slick";

//assets
import './Services.css';
import service_webdev from './images/service-webdev.jpg';
import service_webapp from './images/service-webapp.jpg';

class Services extends Component {
  render() {
  	var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (

    	<div className="services" id="">
			<div className="container">
				<div className="section">
					<div id="services-content">
						<div className="row">
							<div className="col blue-text text-accent-2 proj l12 m12 s12">
								<h2 className="section-header">Services</h2>
								<div className="divider"></div>
							</div>
						</div>
						<div className="row">
							<div className="col l6 m12 s12">
							  <div className="card">
								<div className="card-image waves-effect waves-block waves-light">
								  <img className="activator" src={service_webdev} />
								</div>
								<div className="card-content">
								  <span className="card-title activator grey-text text-darken-4">Web Design & Development<i className="material-icons right">more_vert</i></span>
								  
								</div>
								<div className="card-reveal">
								  <span className="card-title grey-text text-darken-4">Web Design & Development<i className="material-icons right">close</i></span>
								  <p>Win customers with a modern and responsive design.</p>
								</div>
							  </div>
										
							</div>
							<div className="col l6 m12 s12">
								
							  <div className="card">
								<div className="card-image waves-effect waves-block waves-light">
								  <img className="activator" src={service_webapp} />
								</div>
								<div className="card-content">
								  <span className="card-title activator grey-text text-darken-4">Web Application<i className="material-icons right">more_vert</i></span>
								  
								</div>
								<div className="card-reveal">
								  <span className="card-title grey-text text-darken-4">Web Application<i className="material-icons right">close</i></span>
								  <p>Web application system like Point of Sale (POS), Inventory Management System, Payroll System and many more...</p>
								</div>
							  </div>
										
							</div>
						</div>
						<div className="row">
							<div className="col blue-text text-accent-2 proj l12 m12 s12">
								<h2 className="section-header">Website Templates</h2>
								<p className="flow-text grey-text text-darken-4">
								Modern and reponsive web design, developed using Twitter Bootstrap and Google Material Design framework.
								</p>
								<div className="divider"></div>
							</div>
						</div>
						<div className="events">
						<Slider {...settings}>
							<div id="temp-slide1">
								<span className="temp-desc">
									<h2 className="alegreya white-text">Caffeina</h2>
									<p className="alegreya white-text">
										Caffeina Template for a coffee shop, tea house or even for a restaurant.
									</p>
									<p>
									<a href="/caffeina" target="_blank" className="waves-effect waves-light btn">Live Preview</a>
									</p>
								</span>
							</div>
							<div id="temp-slide2">
								<span className="temp-desc">
									<h2 className="alegreya white-text">Galene</h2>
									<p className="alegreya white-text">
										Galene Template for a Resort and Hotel website.
									</p>
									<p>
									<a href="/galene" target="_blank" className="waves-effect waves-light btn">Live Preview</a>
									</p>
								</span>
							</div>
							<div id="temp-slide3">
								<span className="temp-desc">
									<h2 className="alegreya white-text">Infinity</h2>
									<p className="alegreya white-text">
										Infinity tempalte for business, online shop website.
									</p>
									<p>
									<a href="/infinity" target="_blank" className="waves-effect waves-light btn">Live Preview</a>
									</p>
								</span>
							</div>
						</Slider>
						</div>
					</div>
				</div>
			</div>
		</div>
    );
  }
}

export default Services;
