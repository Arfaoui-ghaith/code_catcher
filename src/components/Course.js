import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';
import buyCourse from './utils/stripe';

export default function Course() {

    const res_payment = async () => {
        const url = `/payment/create/${localStorage.getItem('payment_course_id')}/${localStorage.getItem('payment_intent_id')}`;
        try {
            const resultPayment = await axios({
            headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`},
            method: 'get',
            url,
            });

            if (resultPayment.status === 200) {
                console.log(resultPayment);
                
            }

            }catch (err) {
                console.log(err);
            }; 
            localStorage.removeItem('payment_course_id');
            localStorage.removeItem('payment_intent_id');
            localStorage.removeItem('payment_client_id');  
    }

    const [course, setCourse] = useState({});
    const coursId = localStorage.getItem('coursId');
    const buyCoursefunction = (e) => {
        e.target.innerHTML = "PROCESSING ...";
        buyCourse(coursId);
    }

    useEffect(() =>{
        
        if(localStorage.getItem('payment_intent_id') !== null && localStorage.getItem('payment_intent') !== undefined){
            res_payment();
        }

        const url=`cours/${localStorage.getItem('coursId')}`;
        
        const res = async () => {
            try {
            const result = await axios({
            method: 'GET',
            url,
            });

            if (result.status === 200) {
                console.log(result);
                setCourse(result.data);
            }

            }catch (err) {
                console.log(err);
            };   
        };

        res();
        console.log(localStorage.getItem('courseId'));
         
    },[]);


    const layer1 = {
        backgroundImage: "url(images/icons/icon-1.png)"
    }
    const layer2 = {
        backgroundImage: "url(images/icons/icon-2.png)"
    }
    const layer3 = {
        backgroundImage: "url(images/resource/video-image-1.jpg)"
    }
   
    return (
        <React.Fragment>
        <div>
            <section className="page-title">
                <div className="auto-container">
                    <h1>Course Introduction</h1>
                    
                    <div className="search-boxed">
                        <div className="search-box">
                            <form>
                                <div className="form-group">
                                    <input type="search" name="search-field" placeholder="What do you want to learn?" required=""/>
                                    <button type="submit"><span className="icon fa fa-search"></span></button>
                                </div>
                            </form>
                        </div>
                    </div>
                    
                </div>
            </section>

            <section className="intro-section">
                <div className="patern-layer-one paroller" data-paroller-factor="0.40" data-paroller-factor-lg="0.20" data-paroller-type="foreground" data-paroller-direction="vertical" style={layer1}></div>
                <div className="patern-layer-two paroller" data-paroller-factor="0.40" data-paroller-factor-lg="-0.20" data-paroller-type="foreground" data-paroller-direction="vertical" style={layer2}></div>
                <div className="circle-one"></div>
                <div className="auto-container">
                    <div className="sec-title">
                        <h2>{course.title}</h2>
                    </div>
                    
                    <div className="inner-container">
                        <div className="row clearfix">
                            
                            
                            <div className="content-column col-lg-8 col-md-12 col-sm-12">
                                <div className="inner-column">
                                    
                                    
                                    <div className="intro-info-tabs">
                                        
                                        <div className="intro-tabs tabs-box">
                                        
                                            
                                            <ul className="tab-btns tab-buttons clearfix">
                                                <li data-tab="#prod-overview" className="tab-btn active-btn">Overview</li>
                                               
                                                <li data-tab="#prod-reviews" className="tab-btn">Reviews</li>
                                            </ul>
                                            
                                            
                                            <div className="tabs-content">
                                                
                                                
                                                <div className="tab active-tab" id="prod-overview">
                                                    <div className="content">
                                                        
                                                        
                                                        <div className="course-overview">
                                                            <div className="inner-box">
                                                                <h4>25 That Prevent Job Seekers From Overcoming Failure</h4>
                                                                <p>{course.description}</p>
                                                                <ul className="student-list">
                                                                    <li>23,564 Total Students</li>
                                                                    <li><span className="theme_color">4.5</span> <span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span> (1254 Rating)</li>
                                                                    <li>256 Reviews</li>
                                                                </ul>
                                                                <h3>What you’ll learn?</h3>
                                                                <ul className="review-list">
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
                                                                <ul className="requirement-list">
                                                                    <li>Phasellus enim magna, varius et commodo ut, ultricies vitae velit. Ut nulla tellus, eleifend euismod pellentesque vel, sagittis vel justo</li>
                                                                    <li>Ultricies vitae velit. Ut nulla tellus, eleifend euismod pellentesque vel.</li>
                                                                    <li>Phasellus enim magna, varius et commodo ut.</li>
                                                                    <li>Varius et commodo ut, ultricies vitae velit. Ut nulla tellus.</li>
                                                                    <li>Phasellus enim magna, varius et commodo ut.</li>
                                                                </ul>
                                                                <h3>Instructors</h3>
                                                                
                                                                <div className="row clearfix">
                                                                    
                                                                    
                                                                    <div className="student-block col-lg-6 col-md-6 col-sm-12">
                                                                        <div className="block-inner">
                                                                            <div className="image">
                                                                                <img src="images/resource/student-1.jpg" alt=""/>
                                                                            </div>
                                                                            <h2>Stephane Smith</h2>
                                                                            <div className="text">Certified instructor Architecture& Developer</div>
                                                                            <div className="social-box">
                                                                                <Link to="#" className="fa fa-facebook-square"></Link>
                                                                                <Link to="#" className="fa fa-twitter-square"></Link>
                                                                                <Link to="#" className="fa fa-linkedin-square"></Link>
                                                                                <Link to="#" className="fa fa-github"></Link>
                                                                            </div>
                                                                            <Link to="#" className="more">Know More <span className="fa fa-angle-right"></span></Link>
                                                                        </div>
                                                                    </div>
                                                                    
                                                                    
                                                                    <div className="student-block col-lg-6 col-md-6 col-sm-12">
                                                                        <div className="block-inner">
                                                                            <div className="image">
                                                                                <img src="images/resource/student-2.jpg" alt=""/>
                                                                            </div>
                                                                            <h2>Marvin Zona</h2>
                                                                            <div className="text">Certified instructor Architecture& Developer</div>
                                                                            <div className="social-box">
                                                                                <Link to="#" className="fa fa-facebook-square"></Link>
                                                                                <Link to="#" className="fa fa-twitter-square"></Link>
                                                                                <Link to="#" className="fa fa-linkedin-square"></Link>
                                                                                <Link to="#" className="fa fa-github"></Link>
                                                                            </div>
                                                                            <Link to="#" className="more">Know More <span className="fa fa-angle-right"></span></Link>
                                                                        </div>
                                                                    </div>
                                                                    
                                                                </div>
                                                                
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                                
                                                
                                                
                                                <div className="tab" id="prod-reviews">
                                                    <div className="content">
                                                        
                                                        <div className="cource-review-box">
                                                            <h4>Stephane Smith</h4>
                                                            <div className="rating">
                                                                <span className="total-rating">4.5</span> <span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span>&ensp; 256 Reviews
                                                            </div>
                                                            <div className="text">Phasellus enim magna, varius et commodo ut, ultricies vitae velit. Ut nulla tellus, eleifend euismod pellentesque vel, sagittis vel justo. In libero urna, venenatis sit amet ornare non, suscipit nec risus.</div>
                                                            <div className="helpful">Was this review helpful?</div>
                                                            <ul className="like-option">
                                                                <li><span className="icon fa fa-thumbs-o-up"></span></li>
                                                                <li><span className="icon fa fa-thumbs-o-down"></span></li>
                                                                <span className="report">Report</span>
                                                            </ul>
                                                        </div>
                                                        
                                                        <div className="cource-review-box">
                                                            <h4>Anna Sthesia</h4>
                                                            <div className="rating">
                                                                <span className="total-rating">4.5</span> <span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span>&ensp; 256 Reviews
                                                            </div>
                                                            <div className="text">Phasellus enim magna, varius et commodo ut, ultricies vitae velit. Ut nulla tellus, eleifend euismod pellentesque vel, sagittis vel justo. In libero urna, venenatis sit amet ornare non, suscipit nec risus.</div>
                                                            <div className="helpful">Was this review helpful?</div>
                                                            <ul className="like-option">
                                                                <li><span className="icon fa fa-thumbs-o-up"></span></li>
                                                                <li><span className="icon fa fa-thumbs-o-down"></span></li>
                                                                <span className="report">Report</span>
                                                            </ul>
                                                        </div>
                                                        
                                                        <div className="cource-review-box">
                                                            <h4>Petey Cruiser</h4>
                                                            <div className="rating">
                                                                <span className="total-rating">4.5</span> <span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span>&ensp; 256 Reviews
                                                            </div>
                                                            <div className="text">Phasellus enim magna, varius et commodo ut, ultricies vitae velit. Ut nulla tellus, eleifend euismod pellentesque vel, sagittis vel justo. In libero urna, venenatis sit amet ornare non, suscipit nec risus.</div>
                                                            <div className="helpful">Was this review helpful?</div>
                                                            <ul className="like-option">
                                                                <li><span className="icon fa fa-thumbs-o-up"></span></li>
                                                                <li><span className="icon fa fa-thumbs-o-down"></span></li>
                                                                <span className="report">Report</span>
                                                            </ul>
                                                        </div>
                                                        
                                                        <div className="cource-review-box">
                                                            <h4>Rick O'Shea</h4>
                                                            <div className="rating">
                                                                <span className="total-rating">4.5</span> <span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span>&ensp; 256 Reviews
                                                            </div>
                                                            <div className="text">Phasellus enim magna, varius et commodo ut, ultricies vitae velit. Ut nulla tellus, eleifend euismod pellentesque vel, sagittis vel justo. In libero urna, venenatis sit amet ornare non, suscipit nec risus.</div>
                                                            <div className="helpful">Was this review helpful?</div>
                                                            <ul className="like-option">
                                                                <li><span className="icon fa fa-thumbs-o-up"></span></li>
                                                                <li><span className="icon fa fa-thumbs-o-down"></span></li>
                                                                <span className="report">Report</span>
                                                            </ul>
                                                            
                                                            <Link to="#" className="more">View More</Link>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            
                            
                            <div className="video-column col-lg-4 col-md-12 col-sm-12">
                                <div className="inner-column sticky-top">
                                    
                                    
                                    <div className="intro-video" style={layer3}>
                                        <Link to="https://www.youtube.com/watch?v=kxPCFljwJws" className="lightbox-image intro-video-box"><span className="fa fa-play"><i className="ripple"></i></span></Link>
                                        <h4>Preview this course</h4>
                                    </div>
                                
                                    <div className="price" >${course.price}</div>
                                    <div className="time-left">23 hours left at this price!</div>
                                    
                                    <span className="theme-btn btn-style-three" style={{cursor: "pointer"}} onClick={buyCoursefunction}><span className="txt">Buy Now<i className="fa fa-angle-right"></i></span></span>
                                    
                                </div>
                            </div>
                            
                        </div>
                    </div>
                
                </div>
            </section>
            
        </div>
        </React.Fragment>
    )
}
