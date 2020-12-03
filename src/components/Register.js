import React from 'react'
import {Link} from 'react-router-dom';

export default function Register() {
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
                        <form>
                            
                            <div className="row clearfix">
                                
                                
                                <div className="form-group col-lg-6 col-md-12 col-sm-12">
                                    <label>First Name</label>
                                    <input type="text" name="username"  placeholder="First Name" required=""/>
                                </div>
                                
                                
                                <div className="form-group col-lg-6 col-md-12 col-sm-12">
                                    <label>Last Name</label>
                                    <input type="text" name="username"  placeholder="Last Name" required=""/>
                                </div>
                                
                                
                                <div className="form-group col-lg-6 col-md-12 col-sm-12">
                                    <label>Email Address</label>
                                    <input type="email" name="email"  placeholder="abcd@gmail.com" required=""/>
                                </div>
                                
                                
                                <div className="form-group col-lg-6 col-md-12 col-sm-12">
                                    <label>Phone Number</label>
                                    <input type="text" name="phone"  placeholder="+1 (800) 123-4567" required=""/>
                                </div>
                                
                                
                                <div className="form-group col-lg-6 col-md-12 col-sm-12">
                                    <label>Password</label>
                                    <span className="eye-icon flaticon-eye"></span>
                                    <input type="password" name="password"  placeholder="Password" required=""/>
                                </div>
                                
                                
                                <div className="form-group col-lg-6 col-md-12 col-sm-12">
                                    <label>Confirm Password</label>
                                    <span className="eye-icon flaticon-eye"></span>
                                    <input type="password" name="password"  placeholder="Password" required=""/>
                                </div>
                                
                                <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                    <div className="row clearfix">
                                        
                                        <div className="column col-lg-3 col-md-4 col-sm-12">
                                            <div className="radio-box">
                                                <input type="radio" name="remember-password" id="type-1"/> 
                                                <label for="type-1">Male</label>
                                            </div>
                                        </div>
                                        
                                        <div className="column col-lg-3 col-md-4 col-sm-12">
                                            <div className="radio-box">
                                                <input type="radio" name="remember-password" id="type-2"/> 
                                                <label for="type-2">Female</label>
                                            </div>
                                        </div>
                                        
                                        <div className="column col-lg-3 col-md-4 col-sm-12">
                                            <div className="radio-box">
                                                <input type="radio" name="remember-password" id="type-3"/> 
                                                <label for="type-3">Others</label>
                                            </div>
                                        </div>
                                        
                                        <div className="column col-lg-12 col-md-12 col-sm-12">
                                            <div className="check-box">
                                                <input type="checkbox" name="remember-password" id="type-4"/> 
                                                <label for="type-4">I agree the user agreement and <Link to="privacy.html">Terms & Conditions</Link></label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="form-group col-lg-12 col-md-12 col-sm-12 text-center">
                                    <button type="button" className="theme-btn btn-style-three"><span className="txt">Sign Up <i className="fa fa-angle-right"></i></span></button>
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
