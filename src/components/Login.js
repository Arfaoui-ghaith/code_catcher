import React from 'react'
import {Link, BrowserRouter as Router} from 'react-router-dom';

export default function Login() {
    return (
        <React.Fragment>
        <Router>
        <section class="page-title">
            <div class="auto-container">
                <h1>Login</h1>
                
                <div class="search-boxed">
                    <div class="search-box">
                        <form>
                            <div class="form-group">
                                <input type="search" name="search-field" placeholder="What do you want to learn?" required=""/>
                                <button type="submit"><span class="icon fa fa-search"></span></button>
                            </div>
                        </form>
                    </div>
                </div>
                
            </div>
        </section>
        <section class="login-section">
            <div class="auto-container">
                <div class="login-box">
                    
                   
                    <div class="title-box">
                        <h2>Login</h2>
                        <div class="text"><span class="theme_color">Welcome!</span> Please confirm that you are visiting</div>
                    </div>
                    
                   
                    <div class="styled-form">
                        <form >
                            <div class="form-group">
                                <label>User Name</label>
                                <input type="text" name="username" placeholder="User Name" required=""/>
                            </div>
                            <div class="form-group">
                                <label>Password</label>
                                <span class="eye-icon flaticon-eye"></span>
                                <input type="password" name="password" placeholder="Password" required=""/>
                            </div>
                            <div class="form-group">
                                <div class="clearfix">
                                    <div class="pull-left">
                                        <div class="check-box">
                                            <input type="checkbox" name="remember-password" id="type-1"/> 
                                            <label for="type-1">Remember Password</label>
                                        </div>
                                    </div>
                                    <div class="pull-right">
                                        <Link to="#" class="forgot">Forget Password?</Link> 
                                    </div>
                                </div>
                            </div>
                            <div class="form-group text-center">
                                <button type="button" class="theme-btn btn-style-three"><span class="txt">Login <i class="fa fa-angle-right"></i></span></button>
                            </div>
                            <div class="form-group">
                                <div class="users">New User? <Link to="/register">Sign Up</Link></div>
                            </div>
                        </form>
                    </div>
                    
                </div>
            </div>
	    </section>
        </Router>
        </React.Fragment>

    )
}
