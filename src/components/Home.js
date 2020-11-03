import React from 'react'
import {Link, BrowserRouter as Router} from 'react-router-dom';

export default function Home() {
    const pattern_style = {
        backgroundImage: "url(images/background/1.png)"
    }
    const education_style = {
        backgroundImage: "url(images/icons/icon-1.png)"
    }
    const icon_2 = {
        backgroundImage: "url(images/icons/icon-2.png)"
    }
    const action_style = {
        backgroundImage: "url(images/background/3.png)"
    }
    const footer1 = {
        backgroundImage: "url(images/icons/icon-1.png)"
    }

    const footer2 = {
        backgroundImage: "background-image:url(images/icons/icon-3.png)"
    }
    const dem = {
        width: '240px',
        height: '60px',
    }

    return (
        <Router>
        <section class="banner-section">
            <div class="pattern-layer" style={pattern_style}></div>
            <div class="auto-container">
                <div class="content-boxed">
                    <div class="inner-column">
                        <h1>Learn Coding, Programming, Web<br/>Developing from our Experts</h1>
                        <div class="buttons-box">
                            <Link to="/login" class="theme-btn btn-style-one"><span class="txt">Get Stared <i class="fa fa-angle-right"></i></span></Link>
                            <Link to="/courses" class="theme-btn btn-style-two"><span class="txt">All Courses <i class="fa fa-angle-right"></i></span></Link>
                        </div>
                    </div>
                </div>

                <div class="image titlt" data-tilt="" data-tilt-max="4">
				    <span data-fancybox="banner" data-caption="" class=""><img src="images/resource/banner.png" alt=""/></span>
			    </div>

                <div class="search-boxed">
                    <div class="search-box">
                        <form method="post" action="contact.html">
                            <div class="form-group">
                                <input type="search" name="search-field" value="" placeholder="What do you want to learn?" required=""/>
                                <button type="submit"><span class="icon fa fa-search"></span></button>
                            </div>
                        </form>
                    </div>
			    </div>

            </div>
        </section>

        <section class="education-section">
            <div class="patern-layer-one paroller"
            data-paroller-factor="0.60"
            data-paroller-factor-lg="0.20"
            data-paroller-type="foreground"
            data-paroller-direction="vertical"
            style={education_style}>
            </div>

            <div class="patern-layer-two paroller" 
            data-paroller-factor="0.60" 
            data-paroller-factor-lg="-0.20" 
            data-paroller-type="foreground" 
            data-paroller-direction="vertical" 
            style={icon_2}>
            </div>

            <div class="auto-container">
			<div class="row clearfix">
				
				<div class="image-column col-lg-6 col-md-12 col-sm-12">
					<div class="inner-column parallax-scene-1">
						<div class="image parallax-layer" data-depth="0.30">
							<img src="images/resource/education.png" alt=""/>
						</div>
					</div>
				</div>
				
				<div class="content-column col-lg-6 col-md-12 col-sm-12">
					<div class="inner-column">
						<h2>Our education system <br/> works for you</h2>
						<div class="text">Replenish him third creature and meat blessed void a fruit gathered you’re, they’re two waters own morning gathered greater shall had behold had seed.</div>
						<Link to="/courses" class="theme-btn btn-style-two"><span class="txt">Learn More <i class="fa fa-angle-right"></i></span></Link>
					</div>
				</div>
				
			</div>
		</div>
        </section>

        <section class="courses-section">
            <div class="auto-container">
                <div class="row clearfix">
                    
                    
                    <div class="title-column col-lg-4 col-md-12 col-sm-12">
                        <div class="inner-column">
                            
                            <div class="sec-title">
                                <h2>Our top courses</h2>
                                <div class="text">Replenish him third creature and meat blessed void a fruit gathered you’re, they’re two waters own morning gathered.</div>
                            </div>
                            <Link to="#" class="theme-btn btn-style-three"><span class="txt">Get Stared <i class="fa fa-angle-right"></i></span></Link>
                        </div>
                    </div>
                    
                    
                    <div class="cource-block col-lg-4 col-md-6 col-sm-12">
                        <div class="inner-box">
                            <div class="image">
                                <Link to="#"><img src="images/resource/course-1.jpg" alt=""/></Link>
                            </div>
                            <div class="lower-content">
                                <div class="clearfix">
                                    <div class="pull-left">
                                        <h5><Link to="#">Computer Science</Link></h5>
                                    </div>
                                    <div class="pull-right">
                                        <div class="price">$140</div>
                                    </div>
                                </div>
                                <div class="text">Replenish him third creature and meat blessed void a fruit gathered you’re, they’re two waters.</div>
                                <div class="clearfix">
                                    <div class="pull-left">
                                        <div class="students">125 Student</div>
                                    </div>
                                    <div class="pull-right">
                                        <Link to="#" class="enroll">Enroll Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
                    <div class="cource-block col-lg-4 col-md-6 col-sm-12">
                        <div class="inner-box">
                            <div class="image">
                                <Link to="#"><img src="images/resource/course-2.jpg" alt=""/></Link>
                            </div>
                            <div class="lower-content">
                                <div class="clearfix">
                                    <div class="pull-left">
                                        <h5><Link to="#">Data Science</Link></h5>
                                    </div>
                                    <div class="pull-right">
                                        <div class="price">$140</div>
                                    </div>
                                </div>
                                <div class="text">Replenish him third creature and meat blessed void a fruit gathered you’re, they’re two waters.</div>
                                <div class="clearfix">
                                    <div class="pull-left">
                                        <div class="students">125 Student</div>
                                    </div>
                                    <div class="pull-right">
                                        <Link to="#" class="enroll">Enroll Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
                    <div class="cource-block col-lg-4 col-md-6 col-sm-12">
                        <div class="inner-box">
                            <div class="image">
                                <Link to="#"><img src="images/resource/course-3.jpg" alt=""/></Link>
                            </div>
                            <div class="lower-content">
                                <div class="clearfix">
                                    <div class="pull-left">
                                        <h5><Link to="#">Development Course</Link></h5>
                                    </div>
                                    <div class="pull-right">
                                        <div class="price">$140</div>
                                    </div>
                                </div>
                                <div class="text">Replenish him third creature and meat blessed void a fruit gathered you’re, they’re two waters.</div>
                                <div class="clearfix">
                                    <div class="pull-left">
                                        <div class="students">125 Student</div>
                                    </div>
                                    <div class="pull-right">
                                        <Link to="#" class="enroll">Enroll Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
                    <div class="cource-block col-lg-4 col-md-6 col-sm-12">
                        <div class="inner-box">
                            <div class="image">
                                <Link to="#"><img src="images/resource/course-4.jpg" alt=""/></Link>
                            </div>
                            <div class="lower-content">
                                <div class="clearfix">
                                    <div class="pull-left">
                                        <h5><Link to="#">Language Course</Link></h5>
                                    </div>
                                    <div class="pull-right">
                                        <div class="price">$140</div>
                                    </div>
                                </div>
                                <div class="text">Replenish him third creature and meat blessed void a fruit gathered you’re, they’re two waters.</div>
                                <div class="clearfix">
                                    <div class="pull-left">
                                        <div class="students">125 Student</div>
                                    </div>
                                    <div class="pull-right">
                                        <Link to="#" class="enroll">Enroll Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
                    <div class="cource-block col-lg-4 col-md-6 col-sm-12">
                        <div class="inner-box">
                            <div class="image">
                                <Link to="#"><img src="images/resource/course-5.jpg" alt=""/></Link>
                            </div>
                            <div class="lower-content">
                                <div class="clearfix">
                                    <div class="pull-left">
                                        <h5><Link to="#">Business Course</Link></h5>
                                    </div>
                                    <div class="pull-right">
                                        <div class="price">$140</div>
                                    </div>
                                </div>
                                <div class="text">Replenish him third creature and meat blessed void a fruit gathered you’re, they’re two waters.</div>
                                <div class="clearfix">
                                    <div class="pull-left">
                                        <div class="students">125 Student</div>
                                    </div>
                                    <div class="pull-right">
                                        <Link to="#" class="enroll">Enroll Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
	    </section>

        <section class="achievements-section">
            <div class="auto-container">
                
                <div class="sec-title centered">
                    <h2>Our achievements</h2>
                    <div class="text">Replenish him third creature and meat blessed void a fruit gathered you’re, they’re <br/> two waters own morning gathered greater shall had behold had seed.</div>
                </div>
                
                
                <div class="fact-counter">
                    <div class="row clearfix">

                       
                        <div class="column counter-column col-lg-4 col-md-6 col-sm-12">
                            <div class="inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div class="content">
                                    <div class="icon-box">
                                        <span class="icon flaticon-course"></span>
                                    </div>
                                    <h4 class="counter-title">Total Courses</h4>
                                    <div class="count-outer count-box">
                                        <span class="count-text" data-speed="2000" data-stop="50">0</span>+
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                        <div class="column counter-column col-lg-4 col-md-6 col-sm-12">
                            <div class="inner wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div class="content">
                                    <div class="icon-box">
                                        <span class="icon flaticon-course-1"></span>
                                    </div>
                                    <h4 class="counter-title">Total Student</h4>
                                    <div class="count-outer count-box alternate">
                                        <span class="count-text" data-speed="3000" data-stop="45">0</span>K+
                                    </div>
                                </div>
                            </div>
                        </div>

                       
                        <div class="column counter-column col-lg-4 col-md-6 col-sm-12">
                            <div class="inner wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div class="content">
                                    <div class="icon-box">
                                        <span class="icon flaticon-world"></span>
                                    </div>
                                    <h4 class="counter-title">Global Position</h4>
                                    <div class="count-outer count-box">
                                        <span class="count-text" data-speed="4000" data-stop="115">0</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    
                </div>
            </div>
	    </section>


        <section class="achievements-section">
            <div class="auto-container">
                
                <div class="sec-title centered">
                    <h2>Students Opinion</h2>
                    <div class="text">Replenish him third creature and meat blessed void a fruit gathered you’re, they’re <br/> two waters own morning gathered greater shall had behold had seed.</div>
                </div>
                
                
                <div class="fact-counter">
                    <div class="row clearfix">

                       
                        <div class="column counter-column col-lg-4 col-md-6 col-sm-12">
                            <div class="inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div class="content">
                                    <div class="icon-box">
                                    <img src="images/resource/author-5.jpg" alt=""/>
                                    </div>
                                   
                                    <div class="text">
                                    Replenish him third creature and meat blessed void a fruit gathered you’re, they’re two waters own morning gathered greater shall had behold had seed. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                        <div class="column counter-column col-lg-4 col-md-6 col-sm-12">
                            <div class="inner wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div class="content">
                                    <div class="icon-box">
                                    <img src="images/resource/author-3.jpg" alt=""/>
                                    </div>
                                    
                                    <div class="text">
                                    Replenish him third creature and meat blessed void a fruit gathered you’re, they’re two waters own morning gathered greater shall had behold had seed. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it
                                    </div>
                                </div>
                            </div>
                        </div>

                       
                        <div class="column counter-column col-lg-4 col-md-6 col-sm-12">
                            <div class="inner wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div class="content">
                                    <div class="icon-box">
                                    <img src="images/resource/author-8.jpg" alt=""/>
                                    </div>

                                    
                            
                                    
                                    <div class="text">
                                    Replenish him third creature and meat blessed void a fruit gathered you’re, they’re two waters own morning gathered greater shall had behold had seed. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    
                </div>
            </div>
	    </section>
        
        
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
		
		<div class="pattern-layer paroller" data-paroller-factor="0.60" data-paroller-factor-lg="0.20" data-paroller-type="foreground" data-paroller-direction="vertical" style={footer1}></div>
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
									<div class="copyright">Copyright &copy; 2020 AuburnForest</div>
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
        </Router>
    )
}
