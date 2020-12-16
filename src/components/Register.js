import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';

export default function Register() {

    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmePassword,setConfirmePassword] = useState('');
    const [phone,setPhone] = useState('');
    const [gender,setGender] = useState("Male");




    const registerReq = async (data) => {
        console.log(data);
      try {
        const url ='/users/add';
        const res = await axios({
          method: 'post',
          url,
          data,
        });

        console.log(res);
    
        if (res.status === 200) {
          showAlert('success', `Registration Successfully !`);
          window.setTimeout(() => {
            window.location.replace("/login");
          }, 1500);
        }
      } catch (err) {
        console.log(err);
        showAlert('error', err.response.data.message ? err.response.data.message : 'error');
      }
    };


    function registerUser(){
        const courseDataForm = document.getElementById('registration');
        if(courseDataForm){
 
            courseDataForm.addEventListener('submit', async (e) => {
                e.preventDefault();
            
                document.getElementById('btn-login').text = 'Laoding...';
            
                const form = {
                    username:firstName+" "+lastName,
                    email,
                    password,
                    phone,
                    gender

                }
            if(firstName !== '' && lastName !== '' && email !== '' && password !== '' && phone !== '' && gender !== '' ){
                if(password === confirmePassword){
                console.log("im in")
                    await registerReq(form);
            }else{
                showAlert('error',"Password and Confirm Password not matching up!");

            }
            
            }else{
                showAlert('error', "All Fields are required!");

            }
                document.getElementById('btn-login').text = 'Sign Up';
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

      const onChangeValue = (event)=>  {
          console.log(event.target.value);
        setGender(event.target.value);
      }

    return (
        <React.Fragment>
        <div>
        <section className="page-title">
        <div className="auto-container">
			<h1>Register</h1>
			
			
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
        <section className="register-section">
            <div className="auto-container">
                <div className="register-box">
                    
                    
                    <div className="title-box">
                        <h2>Register</h2>
                        <div className="text"><span className="theme_color">Welcome!</span> Please confirm that you are visiting</div>
                    </div>
                    
                    
                    <div className="styled-form">
                        <form id="registration">
                            
                            <div className="row clearfix">
                                
                                
                                <div className="form-group col-lg-6 col-md-12 col-sm-12">
                                    <label>First Name</label>
                                    <input type="text" name="username"  placeholder="First Name" required="" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                                </div>
                                
                                
                                <div className="form-group col-lg-6 col-md-12 col-sm-12">
                                    <label>Last Name</label>
                                    <input type="text" name="username"  placeholder="Last Name" required="" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                                </div>
                                
                                
                                <div className="form-group col-lg-6 col-md-12 col-sm-12">
                                    <label>Email Address</label>
                                    <input type="email" name="email"  placeholder="abcd@gmail.com" required="" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                
                                
                                <div className="form-group col-lg-6 col-md-12 col-sm-12">
                                    <label>Phone Number</label>
                                    <input type="text" name="phone"  placeholder="+1 (800) 123-4567" required="" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                                </div>
                                
                                
                                <div className="form-group col-lg-6 col-md-12 col-sm-12">
                                    <label>Password</label>
                                    <span className="eye-icon flaticon-eye"></span>
                                    <input type="password" name="password"  placeholder="Password" required="" value={password} onChange={(e) => setPassword(e.target.value)}/>
                                </div>
                                
                                
                                <div className="form-group col-lg-6 col-md-12 col-sm-12">
                                    <label>Confirm Password</label>
                                    <span className="eye-icon flaticon-eye"></span>
                                    <input type="password" name="password"  placeholder="Password" required="" value={confirmePassword} onChange={(e) => setConfirmePassword(e.target.value)}/>
                                </div>
                                
                                <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                    <div className="row clearfix">
                                            <div className="column col-lg-3 col-md-4 col-sm-12">
                                                <div className="radio-box">
                                                    <input type="radio" name="gender" value="Male" id="type-1" checked={gender ==="Male"} onChange={onChangeValue}/> 
                                                    <label htmlFor="type-1">Male</label>
                                                </div>
                                            </div>
                                            
                                            <div className="column col-lg-3 col-md-4 col-sm-12">
                                                <div className="radio-box">
                                                    <input type="radio" name="gender"  value="Female" id="type-2" checked={gender ==="Female"} onChange={onChangeValue}/> 
                                                    <label htmlFor="type-2">Female</label>
                                                </div>
                                            </div>
                                            
                                            <div className="column col-lg-3 col-md-4 col-sm-12">
                                                <div className="radio-box">
                                                    <input type="radio" name="gender" value="Other" id="type-3" checked={gender ==="Other"} onChange={onChangeValue}/> 
                                                    <label htmlFor="type-3">Others</label>
                                                </div>
                                            </div>
                                        
                                    </div>


                                    <div className="column col-lg-12 col-md-12 col-sm-12">
                                            <div className="check-box">
                                                <input type="checkbox" name="remember-password" id="type-4"/> 
                                                <label htmlFor="type-4">I agree the user agreement and <Link to="privacy.html">Terms & Conditions</Link></label>
                                            </div>
                                    </div>



                                </div>
                                
                                <div className="form-group col-lg-12 col-md-12 col-sm-12 text-center">
                                <button type="submit" id="btn-login" className="theme-btn btn-style-three" onClick={registerUser}><span className="txt">Sign Up <i className="fa fa-angle-right"></i></span></button>
                                </div>
                                
                                <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                    <div className="users">Already have an account? <Link to="/login">Sign In</Link></div>
                                </div>
                                
                            </div>
                            
                        </form>
                    </div>
                    
                </div>
            </div>
	    </section>
        </div>
        </React.Fragment>
    )
}
