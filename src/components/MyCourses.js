import React, {useEffect,useState} from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';
export default function MyCourses() {

    const [courses, setCourses] = useState([]);

    useEffect(() =>{
        const url='/users/coursAccesible';
        
        const res = async () => {
            try {
            const result = await axios({
            headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`},
            method: 'get',
            url,
            });

            if (result.status === 200) {
                setCourses(result.data.coursAccesible);
            }

            }catch (err) {
                console.log(err);
            };   
        };

        res();

         
    },[]);

    const style1 = {
        backgroundImage: "url(images/icons/icon-1.png)"
    }
    const style2 = {
        backgroundImage: "url(images/icons/icon-2.png)"
    }
    return (
        <React.Fragment>
        <div>
            <section className="page-title">
                <div className="auto-container">
                    <h1>My Courses</h1>
                    
                    
                    <div className="search-boxed">
                        <div className="search-box">
                            <form method="post" action="contact.html">
                                <div className="form-group">
                                    <input type="search" name="search-field"  placeholder="What do you want to learn?" required=""/>
                                    <button type="submit"><span className="icon fa fa-search"></span></button>
                                </div>
                            </form>
                        </div>
                    </div>
                    
                </div>
            </section>
            <section className="student-profile-section">
                <div className="patern-layer-one paroller" data-paroller-factor="0.40" data-paroller-factor-lg="0.20" data-paroller-type="foreground" data-paroller-direction="vertical" style={style1}></div>
                <div className="patern-layer-two paroller" data-paroller-factor="0.40" data-paroller-factor-lg="-0.20" data-paroller-type="foreground" data-paroller-direction="vertical" style={style2}></div>
                <div className="circle-one"></div>
                <div className="circle-two"></div>
                <div className="auto-container">
                    
                    <div className="row clearfix">
                        
                        
                        <div className="image-column col-lg-3 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <div className="image">
                                    <img src="images/resource/student-2.jpg" alt=""/>
                                </div>
                                <h4>Marvin Zona</h4>
                                
                                <div className="social-box">
                                    <Link to="#" className="fa fa-facebook-square"></Link>
                                    <Link to="#" className="fa fa-twitter-square"></Link>
                                    <Link to="#" className="fa fa-linkedin-square"></Link>
                                    <Link to="#" className="fa fa-github"></Link>
                                </div>
                                <ul className="student-editing">
                                    
                                    <li><Link to="edit-profile.html">Membership Upgrade</Link></li>
                                </ul>
                            </div>
                        </div>
                        
                        
                        <div className="content-column col-lg-9 col-md-12 col-sm-12">
                            <div className="inner-column">
                                
                                
                                <div className="profile-info-tabs">
                                    
                                    <div className="profile-tabs tabs-box">
                                    
                                        
                                       
                                        
                                        
                                        <div className="tabs-content">
                                            
                                            
                                            <div className="tab active-tab" id="prod-overview">
                                                <div className="content">
                                                    
                                                    <div className="sec-title">
                                                        <h2>Courses In Progress</h2>
                                                    </div>
                                                    
                                                    <div className="row clearfix">
                                                        
                                                        {
                                                            courses.map((el) => {
                                                                return (<div className="cource-block-two col-lg-4 col-md-6 col-sm-12">
                                                                <div className="inner-box">
                                                                    <div className="image">
                                                                        <Link to="#"><img src="images/course.png" alt=""/></Link>
                                                                    </div>
                                                                    <div className="lower-content">
                                                                        <h5><Link to="#">{el.title}</Link></h5>
                                                                        <div className="text">{el.description}</div>
                                                                        <div className="clearfix">
                                                                            <div className="pull-left">
                                                                                <div className="students">{el.listVideo.length} Lecturer</div>
                                                                            </div>
                                                                            <div className="pull-right">
                                                                                <div className="hours">2 Hours</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>)
                                                            })
                                                        }
                    
                                                        
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                            
                                            
                                          
                                            
                                            
                                            <div className="tab" id="payments">
                                                <div className="content">
                                                    
                                                    <div className="row clearfix">
                                                        
                                                        
                                                       
                                                        
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                            
                                            
                                            <div className="tab" id="billings">
                                                <div className="content">
                                                    
                                                    <div className="row clearfix">
                                                        
                                                        
                                                       
                                                        
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
                </section>      
            </div>
           </React.Fragment>             
       
    )
}
