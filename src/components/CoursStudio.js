import React from 'react'
import axios from 'axios';
import './../css/alert.css';
export default function CoursStudio() {


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
        const markup = `<div class="alert alert--${type}">${msg}</div>`;
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
              //location.assign('/Me');
            }, 1500);
          }
        } catch (err) {
          console.log(err);
          showAlert('error', err.response.data ? err.response.data : 'error');
        }
      };

      function createCourse(){
        const courseDataForm = document.getElementById('create-course');
        if(courseDataForm){
            courseDataForm.addEventListener('submit', async (e) => {
                e.preventDefault();
            
                //document.querySelector('.btn--save-settings').text = 'Updating...';
            
                const form = new FormData();
                form.append('title', document.getElementById('course-title').value);
                form.append('price', document.getElementById('course-price').value * 1);
                form.append('description', document.getElementById('course-description').value);
                form.append('owner', '5f9e9d48b0902c33d071f98d');

                const files = document.getElementById('videos').files;

                for (let i = 0; i < files.length; i++) {
                    form.append(`videos`, files[i]);
                }

                
                console.log(form);
                
                await updateData(form);
                //document.querySelector('.btn--save-settings').text = 'SAVE SETTINGS';
              });
            }
      };

   
    return (
        <React.Fragment>
        <div>
            <section className="page-title style-two" >
                <div className="auto-container">
                    <h1>Course Studio</h1>
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
                                                        <h5>Create Your Course</h5>
                                                    </div>
                                                    
                                                   
                                                    <div className="profile-form">
                                                    
                                                       
                                                        <form id="create-course">
                                                            <div className="row clearfix">
                                                                
                                                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                                    <input type="text" id="course-title" name="title" placeholder="Course Title" required=""/>
                                                                    <span className="icon flaticon-edit-1"></span>
                                                                </div>
                                                                
                                                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                                    <input type="text" id="course-price" name="title" placeholder="Course Price" required=""/>
                                                                    <span className="icon flaticon-edit-1"></span>
                                                                </div>
                                                                
                                                                
                                                                
                                                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                                    <span className="theme-btn btn-style-three" style={{cursor: "pointer"}} onClick={uploadVids}><span className="txt">Upload Course Videos<i className="fa fa-angle-right"></i></span></span>
                                                                    <input type="file" id="videos" multiple  name="videos"  hidden/>
                                                                </div>
                                                                
                                                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                                    <textarea className="" id="course-description" name="description" placeholder="Course Description"></textarea>
                                                                </div>
                                                                
                                                                <div className="col-lg-12 col-md-12 col-sm-12 form-group text-right" id="messagePlace">
                                                                    
                                                                    <button className="theme-btn btn-style-two" name="submit-form"><span className="txt">Cancel</span></button>
                                                                    <button className="theme-btn btn-style-three" type="submit" name="submit-form" onClick={createCourse}><span className="txt">Save Course <i className="fa fa-angle-right"></i></span></button>
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
