import React from 'react'
import axios from 'axios';
import './../css/alert.css';
export default function EditProfile() {

    
    const style1 = {
        backgroundImage: "url(images/icons/icon-1.png)"
    }

    const style2 = {
        backgroundImage: "url(images/icons/icon-2.png)"
    }

    function uploadImage() {
        document.getElementById('caption').click();
    }

    function uploadVids() {
        document.getElementById('videos').click();
    }

    const hideAlert = () => {
        const el = document.querySelector('.alert');
        if (el) el.parentElement.removeChild(el);
      };
      
      // type is 'success' or 'error'
      const showAlert = (type, msg) => {
        hideAlert();
        const markup = `<div class="alert alert--${type}" style="font-size:14px">${msg}</div>`;
        document.querySelector('body').insertAdjacentHTML('afterbegin', markup);
        window.setTimeout(hideAlert, 10000);
      };

      const updateData = async (data) => {
        try {
          const url ='/cours/add';
          const res = await axios({
            headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`},
            method: 'post',
            url,
            data,
          });

          console.log(res);
      
          if (res.data.status === 'success') {
            showAlert('success', `Course Created Successfully !`);
            window.setTimeout(() => {
                window.location.replace("/all-courses");
            }, 1500);
          }
        } catch (err) {
          console.log(err);
          showAlert('error', err.response.data ? err.response.data : 'error');
        }
        return;
      };

      const createCourse = async (e) => {
          e.disabled = true;
          e.target.innerHTML = "PROCESSING ...";
                e.preventDefault();
            
                //document.querySelector('.btn--save-settings').text = 'Updating...';
            
                const form = new FormData();
                form.append('title', document.getElementById('course-title').value);
                form.append('price', document.getElementById('course-price').value * 1);
                form.append('description', document.getElementById('course-description').value);
                

                const files = document.getElementById('videos').files;

                for (let i = 0; i < files.length; i++) {
                    form.append(`videos`, files[i]);
                }

                
                console.log(form);
                
                await updateData(form);
                e.disabled = false;
                //document.querySelector('.btn--save-settings').text = 'SAVE SETTINGS';
              
            
      };

    return (
        <React.Fragment>
        <div>
            <section className="page-title style-two" >
                <div className="auto-container">
                    <h1>Edit Profile</h1>
                </div>
            </section>
            <section className="edit-profile-section" >
                <div className="patern-layer-one paroller" data-paroller-factor="0.40" data-paroller-factor-lg="0.20" data-paroller-type="foreground" data-paroller-direction="vertical" style={style1}></div>
                <div className="patern-layer-two paroller" data-paroller-factor="0.40" data-paroller-factor-lg="-0.20" data-paroller-type="foreground" data-paroller-direction="vertical" style={style2}></div>
                <div className="auto-container">
                    
                    <div className="row clearfix">
                        
                        
                        <div className="image-column col-lg-3 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <div className="image">
                                    <img src="images/course.png" alt=""/>
                                </div>
                                <span className="theme-btn btn-style-three" style={{cursor: "pointer"}} onClick={uploadImage}><span className="txt">Upload Caption<i className="fa fa-angle-right"></i></span></span>
						        <input type="file" id="caption" name="caption"  hidden/>
                            </div>
                        </div>
                        
                        
                        <div className="content-column col-lg-9 col-md-12 col-sm-12" >
                            <div className="inner-column" >
                                
                                
                                <div className="edit-profile-info-tabs">
                                   
                                    <div className="edit-profile-tabs tabs-box">
                                    
                                        
                                        <div className="tabs-content">
                                            
                                            
                                            <div className="tab active-tab" id="prod-overview">
                                                <div className="content">
                                                   
                                                    <div className="title-box">
                                                        <h5>Update Your Personal Infos</h5>
                                                    </div>
                                                    
                                                   
                                                    <div className="profile-form">
                                                    
                                                       
                                                        <form id="create-course">
                                                            <div class="row clearfix">
                                                                
                                                                <div class="col-lg-6 col-md-6 col-sm-12 form-group">
                                                                    <input type="text" name="username" placeholder="First Name" required=""/>
                                                                    <span class="icon flaticon-edit-1"></span>
                                                                </div>
                                                                
                                                                <div class="col-lg-6 col-md-6 col-sm-12 form-group">
                                                                    <input type="text" name="username" placeholder="Last Name" required=""/>
                                                                    <span class="icon flaticon-edit-1"></span>
                                                                </div>
                                                                
                                                                <div class="col-lg-6 col-md-6 col-sm-12 form-group">
                                                                    <input type="email" name="email" placeholder="Email" required=""/>
                                                                    <span class="icon flaticon-edit-1"></span>
                                                                </div>
                                                                
                                                                <div class="col-lg-6 col-md-6 col-sm-12 form-group">
                                                                    <input type="text" name="phone" placeholder="Phone" required=""/>
                                                                    <span class="icon flaticon-edit-1"></span>
                                                                </div>

                                                                <div class="col-lg-6 col-md-6 col-sm-12 form-group">
                                                                    <input type="password" name="password" placeholder="Password" required=""/>
                                                                    <span class="icon flaticon-edit-1"></span>
                                                                </div>
                                                                
                                                                <div class="col-lg-6 col-md-6 col-sm-12 form-group">
                                                                    <input type="password" name="passwordConfirm" placeholder="Confirm Password" required=""/>
                                                                    <span class="icon flaticon-edit-1"></span>
                                                                </div>
                                                                
                                                                
                                                                
                                                                <div class="col-lg-12 col-md-12 col-sm-12 form-group">
                                                                    <textarea class="" name="message" placeholder="Your Description"></textarea>
                                                                </div>
                                                                
                                                                <div class="col-lg-12 col-md-12 col-sm-12 form-group text-right">
                                                                    <button class="theme-btn btn-style-two" type="submit" name="submit-form"><span class="txt">Cancel <i class="fa fa-angle-right"></i></span></button>
                                                                    <button class="theme-btn btn-style-three" type="submit" name="submit-form"><span class="txt">Save Change <i class="fa fa-angle-right"></i></span></button>
                                                                </div>
                                                                
                                                            </div>
                                                        </form>
                                                            
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
