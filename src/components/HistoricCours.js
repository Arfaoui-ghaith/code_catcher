import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import moment from 'moment';

function HistoricCours() {



    const [courses, setCourses] = useState([]);

    useEffect(() =>{
        const url='/payment/payments';
        
        const res = async () => {
            try {
            const result = await axios({
            headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`},
            method: 'get',
            url,
            });

            if (result.status === 200) {
                setCourses(result.data.payments);
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

    const Langer = {
        fontFamily: "Langar, cursive"
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
                    <h1>Course History</h1>
                    
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
                                        <h3>Browse Courses History</h3>
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
                                            <div className="cource-block-two col-lg-12 col-md-12 col-sm-12">
                                                <div className="inner-box">
                                                    <div className="lower-content">
                                                        <h5><Link to="/course"  className="text-primary" alt={el._id} ><i class="fas fa-bookmark"></i> Course: {el.idCours.title}</Link></h5>
                                                        <div className="text" style={styleText} ><i class="fas fa-chalkboard-teacher"></i> <span style={Langer}>Instructor:</span> {el.to.username}</div>
                                                        <div className="clearfix">
                                                            <div className="pull-left">
                                                                <div className="students" style={Langer}><i class="far fa-calendar"></i> {moment(el.createdAt).fromNow()}</div>
                                                            </div>
                                                            <div className="pull-right">
                                                                <div className="hours">${el.amount}</div>
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


                                    <div className="skills-box-three">
                                        
                                        
                                        <div className="skills-form-three">
                                            <form >
                                                <span>Unlocking Date</span>
                                                
                                                
                                                <div className="radio-box-three">
                                                    <input type="radio" name="remember-password"  id="type-7"/>
                                                    <label htmlFor="type-7">Ascending</label>
                                                </div>
                                                
                                                
                                                <div className="radio-box-three">
                                                    <input type="radio" name="remember-password" id="type-8"/> 
                                                    <label htmlFor="type-8">Descending</label>
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
       
        </div>
        </React.Fragment>
    )
}

export default HistoricCours
