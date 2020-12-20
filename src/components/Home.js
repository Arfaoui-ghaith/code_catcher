import React from 'react'
import {Link} from 'react-router-dom';


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

  
    return (
        <React.Fragment>
        <div>
        <section className="banner-section">
            <div className="pattern-layer" style={pattern_style}></div>
            <div className="auto-container">
                <div className="content-boxed">
                    <div className="inner-column">
                        <h1>Learn Coding, Programming, Web<br/>Developing from our Experts</h1>
                        <div className="buttons-box">
                            <Link to="/login" className="theme-btn btn-style-one"><span className="txt">Get Stared <i className="fa fa-angle-right"></i></span></Link>
                            <Link to="/courses" className="theme-btn btn-style-two"><span className="txt">All Courses <i className="fa fa-angle-right"></i></span></Link>
                        </div>
                    </div>
                </div>

                <div className="image titlt" data-tilt="" data-tilt-max="4">
				    <span data-fancybox="banner" data-caption="" className=""><img src="images/resource/banner.png" alt=""/></span>
			    </div>

                <div className="search-boxed">
                    <div className="search-box">
                        <form>
                            <div className="form-group">
                                <input type="search" name="search-field"  placeholder="What do you want to learn?" required=""/>
                                <button type="submit"><span className="icon fa fa-search"></span></button>
                            </div>
                        </form>
                    </div>
			    </div>

            </div>
        </section>

        <section className="education-section">
            <div className="patern-layer-one paroller"
            data-paroller-factor="0.60"
            data-paroller-factor-lg="0.20"
            data-paroller-type="foreground"
            data-paroller-direction="vertical"
            style={education_style}>
            </div>

            <div className="patern-layer-two paroller" 
            data-paroller-factor="0.60" 
            data-paroller-factor-lg="-0.20" 
            data-paroller-type="foreground" 
            data-paroller-direction="vertical" 
            style={icon_2}>
            </div>

            <div className="auto-container">
			<div className="row clearfix">
				
				<div className="image-column col-lg-6 col-md-12 col-sm-12">
					<div className="inner-column parallax-scene-1">
						<div className="image parallax-layer" data-depth="0.30">
							<img src="images/resource/education.png" alt=""/>
						</div>
					</div>
				</div>
				
				<div className="content-column col-lg-6 col-md-12 col-sm-12">
					<div className="inner-column">
						<h2>Our education system <br/> works for you</h2>
						<div className="text">Replenish him third creature and meat blessed void a fruit gathered you’re, they’re two waters own morning gathered greater shall had behold had seed.</div>
						<Link to="/all-courses" className="theme-btn btn-style-two"><span className="txt">Learn More <i className="fa fa-angle-right"></i></span></Link>
					</div>
				</div>
				
			</div>
		</div>
        </section>

        <section className="courses-section">
            <div className="auto-container">
                <div className="row clearfix">
                    
                    
                    <div className="title-column col-lg-4 col-md-12 col-sm-12">
                        <div className="inner-column">
                            
                            <div className="sec-title">
                                <h2>Our top courses</h2>
                                <div className="text">Replenish him third creature and meat blessed void a fruit gathered you’re, they’re two waters own morning gathered.</div>
                            </div>
                            <Link to="#" className="theme-btn btn-style-three"><span className="txt">Get Stared <i className="fa fa-angle-right"></i></span></Link>
                        </div>
                    </div>
                    
                    
                    <div className="cource-block col-lg-4 col-md-6 col-sm-12">
                        <div className="inner-box">
                            <div className="image">
                                <Link to="#"><img src="images/resource/course-1.jpg" alt=""/></Link>
                            </div>
                            <div className="lower-content">
                                <div className="clearfix">
                                    <div className="pull-left">
                                        <h5><Link to="#">Computer Science</Link></h5>
                                    </div>
                                    <div className="pull-right">
                                        <div className="price">$140</div>
                                    </div>
                                </div>
                                <div className="text">Replenish him third creature and meat blessed void a fruit gathered you’re, they’re two waters.</div>
                                <div className="clearfix">
                                    <div className="pull-left">
                                        <div className="students">125 Student</div>
                                    </div>
                                    <div className="pull-right">
                                        <Link to="#" className="enroll">Enroll Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
                    <div className="cource-block col-lg-4 col-md-6 col-sm-12">
                        <div className="inner-box">
                            <div className="image">
                                <Link to="#"><img src="images/resource/course-2.jpg" alt=""/></Link>
                            </div>
                            <div className="lower-content">
                                <div className="clearfix">
                                    <div className="pull-left">
                                        <h5><Link to="#">Data Science</Link></h5>
                                    </div>
                                    <div className="pull-right">
                                        <div className="price">$140</div>
                                    </div>
                                </div>
                                <div className="text">Replenish him third creature and meat blessed void a fruit gathered you’re, they’re two waters.</div>
                                <div className="clearfix">
                                    <div className="pull-left">
                                        <div className="students">125 Student</div>
                                    </div>
                                    <div className="pull-right">
                                        <Link to="#" className="enroll">Enroll Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
                    <div className="cource-block col-lg-4 col-md-6 col-sm-12">
                        <div className="inner-box">
                            <div className="image">
                                <Link to="#"><img src="images/resource/course-3.jpg" alt=""/></Link>
                            </div>
                            <div className="lower-content">
                                <div className="clearfix">
                                    <div className="pull-left">
                                        <h5><Link to="#">Development Course</Link></h5>
                                    </div>
                                    <div className="pull-right">
                                        <div className="price">$140</div>
                                    </div>
                                </div>
                                <div className="text">Replenish him third creature and meat blessed void a fruit gathered you’re, they’re two waters.</div>
                                <div className="clearfix">
                                    <div className="pull-left">
                                        <div className="students">125 Student</div>
                                    </div>
                                    <div className="pull-right">
                                        <Link to="#" className="enroll">Enroll Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
                    <div className="cource-block col-lg-4 col-md-6 col-sm-12">
                        <div className="inner-box">
                            <div className="image">
                                <Link to="#"><img src="images/resource/course-4.jpg" alt=""/></Link>
                            </div>
                            <div className="lower-content">
                                <div className="clearfix">
                                    <div className="pull-left">
                                        <h5><Link to="#">Language Course</Link></h5>
                                    </div>
                                    <div className="pull-right">
                                        <div className="price">$140</div>
                                    </div>
                                </div>
                                <div className="text">Replenish him third creature and meat blessed void a fruit gathered you’re, they’re two waters.</div>
                                <div className="clearfix">
                                    <div className="pull-left">
                                        <div className="students">125 Student</div>
                                    </div>
                                    <div className="pull-right">
                                        <Link to="#" className="enroll">Enroll Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
                    <div className="cource-block col-lg-4 col-md-6 col-sm-12">
                        <div className="inner-box">
                            <div className="image">
                                <Link to="#"><img src="images/resource/course-5.jpg" alt=""/></Link>
                            </div>
                            <div className="lower-content">
                                <div className="clearfix">
                                    <div className="pull-left">
                                        <h5><Link to="#">Business Course</Link></h5>
                                    </div>
                                    <div className="pull-right">
                                        <div className="price">$140</div>
                                    </div>
                                </div>
                                <div className="text">Replenish him third creature and meat blessed void a fruit gathered you’re, they’re two waters.</div>
                                <div className="clearfix">
                                    <div className="pull-left">
                                        <div className="students">125 Student</div>
                                    </div>
                                    <div className="pull-right">
                                        <Link to="#" className="enroll">Enroll Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
	    </section>

        <section className="achievements-section">
            <div className="auto-container">
                
                <div className="sec-title centered">
                    <h2>Our achievements</h2>
                    <div className="text">Replenish him third creature and meat blessed void a fruit gathered you’re, they’re <br/> two waters own morning gathered greater shall had behold had seed.</div>
                </div>
                
                
                <div className="fact-counter">
                    <div className="row clearfix">

                       
                        <div className="column counter-column col-lg-4 col-md-6 col-sm-12">
                            <div className="inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="content">
                                    <div className="icon-box">
                                        <span className="icon flaticon-course"></span>
                                    </div>
                                    <h4 className="counter-title">Total Courses</h4>
                                    <div className="count-outer count-box">
                                        <span className="count-text" data-speed="2000" data-stop="50">0</span>+
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                        <div className="column counter-column col-lg-4 col-md-6 col-sm-12">
                            <div className="inner wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="content">
                                    <div className="icon-box">
                                        <span className="icon flaticon-course-1"></span>
                                    </div>
                                    <h4 className="counter-title">Total Student</h4>
                                    <div className="count-outer count-box alternate">
                                        <span className="count-text" data-speed="3000" data-stop="45">0</span>K+
                                    </div>
                                </div>
                            </div>
                        </div>

                       
                        <div className="column counter-column col-lg-4 col-md-6 col-sm-12">
                            <div className="inner wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="content">
                                    <div className="icon-box">
                                        <span className="icon flaticon-world"></span>
                                    </div>
                                    <h4 className="counter-title">Global Position</h4>
                                    <div className="count-outer count-box">
                                        <span className="count-text" data-speed="4000" data-stop="115">0</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    
                </div>
            </div>
	    </section>


        <section className="testimonial-section">
            <div className="auto-container">
                
                <div className="sec-title centered">
                    <h2>Students & Instructors Opinion</h2>
                </div>
                
                
                <div className="authors-box">
                    <div className="author-one"><img src="images/resource/author-2.jpg" alt=""/></div>
                    <div className="author-two"><img src="images/resource/author-3.jpg" alt=""/></div>
                    <div className="author-three"><img src="images/resource/author-4.jpg" alt=""/></div>
                    <div className="author-four"><img src="images/resource/author-5.jpg" alt=""/></div>
                    
                    <div className="author-five"><img src="images/resource/author-6.jpg" alt=""/></div>
                    <div className="author-six"><img src="images/resource/author-7.jpg" alt=""/></div>
                    <div className="author-seven"><img src="images/resource/author-8.jpg" alt=""/></div>
                    <div className="author-eight"><img src="images/resource/author-9.jpg" alt=""/></div>
                </div>
                
                <div className="single-item-carousel owl-carousel owl-theme">
                    
                    
                    <div className="testimonial-block">
                        <div className="inner-box">
                            <div className="image-box">
                                <div className="quote-icon flaticon-quote-5"></div>
                                <div className="image">
                                    <img src="images/resource/author-1.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="text">Replenish him third creature and meat blessed void a fruit gathered you’re, they’re two waters own morning gathered greater shall had behold had seed. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it</div>
                        </div>
                    </div>
                    
                   
                    <div className="testimonial-block">
                        <div className="inner-box">
                            <div className="image-box">
                                <div className="image">
                                    <img src="images/resource/author-5.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="text">Replenish him third creature and meat blessed void a fruit gathered you’re, they’re two waters own morning gathered greater shall had behold had seed. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it</div>
                        </div>
                    </div>
                    
                    
                    <div className="testimonial-block">
                        <div className="inner-box">
                            <div className="image-box">
                                <div className="image">
                                    <img src="images/resource/author-5.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="text">Replenish him third creature and meat blessed void a fruit gathered you’re, they’re two waters own morning gathered greater shall had behold had seed. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it</div>
                        </div>
                    </div>
                    
                </div>
                
            </div>
	    </section>
        </div>
        </React.Fragment>
    )
}
