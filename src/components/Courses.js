import React from 'react'
import {Link} from 'react-router-dom';
export default function Courses() {
    const layer1 = {
        backgroundImage: "url(images/icons/icon-1.png)"
    }
    const layer2 = {
        backgroundImage: "url(images/icons/icon-2.png)"
    }
    return (
        <div>
            <section class="page-title">
                <div class="auto-container">
                    <h1>Courses</h1>
                    
                    <div class="search-boxed">
                        <div class="search-box">
                            <form>
                                <div class="form-group">
                                    <input type="search" name="search-field"  placeholder="What do you want to learn?" required=""/>
                                    <button type="submit"><span class="icon fa fa-search"></span></button>
                                </div>
                            </form>
                        </div>
                    </div>
                    
                </div>
            </section>
            <div class="sidebar-page-container">
                <div class="patern-layer-one paroller" data-paroller-factor="0.40" data-paroller-factor-lg="0.20" data-paroller-type="foreground" data-paroller-direction="vertical" style={layer1}></div>
                <div class="patern-layer-two paroller" data-paroller-factor="0.40" data-paroller-factor-lg="-0.20" data-paroller-type="foreground" data-paroller-direction="vertical" style={layer2}></div>
                <div class="circle-one"></div>
                <div class="circle-two"></div>
                <div class="auto-container">
                <div class="row clearfix">
                    
                    
                    <div class="content-side col-lg-9 col-md-12 col-sm-12">
                        <div class="our-courses">
                            
                           
                            <div class="options-view">
                                <div class="clearfix">
                                    <div class="pull-left">
                                        <h3>Browse UI/ UX Courses</h3>
                                    </div>
                                    <div class="pull-right clearfix">
                                      
                                        <div class="type-form">
                                            <form method="post" action="index.html">
                                                
                                                
                                                
                                                
                                            </form>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            
                            <div class="row clearfix">
                                
                                
                                <div class="cource-block-two col-lg-4 col-md-6 col-sm-12">
                                    <div class="inner-box">
                                        <div class="image">
                                            <Link to="course-detail"><img src="images/resource/course-6.jpg" alt=""/></Link>
                                        </div>
                                        <div class="lower-content">
                                            <h5><Link to="course-detail">Interaction Design</Link></h5>
                                            <div class="text">Replenish of  third creature and meat blessed void a fruit gathered waters.</div>
                                            <div class="clearfix">
                                                <div class="pull-left">
                                                    <div class="students">12 Lecturer</div>
                                                </div>
                                                <div class="pull-right">
                                                    <div class="hours">54 Hours</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                
                                <div class="cource-block-two col-lg-4 col-md-6 col-sm-12">
                                    <div class="inner-box">
                                        <div class="image">
                                            <Link to="course-detail"><img src="images/resource/course-7.jpg" alt=""/></Link>
                                        </div>
                                        <div class="lower-content">
                                            <h5><Link to="course-detail">Visual Design</Link></h5>
                                            <div class="text">Replenish of  third creature and meat blessed void a fruit gathered waters.</div>
                                            <div class="clearfix">
                                                <div class="pull-left">
                                                    <div class="students">12 Lecturer</div>
                                                </div>
                                                <div class="pull-right">
                                                    <div class="hours">54 Hours</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                
                                <div class="cource-block-two col-lg-4 col-md-6 col-sm-12">
                                    <div class="inner-box">
                                        <div class="image">
                                            <Link to="course-detail"><img src="images/resource/course-8.jpg" alt=""/></Link>
                                        </div>
                                        <div class="lower-content">
                                            <h5><Link to="course-detail">Wireframe Protos</Link></h5>
                                            <div class="text">Replenish of  third creature and meat blessed void a fruit gathered waters.</div>
                                            <div class="clearfix">
                                                <div class="pull-left">
                                                    <div class="students">12 Lecturer</div>
                                                </div>
                                                <div class="pull-right">
                                                    <div class="hours">54 Hours</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                
                                <div class="cource-block-two col-lg-4 col-md-6 col-sm-12">
                                    <div class="inner-box">
                                        <div class="image">
                                            <Link to="course-detail"><img src="images/resource/course-9.jpg" alt=""/></Link>
                                        </div>
                                        <div class="lower-content">
                                            <h5><Link to="course-detail">Color Theory</Link></h5>
                                            <div class="text">Replenish of  third creature and meat blessed void a fruit gathered waters.</div>
                                            <div class="clearfix">
                                                <div class="pull-left">
                                                    <div class="students">12 Lecturer</div>
                                                </div>
                                                <div class="pull-right">
                                                    <div class="hours">54 Hours</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                
                                <div class="cource-block-two col-lg-4 col-md-6 col-sm-12">
                                    <div class="inner-box">
                                        <div class="image">
                                            <Link to="course-detail"><img src="images/resource/course-10.jpg" alt=""/></Link>
                                        </div>
                                        <div class="lower-content">
                                            <h5><Link to="course-detail">Typography</Link></h5>
                                            <div class="text">Replenish of  third creature and meat blessed void a fruit gathered waters.</div>
                                            <div class="clearfix">
                                                <div class="pull-left">
                                                    <div class="students">12 Lecturer</div>
                                                </div>
                                                <div class="pull-right">
                                                    <div class="hours">54 Hours</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                
                                <div class="cource-block-two col-lg-4 col-md-6 col-sm-12">
                                    <div class="inner-box">
                                        <div class="image">
                                            <Link to="course-detail"><img src="images/resource/course-11.jpg" alt=""/></Link>
                                        </div>
                                        <div class="lower-content">
                                            <h5><Link to="course-detail">Picture Selection</Link></h5>
                                            <div class="text">Replenish of  third creature and meat blessed void a fruit gathered waters.</div>
                                            <div class="clearfix">
                                                <div class="pull-left">
                                                    <div class="students">12 Lecturer</div>
                                                </div>
                                                <div class="pull-right">
                                                    <div class="hours">54 Hours</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                
                                <div class="cource-block-two col-lg-4 col-md-6 col-sm-12">
                                    <div class="inner-box">
                                        <div class="image">
                                            <Link to="course-detail"><img src="images/resource/course-12.jpg" alt=""/></Link>
                                        </div>
                                        <div class="lower-content">
                                            <h5><Link to="course-detail">Interaction Design</Link></h5>
                                            <div class="text">Replenish of  third creature and meat blessed void a fruit gathered waters.</div>
                                            <div class="clearfix">
                                                <div class="pull-left">
                                                    <div class="students">12 Lecturer</div>
                                                </div>
                                                <div class="pull-right">
                                                    <div class="hours">54 Hours</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                
                                <div class="cource-block-two col-lg-4 col-md-6 col-sm-12">
                                    <div class="inner-box">
                                        <div class="image">
                                            <Link to="course-detail"><img src="images/resource/course-13.jpg" alt=""/></Link>
                                        </div>
                                        <div class="lower-content">
                                            <h5><Link to="course-detail">Visual Design</Link></h5>
                                            <div class="text">Replenish of  third creature and meat blessed void a fruit gathered waters.</div>
                                            <div class="clearfix">
                                                <div class="pull-left">
                                                    <div class="students">12 Lecturer</div>
                                                </div>
                                                <div class="pull-right">
                                                    <div class="hours">54 Hours</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                
                                <div class="cource-block-two col-lg-4 col-md-6 col-sm-12">
                                    <div class="inner-box">
                                        <div class="image">
                                            <Link to="/course-detail"><img src="images/resource/course-14.jpg" alt=""/></Link>
                                        </div>
                                        <div class="lower-content">
                                            <h5><Link href="/course-detail">Wireframe Protos</Link></h5>
                                            <div class="text">Replenish of  third creature and meat blessed void a fruit gathered waters.</div>
                                            <div class="clearfix">
                                                <div class="pull-left">
                                                    <div class="students">12 Lecturer</div>
                                                </div>
                                                <div class="pull-right">
                                                    <div class="hours">54 Hours</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            
                        </div>
                        
                    </div>
                    
                    
                    <div class="sidebar-side col-lg-3 col-md-12 col-sm-12">
                        <div class="sidebar-inner">
                            <aside class="sidebar">
                                
                                
                                <div class="filter-widget">
                                    <h5>Filter By</h5>
                                    
                                    <div class="skills-box">
                                        
                                        
                                        <div class="skills-form">
                                            <form >
                                                <span>Skill Level</span>
                                                
                                                
                                                <div class="radio-box">
                                                    <input type="radio" name="remember-password"  id="type-1"/> 
                                                    <label for="type-1">Beginner</label>
                                                </div>
                                                
                                                
                                                <div class="radio-box">
                                                    <input type="radio" name="remember-password" id="type-2"/> 
                                                    <label for="type-2">Intermediate</label>
                                                </div>
                                                
                                                
                                                <div class="radio-box">
                                                    <input type="radio" name="remember-password" id="type-3"/> 
                                                    <label for="type-3">Expert</label>
                                                </div>
                                                
                                            </form>
                                        </div>
                                        
                                    </div>
                                    
                                    <div class="skills-box-two">
                                        
                                        
                                        <div class="skills-form-two">
                                            <form >
                                                <span>Skill Level</span>
                                                
                                                
                                                <div class="radio-box">
                                                    <input type="radio" name="remember-password"  id="type-4"/> 
                                                    <label for="type-4">Free (14)</label>
                                                </div>
                                                
                                                
                                                <div class="radio-box">
                                                    <input type="radio" name="remember-password" id="type-5"/> 
                                                    <label for="type-5">Paid</label>
                                                </div>
                                                
                                            </form>
                                        </div>
                                        
                                    </div>
                                    
                                    <div class="skills-box-three">
                                        
                                        
                                        <div class="skills-form-three">
                                            <form >
                                                <span>Duration Time</span>
                                                
                                                
                                                <div class="radio-box-three">
                                                    <input type="radio" name="remember-password"  id="type-7"/>
                                                    <label for="type-7">5+ hours (30)</label>
                                                </div>
                                                
                                                
                                                <div class="radio-box-three">
                                                    <input type="radio" name="remember-password" id="type-8"/> 
                                                    <label for="type-8">10+ hours (20)</label>
                                                </div>
                                                
                                                <div class="radio-box-three">
                                                    <input type="radio" name="remember-password" id="type-9"/> 
                                                    <label for="type-9">15+ hours (5)</label>
                                                </div>
                                                
                                            </form>
                                        </div>
                                        
                                    </div>
                                    
                                </div>
                                
                            </aside>
                        </div>
                    </div>
                    
                </div>
                
                
                <div class="styled-pagination">
                    <ul class="clearfix">
                        <li class="prev"><Link to="#"><span class="fa fa-angle-left"></span> </Link></li>
                        <li><Link to="#">1</Link></li>
                        <li><Link to="#">2</Link></li>
                        <li class="active"><Link to="#">3</Link></li>
                        <li><Link to="#">4</Link></li>
                        <li><Link to="#">5</Link></li>
                        <li class="next"><Link to="#"><span class="fa fa-angle-right"></span> </Link></li>
                    </ul>
                </div>
                
            </div>
	    </div>
        <section class="popular-courses-section">
            <div class="auto-container">
                <div class="sec-title">
                    <h2>Most Popular Courses</h2>
                </div>
                
                <div class="row clearfix">
                    
                    
                    <div class="cource-block-two col-lg-4 col-md-6 col-sm-12">
                        <div class="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                            <div class="image">
                                <Link to="/course-detail"><img src="images/resource/course-15.jpg" alt=""/></Link>
                            </div>
                            <div class="lower-content">
                                <h5><Link to="/course-detail">Color Theory</Link></h5>
                                <div class="text">Replenish him third creature and meat blessed void a fruit gathered you’re, they’re two waters.</div>
                                <div class="clearfix">
                                    <div class="pull-left">
                                        <div class="students">12 Lecturer</div>
                                    </div>
                                    <div class="pull-right">
                                        <div class="hours">54 Hours</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
                    <div class="cource-block-two col-lg-4 col-md-6 col-sm-12">
                        <div class="inner-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                            <div class="image">
                                <Link to="/course-detail"><img src="images/resource/course-16.jpg" alt=""/></Link>
                            </div>
                            <div class="lower-content">
                                <h5><Link to="/course-detail">Typography</Link></h5>
                                <div class="text">Replenish him third creature and meat blessed void a fruit gathered you’re, they’re two waters.</div>
                                <div class="clearfix">
                                    <div class="pull-left">
                                        <div class="students">12 Lecturer</div>
                                    </div>
                                    <div class="pull-right">
                                        <div class="hours">54 Hours</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
                    <div class="cource-block-two col-lg-4 col-md-6 col-sm-12">
                        <div class="inner-box wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                            <div class="image">
                                <Link to="/course-detail"><img src="images/resource/course-17.jpg" alt=""/></Link>
                            </div>
                            <div class="lower-content">
                                <h5><Link to="/course-detail">Wireframe & Prototyping</Link></h5>
                                <div class="text">Replenish him third creature and meat blessed void a fruit gathered you’re, they’re two waters.</div>
                                <div class="clearfix">
                                    <div class="pull-left">
                                        <div class="students">12 Lecturer</div>
                                    </div>
                                    <div class="pull-right">
                                        <div class="hours">54 Hours</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
            </div>
	    </section>
        </div>
    )
}
