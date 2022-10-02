import React, { Component } from 'react';
import { Element } from 'react-scroll'

import './Contact.css';

class Contact extends Component {
  render() {
    return (
		<Element name="contact" className="element">
    	<div className="contact" id="">
			<div className="container">
				<div className="section">
					<div id="contact-content">
						<div className="row">
							<div className="col blue-text text-accent-2 proj l12 m12 s12">
								<h2 className="section-header">Contact me and let's work together</h2>
								<div className="divider"></div>
							</div>
						</div>
						<div className="row form">
							<div className="col s10 m10 l10">
								<form action="email.php" method="POST">
									<div className="row">
										<div className="input-field col s12 m6 l6">
											<input id="name" type="text" className="validate" name="name" required="" />
											<label for="name">Name</label>
										</div>
										<div className="input-field col s12 m6 l6">
											<input id="email" type="email" className="validate" name="email" required="" />
											<label for="email">Email</label>
										</div>
									</div>
									<div className="row">
										<div className="input-field col s12">
											<input id="subject" type="text" className="validate" name="subject" required="" />
											<label for="subject">Subject</label>
										</div>
									</div>
									<div className="row">
										<div className="input-field col s12">
											<textarea id="message" className="materialize-textarea" name="message" required=""></textarea>
											<label for="message">Message</label>
										</div>
									</div>
									<div className="row">
										<button className="btn waves-effect waves-light" type="submit" name="send" disabled>Send
											<i className="material-icons right"></i>
									    </button>
									</div>
								</form>
							</div>
							<div className="col s2 m2 l2 center-align">
							<ul className="contact-list">
								<li><a href="mailto:adrianphiliprios@gmail.com"><i className="fa fa-envelope-square fa-4x"></i></a></li>
								<li><a href="https://www.facebook.com/arwebdesign25/" target="_blank" ><i className="fa fa-facebook-official fa-4x" ></i></a></li>
								<li><a href="https://ph.linkedin.com/in/adrianrios13" target="_blank"><i className="fa fa-linkedin-square fa-4x" ></i></a></li>
								<li><a href="https://www.instagram.com/pipsgallery/" target="_blank"><i className="fa fa-instagram fa-4x" ></i></a></li>
								<li><a href="https://github.com/adrianrios25" target="_blank"><i className="fa fa-github fa-4x" ></i></a></li>
								<li><a href="http://codepen.io/adrianrios/" target="_blank"><i className="fa fa-codepen fa-4x" ></i></a></li>
							</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		</Element>
    );
  }
}

export default Contact;
