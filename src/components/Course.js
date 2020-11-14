import React from 'react'
import {Link} from 'react-router-dom';
export default function Course() {

    const layer1 = {
        backgroundImage: "url(images/icons/icon-1.png)"
    }
    const layer2 = {
        backgroundImage: "url(images/icons/icon-2.png)"
    }
    const layer3 = {
        backgroundImage: "url(images/resource/video-image-1.jpg)"
    }
    const layer4 = {
        backgroundImage: "url(images/background/3.png)"
    }
    return (
        <div>
            <section class="page-title">
                <div class="auto-container">
                    <h1>Course Introduction</h1>
                    
                    <div class="search-boxed">
                        <div class="search-box">
                            <form>
                                <div class="form-group">
                                    <input type="search" name="search-field" placeholder="What do you want to learn?" required=""/>
                                    <button type="submit"><span class="icon fa fa-search"></span></button>
                                </div>
                            </form>
                        </div>
                    </div>
                    
                </div>
            </section>

            <section class="intro-section">
                <div class="patern-layer-one paroller" data-paroller-factor="0.40" data-paroller-factor-lg="0.20" data-paroller-type="foreground" data-paroller-direction="vertical" style={layer1}></div>
                <div class="patern-layer-two paroller" data-paroller-factor="0.40" data-paroller-factor-lg="-0.20" data-paroller-type="foreground" data-paroller-direction="vertical" style={layer2}></div>
                <div class="circle-one"></div>
                <div class="auto-container">
                    <div class="sec-title">
                        <h2>Learn  User Interface and <br/> User Experience</h2>
                    </div>
                    
                    <div class="inner-container">
                        <div class="row clearfix">
                            
                            
                            <div class="content-column col-lg-8 col-md-12 col-sm-12">
                                <div class="inner-column">
                                    
                                    
                                    <div class="intro-info-tabs">
                                        
                                        <div class="intro-tabs tabs-box">
                                        
                                            
                                            <ul class="tab-btns tab-buttons clearfix">
                                                <li data-tab="#prod-overview" class="tab-btn active-btn">Overview</li>
                                                <li data-tab="#prod-curriculum" class="tab-btn">Curriculum</li>
                                                <li data-tab="#prod-announcement" class="tab-btn">Announcement</li>
                                                <li data-tab="#prod-faq" class="tab-btn">FAQ</li>
                                                <li data-tab="#prod-reviews" class="tab-btn">Reviews</li>
                                            </ul>
                                            
                                            
                                            <div class="tabs-content">
                                                
                                                
                                                <div class="tab active-tab" id="prod-overview">
                                                    <div class="content">
                                                        
                                                        
                                                        <div class="course-overview">
                                                            <div class="inner-box">
                                                                <h4>25 That Prevent Job Seekers From Overcoming Failure</h4>
                                                                <p>Phasellus enim magna, varius et commodo ut, ultricies vitae velit. Ut nulla tellus, eleifend euismod pellentesque vel, sagittis vel justo. In libero urna, venenatis sit amet ornare non, suscipit nec risus. Sed consequat justo non mauris pretium at tempor justo sodales. Quisque tincidunt laoreet malesuada. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.</p>
                                                                <ul class="student-list">
                                                                    <li>23,564 Total Students</li>
                                                                    <li><span class="theme_color">4.5</span> <span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span> (1254 Rating)</li>
                                                                    <li>256 Reviews</li>
                                                                </ul>
                                                                <h3>What you’ll learn?</h3>
                                                                <ul class="review-list">
                                                                    <li>Phasellus enim magna, varius et commodo ut.</li>
                                                                    <li>Sed consequat justo non mauris pretium at tempor justo.</li>
                                                                    <li>Ut nulla tellus, eleifend euismod pellentesque vel, sagittis vel justo</li>
                                                                    <li>Phasellus enim magna, varius et commodo ut.</li>
                                                                    <li>Phasellus enim magna, varius et commodo ut.</li>
                                                                    <li>Sed consequat justo non mauris pretium at tempor justo.</li>
                                                                    <li>Ut nulla tellus, eleifend euismod pellentesque vel, sagittis vel justo</li>
                                                                    <li>Phasellus enim magna, varius et commodo ut.</li>
                                                                </ul>
                                                                <h3>Requirements</h3>
                                                                <ul class="requirement-list">
                                                                    <li>Phasellus enim magna, varius et commodo ut, ultricies vitae velit. Ut nulla tellus, eleifend euismod pellentesque vel, sagittis vel justo</li>
                                                                    <li>Ultricies vitae velit. Ut nulla tellus, eleifend euismod pellentesque vel.</li>
                                                                    <li>Phasellus enim magna, varius et commodo ut.</li>
                                                                    <li>Varius et commodo ut, ultricies vitae velit. Ut nulla tellus.</li>
                                                                    <li>Phasellus enim magna, varius et commodo ut.</li>
                                                                </ul>
                                                                <h3>Instructors</h3>
                                                                
                                                                <div class="row clearfix">
                                                                    
                                                                    
                                                                    <div class="student-block col-lg-6 col-md-6 col-sm-12">
                                                                        <div class="block-inner">
                                                                            <div class="image">
                                                                                <img src="images/resource/student-1.jpg" alt=""/>
                                                                            </div>
                                                                            <h2>Stephane Smith</h2>
                                                                            <div class="text">Certified instructor Architecture& Developer</div>
                                                                            <div class="social-box">
                                                                                <Link to="#" class="fa fa-facebook-square"></Link>
                                                                                <Link to="#" class="fa fa-twitter-square"></Link>
                                                                                <Link to="#" class="fa fa-linkedin-square"></Link>
                                                                                <Link to="#" class="fa fa-github"></Link>
                                                                            </div>
                                                                            <Link to="#" class="more">Know More <span class="fa fa-angle-right"></span></Link>
                                                                        </div>
                                                                    </div>
                                                                    
                                                                    
                                                                    <div class="student-block col-lg-6 col-md-6 col-sm-12">
                                                                        <div class="block-inner">
                                                                            <div class="image">
                                                                                <img src="images/resource/student-2.jpg" alt=""/>
                                                                            </div>
                                                                            <h2>Marvin Zona</h2>
                                                                            <div class="text">Certified instructor Architecture& Developer</div>
                                                                            <div class="social-box">
                                                                                <Link to="#" class="fa fa-facebook-square"></Link>
                                                                                <Link to="#" class="fa fa-twitter-square"></Link>
                                                                                <Link to="#" class="fa fa-linkedin-square"></Link>
                                                                                <Link to="#" class="fa fa-github"></Link>
                                                                            </div>
                                                                            <Link to="#" class="more">Know More <span class="fa fa-angle-right"></span></Link>
                                                                        </div>
                                                                    </div>
                                                                    
                                                                </div>
                                                                
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                                
                                                
                                                <div class="tab" id="prod-curriculum">
                                                    <div class="content">
                                                        
                                                        
                                                        <ul class="accordion-box">

                                                            
                                                            <li class="accordion block">
                                                                <div class="acc-btn active"><div class="icon-outer"><span class="icon icon-plus flaticon-angle-arrow-down"></span></div> UI/ UX Introduction</div>
                                                                <div class="acc-content current">
                                                                    <div class="content">
                                                                        <div class="clearfix">
                                                                            <div class="pull-left">
                                                                                <Link to="https://www.youtube.com/watch?v=kxPCFljwJws" class="lightbox-image play-icon"><span class="fa fa-play"></span>What is UI/ UX Design?</Link>
                                                                            </div>
                                                                            <div class="pull-right">
                                                                                <div class="minutes">35 Minutes</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="content">
                                                                        <div class="clearfix">
                                                                            <div class="pull-left">
                                                                                <Link to="https://www.youtube.com/watch?v=kxPCFljwJws" class="lightbox-image play-icon"><span class="fa fa-play"><i class="ripple"></i></span>What is UI/ UX Design?</Link>
                                                                            </div>
                                                                            <div class="pull-right">
                                                                                <div class="minutes">35 Minutes</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="content">
                                                                        <div class="clearfix">
                                                                            <div class="pull-left">
                                                                                <Link to="https://www.youtube.com/watch?v=kxPCFljwJws" class="lightbox-image play-icon"><span class="fa fa-play"></span>What is UI/ UX Design?</Link>
                                                                            </div>
                                                                            <div class="pull-right">
                                                                                <div class="minutes">35 Minutes</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>

                                                            
                                                            <li class="accordion block">
                                                                <div class="acc-btn"><div class="icon-outer"><span class="icon icon-plus flaticon-angle-arrow-down"></span></div> Color Theory</div>
                                                                <div class="acc-content">
                                                                    <div class="content">
                                                                        <div class="clearfix">
                                                                            <div class="pull-left">
                                                                                <Link to="https://www.youtube.com/watch?v=kxPCFljwJws" class="lightbox-image play-icon"><span class="fa fa-play"></span>What is UI/ UX Design?</Link>
                                                                            </div>
                                                                            <div class="pull-right">
                                                                                <div class="minutes">35 Minutes</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="content">
                                                                        <div class="clearfix">
                                                                            <div class="pull-left">
                                                                                <Link to="https://www.youtube.com/watch?v=kxPCFljwJws" class="lightbox-image play-icon"><span class="fa fa-play"><i class="ripple"></i></span>What is UI/ UX Design?</Link>
                                                                            </div>
                                                                            <div class="pull-right">
                                                                                <div class="minutes">35 Minutes</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="content">
                                                                        <div class="clearfix">
                                                                            <div class="pull-left">
                                                                                <Link to="https://www.youtube.com/watch?v=kxPCFljwJws" class="lightbox-image play-icon"><span class="fa fa-play"></span>What is UI/ UX Design?</Link>
                                                                            </div>
                                                                            <div class="pull-right">
                                                                                <div class="minutes">35 Minutes</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            
                                                            
                                                            <li class="accordion block">
                                                                <div class="acc-btn"><div class="icon-outer"><span class="icon icon-plus flaticon-angle-arrow-down"></span></div> Basic Typography</div>
                                                                <div class="acc-content">
                                                                    <div class="content">
                                                                        <div class="clearfix">
                                                                            <div class="pull-left">
                                                                                <Link to="https://www.youtube.com/watch?v=kxPCFljwJws" class="lightbox-image play-icon"><span class="fa fa-play"></span>What is UI/ UX Design?</Link>
                                                                            </div>
                                                                            <div class="pull-right">
                                                                                <div class="minutes">35 Minutes</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="content">
                                                                        <div class="clearfix">
                                                                            <div class="pull-left">
                                                                                <Link to="https://www.youtube.com/watch?v=kxPCFljwJws" class="lightbox-image play-icon"><span class="fa fa-play"><i class="ripple"></i></span>What is UI/ UX Design?</Link>
                                                                            </div>
                                                                            <div class="pull-right">
                                                                                <div class="minutes">35 Minutes</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="content">
                                                                        <div class="clearfix">
                                                                            <div class="pull-left">
                                                                                <Link to="https://www.youtube.com/watch?v=kxPCFljwJws" class="lightbox-image play-icon"><span class="fa fa-play"></span>What is UI/ UX Design?</Link>
                                                                            </div>
                                                                            <div class="pull-right">
                                                                                <div class="minutes">35 Minutes</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            
                                                            
                                                            <li class="accordion block">
                                                                <div class="acc-btn"><div class="icon-outer"><span class="icon icon-plus flaticon-angle-arrow-down"></span></div> Wireframing & Prototyping</div>
                                                                <div class="acc-content">
                                                                    <div class="content">
                                                                        <div class="clearfix">
                                                                            <div class="pull-left">
                                                                                <Link to="https://www.youtube.com/watch?v=kxPCFljwJws" class="lightbox-image play-icon"><span class="fa fa-play"></span>What is UI/ UX Design?</Link>
                                                                            </div>
                                                                            <div class="pull-right">
                                                                                <div class="minutes">35 Minutes</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="content">
                                                                        <div class="clearfix">
                                                                            <div class="pull-left">
                                                                                <Link to="https://www.youtube.com/watch?v=kxPCFljwJws" class="lightbox-image play-icon"><span class="fa fa-play"><i class="ripple"></i></span>What is UI/ UX Design?</Link>
                                                                            </div>
                                                                            <div class="pull-right">
                                                                                <div class="minutes">35 Minutes</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="content">
                                                                        <div class="clearfix">
                                                                            <div class="pull-left">
                                                                                <Link to="https://www.youtube.com/watch?v=kxPCFljwJws" class="lightbox-image play-icon"><span class="fa fa-play"></span>What is UI/ UX Design?</Link>
                                                                            </div>
                                                                            <div class="pull-right">
                                                                                <div class="minutes">35 Minutes</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        
                                                        </ul>
                                                        
                                                    </div>
                                                </div>
                                                
                                                
                                                <div class="tab" id="prod-announcement">
                                                    <div class="content">
                                                        
                                                        
                                                        <ul class="accordion-box">

                                                            
                                                            <li class="accordion block">
                                                                <div class="acc-btn active"><div class="icon-outer"><span class="icon icon-plus flaticon-angle-arrow-down"></span></div> UI/ UX Introduction</div>
                                                                <div class="acc-content current">
                                                                    <div class="content">
                                                                        <div class="clearfix">
                                                                            <div class="pull-left">
                                                                                <Link to="https://www.youtube.com/watch?v=kxPCFljwJws" class="lightbox-image play-icon"><span class="fa fa-play"></span>What is UI/ UX Design?</Link>
                                                                            </div>
                                                                            <div class="pull-right">
                                                                                <div class="minutes">35 Minutes</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="content">
                                                                        <div class="clearfix">
                                                                            <div class="pull-left">
                                                                                <Link to="https://www.youtube.com/watch?v=kxPCFljwJws" class="lightbox-image play-icon"><span class="fa fa-play"><i class="ripple"></i></span>What is UI/ UX Design?</Link>
                                                                            </div>
                                                                            <div class="pull-right">
                                                                                <div class="minutes">35 Minutes</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="content">
                                                                        <div class="clearfix">
                                                                            <div class="pull-left">
                                                                                <Link to="https://www.youtube.com/watch?v=kxPCFljwJws" class="lightbox-image play-icon"><span class="fa fa-play"></span>What is UI/ UX Design?</Link>
                                                                            </div>
                                                                            <div class="pull-right">
                                                                                <div class="minutes">35 Minutes</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>

                                                          
                                                            <li class="accordion block">
                                                                <div class="acc-btn"><div class="icon-outer"><span class="icon icon-plus flaticon-angle-arrow-down"></span></div> Color Theory</div>
                                                                <div class="acc-content">
                                                                    <div class="content">
                                                                        <div class="clearfix">
                                                                            <div class="pull-left">
                                                                                <Link to="https://www.youtube.com/watch?v=kxPCFljwJws" class="lightbox-image play-icon"><span class="fa fa-play"></span>What is UI/ UX Design?</Link>
                                                                            </div>
                                                                            <div class="pull-right">
                                                                                <div class="minutes">35 Minutes</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="content">
                                                                        <div class="clearfix">
                                                                            <div class="pull-left">
                                                                                <Link to="https://www.youtube.com/watch?v=kxPCFljwJws" class="lightbox-image play-icon"><span class="fa fa-play"><i class="ripple"></i></span>What is UI/ UX Design?</Link>
                                                                            </div>
                                                                            <div class="pull-right">
                                                                                <div class="minutes">35 Minutes</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="content">
                                                                        <div class="clearfix">
                                                                            <div class="pull-left">
                                                                                <Link to="https://www.youtube.com/watch?v=kxPCFljwJws" class="lightbox-image play-icon"><span class="fa fa-play"></span>What is UI/ UX Design?</Link>
                                                                            </div>
                                                                            <div class="pull-right">
                                                                                <div class="minutes">35 Minutes</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            
                                                            
                                                            <li class="accordion block">
                                                                <div class="acc-btn"><div class="icon-outer"><span class="icon icon-plus flaticon-angle-arrow-down"></span></div> Basic Typography</div>
                                                                <div class="acc-content">
                                                                    <div class="content">
                                                                        <div class="clearfix">
                                                                            <div class="pull-left">
                                                                                <Link to="https://www.youtube.com/watch?v=kxPCFljwJws" class="lightbox-image play-icon"><span class="fa fa-play"></span>What is UI/ UX Design?</Link>
                                                                            </div>
                                                                            <div class="pull-right">
                                                                                <div class="minutes">35 Minutes</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="content">
                                                                        <div class="clearfix">
                                                                            <div class="pull-left">
                                                                                <Link to="https://www.youtube.com/watch?v=kxPCFljwJws" class="lightbox-image play-icon"><span class="fa fa-play"><i class="ripple"></i></span>What is UI/ UX Design?</Link>
                                                                            </div>
                                                                            <div class="pull-right">
                                                                                <div class="minutes">35 Minutes</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="content">
                                                                        <div class="clearfix">
                                                                            <div class="pull-left">
                                                                                <Link to="https://www.youtube.com/watch?v=kxPCFljwJws" class="lightbox-image play-icon"><span class="fa fa-play"></span>What is UI/ UX Design?</Link>
                                                                            </div>
                                                                            <div class="pull-right">
                                                                                <div class="minutes">35 Minutes</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            
                                                            
                                                            <li class="accordion block">
                                                                <div class="acc-btn"><div class="icon-outer"><span class="icon icon-plus flaticon-angle-arrow-down"></span></div> Wireframing & Prototyping</div>
                                                                <div class="acc-content">
                                                                    <div class="content">
                                                                        <div class="clearfix">
                                                                            <div class="pull-left">
                                                                                <Link to="https://www.youtube.com/watch?v=kxPCFljwJws" class="lightbox-image play-icon"><span class="fa fa-play"></span>What is UI/ UX Design?</Link>
                                                                            </div>
                                                                            <div class="pull-right">
                                                                                <div class="minutes">35 Minutes</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="content">
                                                                        <div class="clearfix">
                                                                            <div class="pull-left">
                                                                                <Link to="https://www.youtube.com/watch?v=kxPCFljwJws" class="lightbox-image play-icon"><span class="fa fa-play"><i class="ripple"></i></span>What is UI/ UX Design?</Link>
                                                                            </div>
                                                                            <div class="pull-right">
                                                                                <div class="minutes">35 Minutes</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="content">
                                                                        <div class="clearfix">
                                                                            <div class="pull-left">
                                                                                <Link to="https://www.youtube.com/watch?v=kxPCFljwJws" class="lightbox-image play-icon"><span class="fa fa-play"></span>What is UI/ UX Design?</Link>
                                                                            </div>
                                                                            <div class="pull-right">
                                                                                <div class="minutes">35 Minutes</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        
                                                        </ul>
                                                        
                                                    </div>
                                                </div>
                                                
                                                
                                                <div class="tab" id="prod-faq">
                                                    <div class="content">
                                                        
                                                        
                                                        <ul class="accordion-box">

                                                            
                                                            <li class="accordion block">
                                                                <div class="acc-btn active"><div class="icon-outer"><span class="icon icon-plus flaticon-angle-arrow-down"></span></div> UI/ UX Introduction</div>
                                                                <div class="acc-content current">
                                                                    <div class="content">
                                                                        <div class="clearfix">
                                                                            <div class="pull-left">
                                                                                <Link to="https://www.youtube.com/watch?v=kxPCFljwJws" class="lightbox-image play-icon"><span class="fa fa-play"></span>What is UI/ UX Design?</Link>
                                                                            </div>
                                                                            <div class="pull-right">
                                                                                <div class="minutes">35 Minutes</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="content">
                                                                        <div class="clearfix">
                                                                            <div class="pull-left">
                                                                                <Link to="https://www.youtube.com/watch?v=kxPCFljwJws" class="lightbox-image play-icon"><span class="fa fa-play"><i class="ripple"></i></span>What is UI/ UX Design?</Link>
                                                                            </div>
                                                                            <div class="pull-right">
                                                                                <div class="minutes">35 Minutes</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="content">
                                                                        <div class="clearfix">
                                                                            <div class="pull-left">
                                                                                <Link to="https://www.youtube.com/watch?v=kxPCFljwJws" class="lightbox-image play-icon"><span class="fa fa-play"></span>What is UI/ UX Design?</Link>
                                                                            </div>
                                                                            <div class="pull-right">
                                                                                <div class="minutes">35 Minutes</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>

                                                            
                                                            <li class="accordion block">
                                                                <div class="acc-btn"><div class="icon-outer"><span class="icon icon-plus flaticon-angle-arrow-down"></span></div> Color Theory</div>
                                                                <div class="acc-content">
                                                                    <div class="content">
                                                                        <div class="clearfix">
                                                                            <div class="pull-left">
                                                                                <Link to="https://www.youtube.com/watch?v=kxPCFljwJws" class="lightbox-image play-icon"><span class="fa fa-play"></span>What is UI/ UX Design?</Link>
                                                                            </div>
                                                                            <div class="pull-right">
                                                                                <div class="minutes">35 Minutes</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="content">
                                                                        <div class="clearfix">
                                                                            <div class="pull-left">
                                                                                <Link to="https://www.youtube.com/watch?v=kxPCFljwJws" class="lightbox-image play-icon"><span class="fa fa-play"><i class="ripple"></i></span>What is UI/ UX Design?</Link>
                                                                            </div>
                                                                            <div class="pull-right">
                                                                                <div class="minutes">35 Minutes</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="content">
                                                                        <div class="clearfix">
                                                                            <div class="pull-left">
                                                                                <Link to="https://www.youtube.com/watch?v=kxPCFljwJws" class="lightbox-image play-icon"><span class="fa fa-play"></span>What is UI/ UX Design?</Link>
                                                                            </div>
                                                                            <div class="pull-right">
                                                                                <div class="minutes">35 Minutes</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            
                                                            
                                                            <li class="accordion block">
                                                                <div class="acc-btn"><div class="icon-outer"><span class="icon icon-plus flaticon-angle-arrow-down"></span></div> Basic Typography</div>
                                                                <div class="acc-content">
                                                                    <div class="content">
                                                                        <div class="clearfix">
                                                                            <div class="pull-left">
                                                                                <Link to="https://www.youtube.com/watch?v=kxPCFljwJws" class="lightbox-image play-icon"><span class="fa fa-play"></span>What is UI/ UX Design?</Link>
                                                                            </div>
                                                                            <div class="pull-right">
                                                                                <div class="minutes">35 Minutes</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="content">
                                                                        <div class="clearfix">
                                                                            <div class="pull-left">
                                                                                <Link to="https://www.youtube.com/watch?v=kxPCFljwJws" class="lightbox-image play-icon"><span class="fa fa-play"><i class="ripple"></i></span>What is UI/ UX Design?</Link>
                                                                            </div>
                                                                            <div class="pull-right">
                                                                                <div class="minutes">35 Minutes</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="content">
                                                                        <div class="clearfix">
                                                                            <div class="pull-left">
                                                                                <Link to="https://www.youtube.com/watch?v=kxPCFljwJws" class="lightbox-image play-icon"><span class="fa fa-play"></span>What is UI/ UX Design?</Link>
                                                                            </div>
                                                                            <div class="pull-right">
                                                                                <div class="minutes">35 Minutes</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            
                                                            
                                                            <li class="accordion block">
                                                                <div class="acc-btn"><div class="icon-outer"><span class="icon icon-plus flaticon-angle-arrow-down"></span></div> Wireframing & Prototyping</div>
                                                                <div class="acc-content">
                                                                    <div class="content">
                                                                        <div class="clearfix">
                                                                            <div class="pull-left">
                                                                                <Link to="https://www.youtube.com/watch?v=kxPCFljwJws" class="lightbox-image play-icon"><span class="fa fa-play"></span>What is UI/ UX Design?</Link>
                                                                            </div>
                                                                            <div class="pull-right">
                                                                                <div class="minutes">35 Minutes</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="content">
                                                                        <div class="clearfix">
                                                                            <div class="pull-left">
                                                                                <Link to="https://www.youtube.com/watch?v=kxPCFljwJws" class="lightbox-image play-icon"><span class="fa fa-play"><i class="ripple"></i></span>What is UI/ UX Design?</Link>
                                                                            </div>
                                                                            <div class="pull-right">
                                                                                <div class="minutes">35 Minutes</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="content">
                                                                        <div class="clearfix">
                                                                            <div class="pull-left">
                                                                                <Link to="https://www.youtube.com/watch?v=kxPCFljwJws" class="lightbox-image play-icon"><span class="fa fa-play"></span>What is UI/ UX Design?</Link>
                                                                            </div>
                                                                            <div class="pull-right">
                                                                                <div class="minutes">35 Minutes</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        
                                                        </ul>
                                                        
                                                    </div>
                                                </div>
                                                
                                                
                                                <div class="tab" id="prod-reviews">
                                                    <div class="content">
                                                        
                                                        <div class="cource-review-box">
                                                            <h4>Stephane Smith</h4>
                                                            <div class="rating">
                                                                <span class="total-rating">4.5</span> <span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span>&ensp; 256 Reviews
                                                            </div>
                                                            <div class="text">Phasellus enim magna, varius et commodo ut, ultricies vitae velit. Ut nulla tellus, eleifend euismod pellentesque vel, sagittis vel justo. In libero urna, venenatis sit amet ornare non, suscipit nec risus.</div>
                                                            <div class="helpful">Was this review helpful?</div>
                                                            <ul class="like-option">
                                                                <li><span class="icon fa fa-thumbs-o-up"></span></li>
                                                                <li><span class="icon fa fa-thumbs-o-down"></span></li>
                                                                <span class="report">Report</span>
                                                            </ul>
                                                        </div>
                                                        
                                                        <div class="cource-review-box">
                                                            <h4>Anna Sthesia</h4>
                                                            <div class="rating">
                                                                <span class="total-rating">4.5</span> <span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span>&ensp; 256 Reviews
                                                            </div>
                                                            <div class="text">Phasellus enim magna, varius et commodo ut, ultricies vitae velit. Ut nulla tellus, eleifend euismod pellentesque vel, sagittis vel justo. In libero urna, venenatis sit amet ornare non, suscipit nec risus.</div>
                                                            <div class="helpful">Was this review helpful?</div>
                                                            <ul class="like-option">
                                                                <li><span class="icon fa fa-thumbs-o-up"></span></li>
                                                                <li><span class="icon fa fa-thumbs-o-down"></span></li>
                                                                <span class="report">Report</span>
                                                            </ul>
                                                        </div>
                                                        
                                                        <div class="cource-review-box">
                                                            <h4>Petey Cruiser</h4>
                                                            <div class="rating">
                                                                <span class="total-rating">4.5</span> <span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span>&ensp; 256 Reviews
                                                            </div>
                                                            <div class="text">Phasellus enim magna, varius et commodo ut, ultricies vitae velit. Ut nulla tellus, eleifend euismod pellentesque vel, sagittis vel justo. In libero urna, venenatis sit amet ornare non, suscipit nec risus.</div>
                                                            <div class="helpful">Was this review helpful?</div>
                                                            <ul class="like-option">
                                                                <li><span class="icon fa fa-thumbs-o-up"></span></li>
                                                                <li><span class="icon fa fa-thumbs-o-down"></span></li>
                                                                <span class="report">Report</span>
                                                            </ul>
                                                        </div>
                                                        
                                                        <div class="cource-review-box">
                                                            <h4>Rick O'Shea</h4>
                                                            <div class="rating">
                                                                <span class="total-rating">4.5</span> <span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span>&ensp; 256 Reviews
                                                            </div>
                                                            <div class="text">Phasellus enim magna, varius et commodo ut, ultricies vitae velit. Ut nulla tellus, eleifend euismod pellentesque vel, sagittis vel justo. In libero urna, venenatis sit amet ornare non, suscipit nec risus.</div>
                                                            <div class="helpful">Was this review helpful?</div>
                                                            <ul class="like-option">
                                                                <li><span class="icon fa fa-thumbs-o-up"></span></li>
                                                                <li><span class="icon fa fa-thumbs-o-down"></span></li>
                                                                <span class="report">Report</span>
                                                            </ul>
                                                            
                                                            <Link to="#" class="more">View More</Link>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            
                            
                            <div class="video-column col-lg-4 col-md-12 col-sm-12">
                                <div class="inner-column sticky-top">
                                    
                                    
                                    <div class="intro-video" style={layer3}>
                                        <Link to="https://www.youtube.com/watch?v=kxPCFljwJws" class="lightbox-image intro-video-box"><span class="fa fa-play"><i class="ripple"></i></span></Link>
                                        <h4>Preview this course</h4>
                                    </div>
                                
                                    <div class="price">$11.99</div>
                                    <div class="time-left">23 hours left at this price!</div>
                                    
                                    <Link to="#" class="theme-btn btn-style-three"><span class="txt">Add To Cart <i class="fa fa-angle-right"></i></span></Link>
                                    <Link to="#" class="theme-btn btn-style-two"><span class="txt">Buy Now <i class="fa fa-angle-right"></i></span></Link>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                
                </div>
            </section>
            
            
            <section class="call-to-action-section-two" style={layer4}>
                <div class="auto-container">
                    <div class="content">
                        <h2>Ready to get started?</h2>
                        <div class="text">Replenish him third creature and meat blessed void a fruit gathered you’re, they’re two <br/> waters own morning gathered greater shall had behold had seed.</div>
                        <div class="buttons-box">
                            <Link to="course" class="theme-btn btn-style-one"><span class="txt">Get Stared <i class="fa fa-angle-right"></i></span></Link>
                            <Link to="course" class="theme-btn btn-style-two"><span class="txt">All Courses <i class="fa fa-angle-right"></i></span></Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
