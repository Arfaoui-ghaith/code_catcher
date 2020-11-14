import React from 'react'
import {Link} from 'react-router-dom';
export default function Footer() {

    const action_style = {
        backgroundImage: "url(images/background/3.png)"
    }
  

    const footer2 = {
        backgroundImage: "background-image:url(images/icons/icon-3.png)"
    }
    const dem = {
        width: '240px',
        height: '60px',
    }

    return (
        <div>
        <section class="call-to-action-section-two" style={action_style}>
            <div class="auto-container">
                <div class="content">
                    <h2>Ready to get started?</h2>
                    <div class="text">Replenish him third creature and meat blessed void a fruit gathered you’re, they’re two <br/> waters own morning gathered greater shall had behold had seed.</div>
                    <div class="buttons-box">
                        <Link to="course.html" class="theme-btn btn-style-one"><span class="txt">Get Stared <i class="fa fa-angle-right"></i></span></Link>
                        <Link to="course.html" class="theme-btn btn-style-two"><span class="txt">All Courses <i class="fa fa-angle-right"></i></span></Link>
                    </div>
                </div>
            </div>
        </section>

        <footer class="main-footer">
		
		
		<div class="pattern-layer-two data-paroller-factor=" data-paroller-factor-lg="0.20" data-paroller-type="foreground" data-paroller-direction="vertical" style={footer2}></div>
		<div class="auto-container">
		
        	
            <div class="widgets-section">
            	<div class="row clearfix">
                	
                    
                    <div class="big-column col-lg-6 col-md-12 col-sm-12">
                        <div class="row clearfix">
							
							
                            <div class="footer-column col-lg-7 col-md-6 col-sm-12">
                                <div class="footer-widget logo-widget">
									<div class="logo">
                                    	<Link to="index.html"><img src="images/footer-logo.png" alt="" style={dem}/></Link>
                                    </div>
									<div class="text">Replenish him third creature and meat blessed void a fruit gathered you’re, they’re two waters own morning gathered greater.</div>
									<div class="social-box">
										<Link to="#" class="fa fa-facebook"></Link>
										<Link to="#" class="fa fa-instagram"></Link>
										<Link to="#" class="fa fa-twitter"></Link>
										<Link to="#" class="fa fa-google"></Link>
										<Link to="#" class="fa fa-pinterest-p"></Link>
									</div>
									<div class="copyright">Copyright &copy; {(new Date().getFullYear())} Code Catcher</div>
								</div>
							</div>
							
							
                            <div class="footer-column col-lg-5 col-md-6 col-sm-12">
                                <div class="footer-widget links-widget">
									<h4>About Us</h4>
									<ul class="links-widget">
										<li><Link to="#">Afficiates</Link></li>
										<li><Link to="#">Partners</Link></li>
										<li><Link to="#">Reviews</Link></li>
										<li><Link to="#">Blogs</Link></li>
										<li><Link to="#">Newsletter</Link></li>
									</ul>
								</div>
							</div>
							
						</div>
					</div>
					
					
                    <div class="big-column col-lg-6 col-md-12 col-sm-12">
                        <div class="row clearfix">
							
							
                            <div class="footer-column col-lg-6 col-md-6 col-sm-12">
                                <div class="footer-widget links-widget">
									<h4>Resource</h4>
									<ul class="links-widget">
										<li><Link to="#">Privacy Policy</Link></li>
										<li><Link to="#">Support Area</Link></li>
										<li><Link to="#">Documentations</Link></li>
										<li><Link to="#">How it works</Link></li>
										<li><Link to="#">Terms of Policy</Link></li>
									</ul>
								</div>
							</div>
							
							
                            <div class="footer-column col-lg-6 col-md-6 col-sm-12">
                                <div class="footer-widget links-widget">
									<h4>Quick Links</h4>
									<ul class="links-widget">
										<li><Link to="#">home</Link></li>
										<li><Link to="#">About us</Link></li>
										<li><Link to="#">Features</Link></li>
										<li><Link to="#">Pricing</Link></li>
										<li><Link to="#">Contact</Link></li>
									</ul>
								</div>
							</div>
						
						</div>
					</div>
					
				</div>
			</div>
			
		</div>
	    </footer>
        </div>
    )
}
