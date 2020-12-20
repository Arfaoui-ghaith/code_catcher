import React, {useState} from 'react'
import axios from 'axios';


const Report = () => {


    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');


    const reportReq = async (data) => {
        console.log("data: ",data);
      try {
        const url ='/report/add';
        const res = await axios({
        headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`},
          method: 'post',
          url,
          data,
        });

        console.log(res);
    
        if (res.status === 200) {
          showAlert('success', `Your Report has been sent Successfully !`);
          
        }
      } catch (err) {
        console.log(err);
        showAlert('error', err.response.data.message ? err.response.data.message : 'error');
      }
    };


      function sendReport(){
        const courseDataForm = document.getElementById('report');
        if(courseDataForm){
 
            courseDataForm.addEventListener('submit', async (e) => {
                e.preventDefault();
            
                document.getElementById('btn-login').text = 'Laoding...';
            
                const form = {
                    title,
                    description
                }

                   await reportReq(form);

                document.getElementById('btn-login').text = 'Submit';
              });
            }
      };


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


    const layer1 = {
        backgroundImage: "url(images/icons/icon-1.png)"
    }
    const layer2 = {
        backgroundImage: "url(images/icons/icon-2.png)"
    }
   
    return (
        <React.Fragment>
        <div>
        <section className="page-title">
            <div className="auto-container">
                <h1>Report your Problem here</h1>
                
                
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

	

	    <section className="contact-page-section">
            <div className="patern-layer-one paroller" data-paroller-factor="0.40" data-paroller-factor-lg="0.20" data-paroller-type="foreground" data-paroller-direction="vertical" style={layer1}></div>
            <div className="patern-layer-two paroller" data-paroller-factor="0.40" data-paroller-factor-lg="-0.20" data-paroller-type="foreground" data-paroller-direction="vertical" style={layer2}></div>
            <div className="auto-container">
                <div className="inner-container">
                    
                    <div className="sec-title centered">
                        <h2>Report</h2>
                    </div>
                    
                    
                    <div className="contact-form">
                    
                        
                        <form id="report">
                            <div className="row clearfix justify-content-center">
                                
                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                    <input type="text" name="title" placeholder="title" required value={title} onChange={(e) => setTitle(e.target.value)}/>
                                </div>

                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                    <textarea className="text-left" type="text" name="description" placeholder="what's wrong" required value={description} onChange={(e) => setDescription(e.target.value)}/>

                                    
                                </div>
                                
                                <div className="col-lg-12 col-md-12 col-sm-12 form-group text-center">
                                <button type="submit" id="btn-login" className="theme-btn btn-style-three" onClick={sendReport}><span className="txt">Submit <i className="fa fa-angle-right"></i></span></button>
                                
                                </div>
                                
                            </div>
                        </form>
                            
                    </div>
                    
                </div>
                
                
                    <div className="contact-info-section">
                        <div className="title-box">
                            <h2>Contact Information</h2>
                            <div className="text">Lorem Ipsum is simply dummy text of the printing <br/> and typesetting industry.</div>
                        </div>
                    
                    <div className="row clearfix">
                        
                        
                        <div className="info-column col-lg-4 col-md-6 col-sm-12">
                            <div className="info-inner">
                                <div className="icon fa fa-phone"></div>
                                <strong>Phone</strong>
                                <ul>
                                    <li>+1 (123) 456-7890</li>
                                    <li>+1 (123) 456-7890</li>
                                </ul>
                            </div>
                        </div>
                        
                        
                        <div className="info-column col-lg-4 col-md-6 col-sm-12">
                            <div className="info-inner">
                                <div className="icon fa fa-envelope-o"></div>
                                <strong>Email</strong>
                                <ul>
                                    <li>info@yourcompany.com</li>
                                    <li>infobootcamp@gmail.com</li>
                                </ul>
                            </div>
                        </div>
                        
                        
                        <div className="info-column col-lg-4 col-md-6 col-sm-12">
                            <div className="info-inner">
                                <div className="icon fa fa-map-marker"></div>
                                <strong>Address</strong>
                                <ul>
                                    <li>Portfolio Technology 07, Capetown 12 Road, Chicago, 2436, USA</li>
                                </ul>
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

export default Report
