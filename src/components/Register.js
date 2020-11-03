import React from 'react'
import {Link} from 'react-router-dom';

export default function Register() {
    return (
        <div>
        <section class="page-title">
        <div class="auto-container">
			<h1>Register</h1>
			
			
			<div class="search-boxed">
				<div class="search-box">
					<form method="post" action="contact.html">
						<div class="form-group">
							<input type="search" name="search-field"  placeholder="What do you want to learn?" required=""/>
							<button type="submit"><span class="icon fa fa-search"></span></button>
						</div>
					</form>
				</div>
			</div>
			
        </div>
        </section>
        <section class="register-section">
            <div class="auto-container">
                <div class="register-box">
                    
                    
                    <div class="title-box">
                        <h2>Register</h2>
                        <div class="text"><span class="theme_color">Welcome!</span> Please confirm that you are visiting</div>
                    </div>
                    
                    
                    <div class="styled-form">
                        <form>
                            
                            <div class="row clearfix">
                                
                                
                                <div class="form-group col-lg-6 col-md-12 col-sm-12">
                                    <label>First Name</label>
                                    <input type="text" name="username"  placeholder="First Name" required=""/>
                                </div>
                                
                                
                                <div class="form-group col-lg-6 col-md-12 col-sm-12">
                                    <label>Last Name</label>
                                    <input type="text" name="username"  placeholder="Last Name" required=""/>
                                </div>
                                
                                
                                <div class="form-group col-lg-6 col-md-12 col-sm-12">
                                    <label>Email Address</label>
                                    <input type="email" name="email"  placeholder="abcd@gmail.com" required=""/>
                                </div>
                                
                                
                                <div class="form-group col-lg-6 col-md-12 col-sm-12">
                                    <label>Phone Number</label>
                                    <input type="text" name="phone"  placeholder="+1 (800) 123-4567" required=""/>
                                </div>
                                
                                
                                <div class="form-group col-lg-6 col-md-12 col-sm-12">
                                    <label>Password</label>
                                    <span class="eye-icon flaticon-eye"></span>
                                    <input type="password" name="password"  placeholder="Password" required=""/>
                                </div>
                                
                                
                                <div class="form-group col-lg-6 col-md-12 col-sm-12">
                                    <label>Confirm Password</label>
                                    <span class="eye-icon flaticon-eye"></span>
                                    <input type="password" name="password"  placeholder="Password" required=""/>
                                </div>
                                
                                <div class="form-group col-lg-12 col-md-12 col-sm-12">
                                    <div class="row clearfix">
                                        
                                        <div class="column col-lg-3 col-md-4 col-sm-12">
                                            <div class="radio-box">
                                                <input type="radio" name="remember-password" id="type-1"/> 
                                                <label for="type-1">Male</label>
                                            </div>
                                        </div>
                                        
                                        <div class="column col-lg-3 col-md-4 col-sm-12">
                                            <div class="radio-box">
                                                <input type="radio" name="remember-password" id="type-2"/> 
                                                <label for="type-2">Female</label>
                                            </div>
                                        </div>
                                        
                                        <div class="column col-lg-3 col-md-4 col-sm-12">
                                            <div class="radio-box">
                                                <input type="radio" name="remember-password" id="type-3"/> 
                                                <label for="type-3">Others</label>
                                            </div>
                                        </div>
                                        
                                        <div class="column col-lg-12 col-md-12 col-sm-12">
                                            <div class="check-box">
                                                <input type="checkbox" name="remember-password" id="type-4"/> 
                                                <label for="type-4">I agree the user agreement and <Link to="privacy.html">Terms & Conditions</Link></label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="form-group col-lg-12 col-md-12 col-sm-12 text-center">
                                    <button type="button" class="theme-btn btn-style-three"><span class="txt">Sign Up <i class="fa fa-angle-right"></i></span></button>
                                </div>
                                
                                <div class="form-group col-lg-12 col-md-12 col-sm-12">
                                    <div class="users">Already have an account? <Link to="/login">Sign In</Link></div>
                                </div>
                                
                            </div>
                            
                        </form>
                    </div>
                    
                </div>
            </div>
	    </section>
        </div>
    )
}
