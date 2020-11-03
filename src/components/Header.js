import React from 'react'
import {Link, BrowserRouter as Router} from 'react-router-dom';

export default function Header() {
    const dem = {
        width: '240px',
        height: '60px',
    }
    return (
        <Router>
        <div>
            <header class="main-header header-style-one">
                <div class="header-top">
                    <div class="auto-container">
                        <div class="clearfix">
                            <div class="top-left pull-left clearfix">
                                <ul class="info-list">
                                    <li><span>Call Us:</span> +1 (800) 123-4567</li>
                                    <li><span>Email Us:</span> info@yourcompany.com</li>
                                </ul>
                            </div>

                            <div class="top-right pull-right clearfix">
                                <ul class="login-nav">
                                    <li><Link to="/login">Log In</Link></li>
                                    <li><Link to="/register">Register</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="header-upper">
                    <div class="auto-container">
                        <div class="clearfix">
                            <div class="pull-left logo-box">
                                <div class="logo">
                                    <Link to="/">
                                        <img src="images/logo.png" alt="" title="codecatcher" style={dem}/>
                                    </Link>
                                </div>
                            </div>

                            <div class="nav-outer clearfix">
                                <div class="mobile-nav-toggler">
                                    <span class="icon flaticon-menu"></span>
                                </div>

                                <nav class="main-menu show navbar-expand-md">
                                    <div class="navbar-header">
                                        <button class="navbar-toggler"
                                        type="button"
                                        data-toggle="collapse"
                                        data-target="#navbarSupportedContent"
                                        aria-controls="navbarSupportedContent"
                                        aria-expanded="false" aria-label="Toggle navigation"
                                        >
                                            <span class="icon-bar"></span>
									        <span class="icon-bar"></span>
									        <span class="icon-bar"></span>
                                        </button>
                                    </div>

                                    <div class="navbar-collapse collapse clearfix" id="navbarSupportedContent">
                                        <ul class="navigation clearfix">
                                            <li class="current"><Link to="/">Home</Link></li>
                                            <li><Link to="/courses">Courses</Link></li>
                                            <li class="dropdown"><Link to="#">Profile</Link>
                                            <ul>
                                                <li><Link to="/profile">Instructor Profile</Link></li>
                                                <li><Link to="/profile">Student Profile</Link></li>
                                                <li><Link to="/profile">Edit Profile</Link></li>
                                            </ul>
                                            </li>
                                            <li><Link to="/contact">Contact Us</Link></li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
        </Router>
    )
}
