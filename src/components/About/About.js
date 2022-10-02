import React, { Component } from 'react';
import './About.css';
import mypic from './images/me.jpg';

class About extends Component {
  render() {
    return (
    	<div className="about" id="">
			<div className="container">
				<div className="section">
					<div id="about-content">
						<div className="row">
							<div className="col blue-text text-accent-2 proj l12 m12 s12">
								<h2 className="section-header">About Me</h2>
								<div className="divider"></div>
							</div>
						</div>
						<div className="row">
							<div className="col l10 m10 s10 offset-l1 offset-m1 offset-s1 valign-wrapper">
								<div className="flow-text content-about valign">
									<div className="row">
										<div className="col s6 m6 l6 offset-s3 offset-m3 offset-l3">
											<img src={mypic} alt="" className="circle responsive-img me" width="100%" />
										</div>
									</div>
									<div className="row">
										<div className="col s12">
										<p className="center-align">
											<span className="about-text">
											I'm Adrian Philip Rios, I’m a freelance web developer since 2012. I graduated with a bachelor's degree in Information Technology major in programming from Nueva Ecija University of Science and Technology.
											I always love the challenge in backend programming and enjoy web design. I drink 2-3 cups of coffee everyday, listen to music and play video games, just like other programmers.
											</span>
										</p>
										</div>
									</div>
									<h3 className="header orange-text proj-title">Skills</h3>
									<div className="divider"></div>
									<h4>Programming Skills</h4>
									<p><b>Frontend:</b> HTML, CSS, JavaScript, Jquery, ReactJS, Angular</p>
									<p><b>Framework(frontend):</b> Bootstrap, Materialize, Material UI, Tailwind CSS</p>
									<p><b>Backend:</b> PHP, Node</p>
									<p><b>Framework(backend):</b> Codeigniter, Laravel, Express</p>
									<p><b>DB:</b> MySQL, PostgreSQL, Mongodb</p>
									<p><b>CMS:</b> Wordpress</p>
									
									<span className="header orange-text proj-title"> Work Experienced </span>
									<div className="experience">
										<div className="row">
										<div className="col s12 white grey-text text-darken-4">
											<div className="row">
												<div className="col s1 m1 l1">
													<i className="fa fa-black-tie"></i>
												</div>
												<div className="col s11 m11 l11">
													<b>Work Experienced</b>
												</div>
											</div>
											<div className="row">
												<div className="col s1 m1 l1">
													1.
												</div>
												<div className="col s11 m11 l11">
													<b>Web Developer - North Carbon / Vizture Solutions Co.</b>
													<br />
													<b>August 2013 - May 2015</b>
												</div>
											</div>
											<div className="row">
												<div className="col s1 m1 l1">
													&nbsp;
												</div>
												<div className="col s11 m11 l11">
													Develop web based application using Bootstrap Theme for front-end and PHP and Mysql for back-end. 
													<br />
													Create and maintain wordpress powered website.
												</div>
											</div>
											
											<div className="row">
												<div className="col s1 m1 l1">
													2.
												</div>
												<div className="col s11 m11 l11">
													<b>In-house Web Developer - The Inspection Company</b>
													<br />
													<b>October 2015 - September 2016</b>
												</div>
											</div>
											<div className="row">
												<div className="col s1 m1 l1">
													&nbsp;
												</div>
												<div className="col s11 m11 l11">
													Maintain and Redesign website to make it responsive and modern.
													<br />
													Develop and enhance Online Inspection booking system.
												</div>
											</div>

											<div className="row">
												<div className="col s1 m1 l1">
													3.
												</div>
												<div className="col s11 m11 l11">
													<b>In-house Web Developer - Avicall Consultancy</b>
													<br />
													<b>September 2016 - August 2018</b>
												</div>
											</div>
											<div className="row">
												<div className="col s1 m1 l1">
													&nbsp;
												</div>
												<div className="col s11 m11 l11">
													Develop Website from design layout to HTML.
													Develop Backend System for internal use of the company.
												</div>
											</div>

											<div className="row">
												<div className="col s1 m1 l1">
													4.
												</div>
												<div className="col s11 m11 l11">
													<b>IT Developer - PLDT Global</b>
													<br />
													<b>September 2018 - July 2021</b>
												</div>
											</div>
											<div className="row">
												<div className="col s1 m1 l1">
													&nbsp;
												</div>
												<div className="col s11 m11 l11">
													Develop and maintain websites for company and it's products using wordpress. <br />
													Develop web applications, CRM and APIs using PHP(Laravel, CodeIgniter), MEAN stack, PostgreSQL, MySql.
												</div>
											</div>
										</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    );
  }
}

export default About;
