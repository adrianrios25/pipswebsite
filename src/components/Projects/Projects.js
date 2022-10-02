import React, { Component } from 'react';
import { Slide } from 'react-slideshow-image';
import './Projects.css';

const slideImages_fmi = [
	{
	  url: './assets/images/slider/fmi_1.jpg'
	},
	{
	  url: './assets/images/slider/fmi_2.jpg'
	},
	{
	  url: './assets/images/slider/fmi_3.jpg'
	},
  ];

  const slideImages_pos = [
	{
	  url: './assets/images/slider/pos1.png'
	},
	{
	  url: './assets/images/slider/pos2.png'
	},
	{
	  url: './assets/images/slider/pos3.png'
	},
  ];

  const slideImages_soars = [
	{
	  url: './assets/images/slider/soars1.png'
	},
	{
	  url: './assets/images/slider/soars2.png'
	},
	{
	  url: './assets/images/slider/soars3.png'
	},
  ];

  const slideImages_tic = [
	{
	  url: './assets/images/slider/tic1.png'
	},
	{
	  url: './assets/images/slider/tic2.png'
	},
	{
	  url: './assets/images/slider/tic3.png'
	},
  ];

  const slideImages_pant = [
	{
	  url: './assets/images/slider/pant1.png'
	},
	{
	  url: './assets/images/slider/pant2.png'
	},
	{
	  url: './assets/images/slider/pant3.png'
	},
  ];

class Projects extends Component {
  render() {
    return (

    	<div className="projects" id="">
			<div className="container">
				<div className="section">
					<div id="projects-content">
						<div className="row">
							<div className="col blue-text text-accent-2 proj l12 m12 s12">
								<h2 className="section-header">Projects</h2>
								<div className="divider"></div>
							</div>
						</div>
						<div className="row">
							<div className="col l6 m6 s12 proj-desc">
								<h3 className="header orange-text proj-title">Freedom Makers Club</h3>
								<p>
									Freedom Makers Club offers freebies and discounts from different partner merchants in different industries for all Freedom Card Holders.
								</p>
								<p>
									I design and developed the website. I use wordpress and created a theme from scratch for this project. I also developed the system for admin, merchants and members profile.
								</p>
								<p>
									URL: <a href="http://freedommakersclub.com/" target="_blank">http://freedommakersclub.com/</a>
								</p>
							</div>
							<div className="col proj l6 m6 s12 proj-slider">
								<Slide>
									{slideImages_fmi.map((slideImage, index)=> (
										<div className="each-slide" key={index}>
										<div style={{'backgroundImage': `url(${slideImage.url})`}}>
										</div>
										</div>
									))} 
								</Slide>
							</div>
						</div>
						<div className="row">
							<div className="col proj l6 m6 s12 proj-slider">
								<Slide>
									{slideImages_pos.map((slideImage, index)=> (
										<div className="each-slide" key={index}>
										<div style={{'backgroundImage': `url(${slideImage.url})`}}>
										</div>
										</div>
									))} 
								</Slide>
							</div>
							<div className="col l6 m6 s12 proj-desc">
								<h3 className="header orange-text proj-title">Point of Sale System</h3>
								<p>
									AR Web POS is a simple web-based Point of Sale system that you can access using your favorite web browser like Google Chrome and Mozilla Firefox. Easy to use, intuitive and affordable for small to medium business.

									AR Web POS can be installed online or in your local computer which can be accessed using desktop, laptop or tablet and mobile device.

								</p>
							</div>
						</div>
						<div className="row">
							<div className="col l6 m6 s12 proj-desc">
								<h3 className="header orange-text proj-title">S.O.A.R.S.</h3>
								<p>
									The Student Online Admission and Registration System (SOARS) is an application software designed to help the students on their admission and registration. This is designed to automate the procedure for application to High-School filling out the application form to online payment. This is the first website that I developed for a client. The website is used for the client's Master's Thesis/Project.
									<br />
									URL: <a href="http://soars.net78.net/" target="_blank">http://soars.net78.net/</a>
								</p>
							</div>
							<div className="col proj l6 m6 s12 proj-slider">
								<Slide>
									{slideImages_soars.map((slideImage, index)=> (
										<div className="each-slide" key={index}>
										<div style={{'backgroundImage': `url(${slideImage.url})`}}>
										</div>
										</div>
									))} 
								</Slide>
							</div>
						</div>
						<div className="row">
							<div className="col proj l6 m6 s12 proj-slider">
								<Slide>
									{slideImages_tic.map((slideImage, index)=> (
										<div className="each-slide" key={index}>
										<div style={{'backgroundImage': `url(${slideImage.url})`}}>
										</div>
										</div>
									))} 
								</Slide>
							</div>
							<div className="col l6 m6 s12 proj-desc">
								<h3 className="header orange-text proj-title">The Inspection Company Website</h3>
								<p>
									The Inspection Company Ltd. was founded in 2007 and provides Quality Control services in Asia. The European Management has more than 20 years of experience with Quality Control, Sourcing, Purchasing, and Product development.
								</p>
								<p>
									I redesign the website to make it modern and responsive.
								</p>
								<p>
									URL: <a href="http://the-inspection-company.com/" target="_blank">http://the-inspection-company.com/</a>
								</p>
							</div>
						</div>
						<div className="row">
							<div className="col l6 m6 s12 proj-desc">
								<h3 className="header orange-text proj-title">Bayan ng Pantabangan</h3>
								<p>
									BayanNgPantabangan website is a collection of articles and pictures available in the internet about the Municipality of Pantabangan.
									<br />
									URL: <a href="http://panta.web44.net/" target="_blank">http://panta.web44.net/</a>
								</p>
							</div>
							<div className="col proj l6 m6 s12 proj-slider">
								<Slide>
									{slideImages_pant.map((slideImage, index)=> (
										<div className="each-slide" key={index}>
										<div style={{'backgroundImage': `url(${slideImage.url})`}}>
										</div>
										</div>
									))} 
								</Slide>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>	
    );
  }
}

export default Projects;
