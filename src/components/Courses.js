import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default function Courses() {

    const [courses, setCourses] = useState([]);

    useEffect(() =>{
        const url='cours/';
        
        const res = async () => {
            try {
            const result = await axios({
            method: 'GET',
            url,
            });

            if (result.status === 200) {
                console.log(result);
                setCourses(result.data);
            }

            }catch (err) {
                console.log(err);
            };   
        };

        res();

         
    },[]);


    const styleText = {
        wordWrap: "break-word",
        "overflow": "hidden",
        "display": "-webkit-box",
        WebkitLineClamp: "3",
        WebkitBoxOrient: "vertical"
    }

    
    const layer1 = {
        backgroundImage: "url(images/icons/icon-1.png)"
    }
    const layer2 = {
        backgroundImage: "url(images/icons/icon-2.png)"
    }

    const refreshPage = (e) => {
        localStorage.setItem('coursId',e.target.alt);
        window.location.replace(e.target.href ? e.target.href : e.target.name );
      }

    return (
        <React.Fragment>
        <div>
            <section className="page-title">
                <div className="auto-container">
                    <h1>Courses</h1>
                    
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
            <div className="sidebar-page-container">
                <div className="patern-layer-one paroller" data-paroller-factor="0.40" data-paroller-factor-lg="0.20" data-paroller-type="foreground" data-paroller-direction="vertical" style={layer1}></div>
                <div className="patern-layer-two paroller" data-paroller-factor="0.40" data-paroller-factor-lg="-0.20" data-paroller-type="foreground" data-paroller-direction="vertical" style={layer2}></div>
                <div className="circle-one"></div>
                <div className="circle-two"></div>
                <div className="auto-container">
                <div className="row clearfix">
                    
                    
                    <div className="content-side col-lg-9 col-md-12 col-sm-12">
                        <div className="our-courses">
                            
                           
                            <div className="options-view">
                                <div className="clearfix">
                                    <div className="pull-left">
                                        <h3>Browse All Courses</h3>
                                    </div>
                                    <div className="pull-right clearfix">
                                      
                                        <div className="type-form">
                                            <form method="post" action="index.html">
                                                
                                                
                                                
                                                
                                            </form>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            
                            <div className="row clearfix">
                                
                                {
                                    courses.map((el,index) => (
                                            <React.Fragment key={index}>
                                            <div className="cource-block-two col-lg-4 col-md-6 col-sm-12">
                                                <div className="inner-box">
                                                    <div className="image">
                                                        <Link to="/course" onClick={refreshPage}><img src="images/resource/course-6.jpg" alt={el._id} name="/course"/></Link>
                                                    </div>
                                                    <div className="lower-content">
                                                        <h5><Link to="/course" alt={el._id}  onClick={refreshPage}>{el.title}</Link></h5>
                                                        <div className="text" style={styleText} >{el.description}</div>
                                                        <div className="clearfix">
                                                            <div className="pull-left">
                                                                <div className="students">{el.listVideo.length} Lecturer</div>
                                                            </div>
                                                            <div className="pull-right">
                                                                <div className="hours">${el.price}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            </React.Fragment>  
                                    )
                                )
                                }
                                
                        
                                
                            </div>
                            
                        </div>
                        
                    </div>
                    
                    
                    <div className="sidebar-side col-lg-3 col-md-12 col-sm-12">
                        <div className="sidebar-inner">
                            <aside className="sidebar">
                                
                                
                                <div className="filter-widget">
                                    <h5>Filter By</h5>
                                    
                                    <div className="skills-box">
                                        
                                        
                                        <div className="skills-form">
                                            <form >
                                                <span>Skill Level</span>
                                                
                                                
                                                <div className="radio-box">
                                                    <input type="radio" name="remember-password"  id="type-1"/> 
                                                    <label htmlFor="type-1">Beginner</label>
                                                </div>
                                                
                                                
                                                <div className="radio-box">
                                                    <input type="radio" name="remember-password" id="type-2"/> 
                                                    <label htmlFor="type-2">Intermediate</label>
                                                </div>
                                                
                                                
                                                <div className="radio-box">
                                                    <input type="radio" name="remember-password" id="type-3"/> 
                                                    <label htmlFor="type-3">Expert</label>
                                                </div>
                                                
                                            </form>
                                        </div>
                                        
                                    </div>
                                    
                                    <div className="skills-box-two">
                                        
                                        
                                        <div className="skills-form-two">
                                            <form >
                                                <span>Skill Level</span>
                                                
                                                
                                                <div className="radio-box">
                                                    <input type="radio" name="remember-password"  id="type-4"/> 
                                                    <label htmlFor="type-4">Free (14)</label>
                                                </div>
                                                
                                                
                                                <div className="radio-box">
                                                    <input type="radio" name="remember-password" id="type-5"/> 
                                                    <label htmlFor="type-5">Paid</label>
                                                </div>
                                                
                                            </form>
                                        </div>
                                        
                                    </div>
                                    
                                    <div className="skills-box-three">
                                        
                                        
                                        <div className="skills-form-three">
                                            <form >
                                                <span>Duration Time</span>
                                                
                                                
                                                <div className="radio-box-three">
                                                    <input type="radio" name="remember-password"  id="type-7"/>
                                                    <label htmlFor="type-7">5+ hours (30)</label>
                                                </div>
                                                
                                                
                                                <div className="radio-box-three">
                                                    <input type="radio" name="remember-password" id="type-8"/> 
                                                    <label htmlFor="type-8">10+ hours (20)</label>
                                                </div>
                                                
                                                <div className="radio-box-three">
                                                    <input type="radio" name="remember-password" id="type-9"/> 
                                                    <label htmlFor="type-9">15+ hours (5)</label>
                                                </div>
                                                
                                            </form>
                                        </div>
                                        
                                    </div>
                                    
                                </div>
                                
                            </aside>
                        </div>
                    </div>
                    
                </div>
                
                
                
                
            </div>
	    </div>
        <section className="popular-courses-section">
            <div className="auto-container">
                <div className="sec-title">
                    <h2>Most Popular Courses</h2>
                </div>
                
                <div className="row clearfix">
                    
                    
                    <div className="cource-block-two col-lg-4 col-md-6 col-sm-12">
                        <div className="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                            <div className="image">
                                <Link to="/course-detail"><img src="images/resource/course-15.jpg" alt=""/></Link>
                            </div>
                            <div className="lower-content">
                                <h5><Link to="/course-detail">Color Theory</Link></h5>
                                <div className="text">Replenish him third creature and meat blessed void a fruit gathered you’re, they’re two waters.</div>
                                <div className="clearfix">
                                    <div className="pull-left">
                                        <div className="students">12 Lecturer</div>
                                    </div>
                                    <div className="pull-right">
                                        <div className="hours">54 Hours</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
                    <div className="cource-block-two col-lg-4 col-md-6 col-sm-12">
                        <div className="inner-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                            <div className="image">
                                <Link to="/course-detail"><img src="images/resource/course-16.jpg" alt=""/></Link>
                            </div>
                            <div className="lower-content">
                                <h5><Link to="/course-detail">Typography</Link></h5>
                                <div className="text">Replenish him third creature and meat blessed void a fruit gathered you’re, they’re two waters.</div>
                                <div className="clearfix">
                                    <div className="pull-left">
                                        <div className="students">12 Lecturer</div>
                                    </div>
                                    <div className="pull-right">
                                        <div className="hours">54 Hours</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
                    <div className="cource-block-two col-lg-4 col-md-6 col-sm-12">
                        <div className="inner-box wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                            <div className="image">
                                <Link to="/course-detail"><img src="images/resource/course-17.jpg" alt=""/></Link>
                            </div>
                            <div className="lower-content">
                                <h5><Link to="/course-detail">Wireframe & Prototyping</Link></h5>
                                <div className="text">Replenish him third creature and meat blessed void a fruit gathered you’re, they’re two waters.</div>
                                <div className="clearfix">
                                    <div className="pull-left">
                                        <div className="students">12 Lecturer</div>
                                    </div>
                                    <div className="pull-right">
                                        <div className="hours">54 Hours</div>
                                    </div>
                                </div>
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
