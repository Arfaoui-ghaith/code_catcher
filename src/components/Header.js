import React, {useEffect} from 'react';

import { WOW }  from 'wowjs';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {Logout} from './../redux/actions/authAction';

export default function Header() {

    const token = useSelector(state=>state.token);
    const user = useSelector(state=>state.user);
    
    
    const dispatch = useDispatch();
    const deconnexion = () => {
        dispatch(Logout());
        window.location.replace('/login');
    }


    const refreshPage = (e) => {
        window.location.replace(e.target.href);
      }

    useEffect(() => {
        
        
        (function($) {
            
            
            //Hide Loading Box (Preloader)
            function handlePreloader() {
                if($('.preloader').length){
                    $('.preloader').delay(200).fadeOut(500);
                }
            }
            
            
            //Submenu Dropdown Toggle
            if($('.main-header li.dropdown ul').length){
                $('.main-header li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
                
                //Dropdown Button
                $('.main-header li.dropdown .dropdown-btn').on('click', function() {
                    $(this).prev('ul').slideToggle(500);
                });
                
                //Disable dropdown parent link
                $('.main-header .navigation li.dropdown > a,.hidden-bar .side-menu li.dropdown > a').on('click', function(e) {
                    e.preventDefault();
                });
                
            }
            
            
            //Update Header Style and Scroll to Top
            function headerStyle() {
                if($('.main-header').length){
                    var windowpos = $(window).scrollTop();
                    var siteHeader = $('.main-header');
                    var scrollLink = $('.scroll-to-top');
                    var sticky_header = $('.main-header .sticky-header');
                    if (windowpos > 100) {
                        siteHeader.addClass('fixed-header');
                        sticky_header.addClass("animated slideInDown");
                        scrollLink.fadeIn(300);
                    } else {
                        siteHeader.removeClass('fixed-header');
                        sticky_header.removeClass("animated slideInDown");
                        scrollLink.fadeOut(300);
                    }
                }
            }
            
            headerStyle();
            
            
            //Hidden Sidebar
            if ($('.hidden-bar').length) {
                var hiddenBar = $('.hidden-bar');
                var hiddenBarOpener = $('.nav-toggler');
                var hiddenBarCloser = $('.hidden-bar-closer');
                $('.hidden-bar-wrapper').mCustomScrollbar();
                
                //Show Sidebar
                hiddenBarOpener.on('click', function () {
                    hiddenBar.addClass('visible-sidebar');
                });
                
                //Hide Sidebar
                hiddenBarCloser.on('click', function () {
                    hiddenBar.removeClass('visible-sidebar');
                });
            }
            
            
            //Hidden Bar Menu Config
            function hiddenBarMenuConfig() {
                var menuWrap = $('.hidden-bar .side-menu');
                // appending expander button
                menuWrap.find('.dropdown').children('a').append(function () {
                    return '<button type="button" class="btn expander"><i class="icon fa fa-angle-right"></i></button>';
                });
                // hidding submenu
                menuWrap.find('.dropdown').children('ul').hide();
                // toggling child ul
                menuWrap.find('.btn.expander').each(function () {
                    $(this).on('click', function () {
                        $(this).parent() // return parent of .btn.expander (a)
                            .parent() // return parent of a (li)
                                .children('ul').slideToggle();

                        // adding class to expander container
                        $(this).parent().toggleClass('current');
                        // toggling arrow of expander
                        $(this).find('i').toggleClass('fa-angle-right fa-angle-down');

                        return false;

                    });
                });
            }

            hiddenBarMenuConfig();
            
            
            //Mobile Nav Hide Show
            if($('.mobile-menu').length){
                
                $('.mobile-menu .menu-box').mCustomScrollbar();
                
                var mobileMenuContent = $('.main-header .nav-outer .main-menu').html();
                $('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);
                $('.sticky-header .main-menu').append(mobileMenuContent);
                
                //Dropdown Button
                $('.mobile-menu li.dropdown .dropdown-btn').on('click', function() {
                    $(this).toggleClass('open');
                    $(this).prev('ul').slideToggle(500);
                });
                //Menu Toggle Btn
                $('.mobile-nav-toggler').on('click', function() {
                    $('body').addClass('mobile-menu-visible');
                });

                //Menu Toggle Btn
                $('.mobile-menu .menu-backdrop,.mobile-menu .close-btn').on('click', function() {
                    $('body').removeClass('mobile-menu-visible');
                });
                
            }
            
            
            /*//Parallax Scene for Icons
            if($('.parallax-scene-1').length){
                var scene = $('.parallax-scene-1').get(0);
                var parallaxInstance = new Parallax(scene);
            }
            if($('.parallax-scene-2').length){
                var scene = $('.parallax-scene-2').get(0);
                var parallaxInstance = new Parallax(scene);
            }
            if($('.parallax-scene-3').length){
                var scene = $('.parallax-scene-3').get(0);
                var parallaxInstance = new Parallax(scene);
            }*/
            
            
            
            //Fact Counter + Text Count
            if($('.count-box').length){
                $('.count-box').appear(function(){
            
                    var $t = $(this),
                        n = $t.find(".count-text").attr("data-stop"),
                        r = parseInt($t.find(".count-text").attr("data-speed"), 10);
                        
                    if (!$t.hasClass("counted")) {
                        $t.addClass("counted");
                        $({
                            countNum: $t.find(".count-text").text()
                        }).animate({
                            countNum: n
                        }, {
                            duration: r,
                            easing: "linear",
                            step: function() {
                                $t.find(".count-text").text(Math.floor(this.countNum));
                            },
                            complete: function() {
                                $t.find(".count-text").text(this.countNum);
                            }
                        });
                    }
                    
                },{accY: 0});
            }
            
            
            
            //Tabs Box
            if($('.tabs-box').length){
                $('.tabs-box .tab-buttons .tab-btn').on('click', function(e) {
                    e.preventDefault();
                    var target = $($(this).attr('data-tab'));
                    
                    if ($(target).is(':visible')){
                        return false;
                    }else{
                        target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
                        $(this).addClass('active-btn');
                        target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
                        target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab');
                        $(target).fadeIn(300);
                        $(target).addClass('active-tab');
                    }
                });
            }
            
            
            //Header Search
            if($('.search-box-outer').length) {
                $('.search-box-outer').on('click', function() {
                    $('body').addClass('search-active');
                });
                $('.close-search').on('click', function() {
                    $('body').removeClass('search-active');
                });
            }
            
            
            if($('.paroller').length){
                $('.paroller').paroller({
                    factor: 0.2,            // multiplier for scrolling speed and offset, +- values for direction control  
                    factorLg: 0.4,          // multiplier for scrolling speed and offset if window width is less than 1200px, +- values for direction control  
                    type: 'foreground',     // background, foreground  
                    direction: 'horizontal' // vertical, horizontal  
                });
            }
            
            
            
            // Testimonial Carousel
            if ($('.testimonial-carousel').length) {
                $('.testimonial-carousel').owlCarousel({
                    loop:true,
                    margin:0,
                    nav:true,
                    smartSpeed: 700,
                    autoplay: 5000,
                    navText: [ '<span class="flaticon-back-2"></span>', '<span class="flaticon-arrow"></span>' ],
                    responsive:{
                        0:{
                            items:1
                        },
                        600:{
                            items:1
                        },
                        800:{
                            items:2
                        },
                        1024:{
                            items:2
                        },
                        1200:{
                            items:2
                        },
                        1400:{
                            items:2
                        },
                        1600:{
                            items:2
                        }
                    }
                });    		
            }
            
            
            
            //Product Carousel
            if ($('.project-carousel').length) {
                $('.project-carousel').owlCarousel({
                    loop:true,
                    margin:0,
                    nav:true,
                    smartSpeed: 700,
                    autoplay: 5000,
                    navText: [ '<span class="flaticon-back-2"></span>', '<span class="flaticon-arrow"></span>' ],
                    responsive:{
                        0:{
                            items:1
                        },
                        600:{
                            items:2
                        },
                        800:{
                            items:2
                        },
                        1024:{
                            items:3
                        },
                        1200:{
                            items:3
                        },
                        1400:{
                            items:3
                        },
                        1600:{
                            items:3
                        }
                    }
                });    		
            }
            
            
            //Product Tabs
            if($('.project-tab').length){
                $('.project-tab .product-tab-btns .p-tab-btn').on('click', function(e) {
                    e.preventDefault();
                    var target = $($(this).attr('data-tab'));
                    
                    if ($(target).hasClass('actve-tab')){
                        return false;
                    }else{
                        $('.project-tab .product-tab-btns .p-tab-btn').removeClass('active-btn');
                        $(this).addClass('active-btn');
                        $('.project-tab .p-tabs-content .p-tab').removeClass('active-tab');
                        $(target).addClass('active-tab');
                    }
                });
            }
            
            
            
            //Accordion Box
            if($('.accordion-box').length){
                $(".accordion-box").on('click', '.acc-btn', function() {
                    
                    var outerBox = $(this).parents('.accordion-box');
                    var target = $(this).parents('.accordion');
                    
                    if($(this).hasClass('active')!==true){
                        $(outerBox).find('.accordion .acc-btn').removeClass('active');
                    }
                    
                    if ($(this).next('.acc-content').is(':visible')){
                        return false;
                    }else{
                        $(this).addClass('active');
                        $(outerBox).children('.accordion').removeClass('active-block');
                        $(outerBox).find('.accordion').children('.acc-content').slideUp(300);
                        target.addClass('active-block');
                        $(this).next('.acc-content').slideDown(300);	
                    }
                });	
            }
            
            
            
            // Main Slider Carousel
            if ($('.main-slider-carousel').length) {
                $('.main-slider-carousel').owlCarousel({
                    //animateOut: 'fadeOut',
                    //animateIn: 'fadeIn',
                    loop:true,
                    margin:0,
                    nav:true,
                    smartSpeed: 500,
                    autoplay: 6000,
                    navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
                    responsive:{
                        0:{
                            items:1
                        },
                        600:{
                            items:1
                        },
                        800:{
                            items:1
                        },
                        1024:{
                            items:1
                        },
                        1200:{
                            items:1
                        },
                        1500:{
                            items:1
                        }
                    }
                });    		
            }
            
            
            
            
            // Sponsors Carousel
            if ($('.sponsors-carousel').length) {
                $('.sponsors-carousel').owlCarousel({
                    //animateOut: 'fadeOut',
                    //animateIn: 'fadeIn',
                    loop:true,
                    margin:30,
                    nav:true,
                    smartSpeed: 500,
                    autoplay: 6000,
                    navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
                    responsive:{
                        0:{
                            items:1
                        },
                        600:{
                            items:2
                        },
                        800:{
                            items:3
                        },
                        1024:{
                            items:4
                        },
                        1200:{
                            items:4
                        },
                        1500:{
                            items:4
                        }
                    }
                });    		
            }
            
            
            // Single Item Carousel
            if ($('.single-item-carousel').length) {
                $('.single-item-carousel').owlCarousel({
                    //animateOut: 'fadeOut',
                    //animateIn: 'fadeIn',
                    loop:true,
                    margin:0,
                    nav:true,
                    smartSpeed: 500,
                    autoplay: 6000,
                    navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
                    responsive:{
                        0:{
                            items:1
                        },
                        600:{
                            items:1
                        },
                        800:{
                            items:1
                        },
                        1024:{
                            items:1
                        },
                        1200:{
                            items:1
                        },
                        1500:{
                            items:1
                        }
                    }
                });    		
            }
            
            
            
            /*//Event Countdown Timer
            if($('.time-countdown').length){  
                $('.time-countdown').each(function() {
                var $this = $(this), finalDate = $(this).data('countdown');
                $this.countdown(finalDate, function(event) {
                    var $this = $(this).html(event.strftime('' + '<div class="counter-column"><span class="count">%D</span>Days</div> ' + '<div class="counter-column"><span class="count">%H</span>Hours</div>  ' + '<div class="counter-column"><span class="count">%M</span>Minutes</div>  ' + '<div class="counter-column"><span class="count">%S</span>Seconds</div>'));
                });
            });
            }*/
            
            
            
            //Custom Seclect Box
            if($('.custom-select-box').length){
                $('.custom-select-box').selectmenu().selectmenu('menuWidget').addClass('overflow');
            }
            
            
            
            //Jquery Spinner / Quantity Spinner
            if($('.quantity-spinner').length){
                $("input.quantity-spinner").TouchSpin({
                verticalbuttons: true
                });
            }
            
            
            
            //Gallery Filters
            if($('.filter-list').length){
                $('.filter-list').mixItUp({});
            }
            
            
            //LightBox / Fancybox
            if($('.lightbox-image').length) {
                $('.lightbox-image').fancybox({
                    openEffect  : 'fade',
                    closeEffect : 'fade',
                    helpers : {
                        media : {}
                    }
                });
            }
            
            
            //Contact Form Validation
            if($('#contact-form').length){
                $('#contact-form').validate({
                    rules: {
                        username: {
                            required: true
                        },
                        lastname: {
                            required: true
                        },
                        email: {
                            required: true,
                            email: true
                        },
                        phone: {
                            required: true
                        },
                        message: {
                            required: true
                        }
                    }
                });
            }
            
            
            // Scroll to a Specific Div
            if($('.scroll-to-target').length){
                $(".scroll-to-target").on('click', function() {
                    var target = $(this).attr('data-target');
                // animate
                $('html, body').animate({
                    scrollTop: $(target).offset().top
                    }, 1500);
            
                });
            }
            
            
            // Elements Animation
            if($('.wow').length){
                var wow = new WOW(
                {
                    boxClass:     'wow',      // animated element css class (default is wow)
                    animateClass: 'animated', // animation css class (default is animated)
                    offset:       0,          // distance to the element when triggering the animation (default is 0)
                    mobile:       true,       // trigger animations on mobile devices (default is true)
                    live:         true       // act on asynchronously loaded content (default is true)
                }
                );
                wow.init();
            }


        /* ==========================================================================
        When document is Scrollig, do
        ========================================================================== */
            
            $(window).on('scroll', function() {
                headerStyle();
            });
            
        /* ==========================================================================
        When document is loading, do
        ========================================================================== */
            
            $(window).on('load', function() {
                handlePreloader();
            });	

        })(window.jQuery);
    }, []);

    const style1 = {
    paddingTop: "16px",
    paddingBottom: "16px"
    }

    const dem = {
        width: '240px',
        height: '60px',
    }
    return (
        <React.Fragment>
        <div>
            <header className="main-header header-style-one">
                <div className="header-top">
                    <div className="auto-container">
                        <div className="clearfix">
                            <div className="top-left pull-left clearfix">
                                <ul className="info-list">
                                    <li><span>Call Us:</span> +216 55779887</li>
                                    <li><span>Email Us:</span> info@codecatcher.com</li>
                                </ul>
                            </div>

                            <div className="top-right pull-right clearfix" style={style1}>
                                {
                                    token === undefined ?
                                <ul className="login-nav"><React.Fragment><li><Link to="/login">Log In</Link></li><li><Link to="/register">Register</Link></li></React.Fragment></ul> :
                                <ul className="info-list"><React.Fragment><li><span>Hi! </span>{JSON.parse(user).email}</li><li><Link to="#" onClick={deconnexion}><strong>Log out</strong></Link></li></React.Fragment></ul>
                                }
                            </div>
                        </div>
                    </div>
                </div>

                <div className="header-upper">
                    <div className="auto-container">
                        <div className="clearfix">
                            <div className="pull-left logo-box">
                                <div className="logo">
                                    <Link to="/">
                                        <img src="images/logo.png" alt="" title="codecatcher" style={dem}/>
                                    </Link>
                                </div>
                            </div>

                            <div className="nav-outer clearfix">
                                <div className="mobile-nav-toggler">
                                    <span className="icon flaticon-menu"></span>
                                </div>

                                <nav className="main-menu show navbar-expand-md">
                                    <div className="navbar-header">
                                        <button className="navbar-toggler"
                                        type="button"
                                        data-toggle="collapse"
                                        data-target="#navbarSupportedContent"
                                        aria-controls="navbarSupportedContent"
                                        aria-expanded="false" aria-label="Toggle navigation"
                                        >
                                            <span className="icon-bar"></span>
									        <span className="icon-bar"></span>
									        <span className="icon-bar"></span>
                                        </button>
                                    </div>

                                    <div className="navbar-collapse collapse clearfix" id="navbarSupportedContent">
                                        <ul className="navigation clearfix">
                                            <li><Link to="/" onClick={refreshPage}>Home</Link></li>
                                            
                                            <li className="dropdown"><Link to="#">Courses</Link>
                                            <ul>
                                                <li><Link to="/all-courses" onClick={refreshPage}>All Courses</Link></li>
                                                <li><Link to="/my-courses" onClick={refreshPage}>My Courses</Link></li>
                                                { localStorage.getItem("token") === undefined || localStorage.getItem("token") === null ? '' : (JSON.parse(user).abonner === true ? <li><Link to="/course-studio" onClick={refreshPage}>Course Studio</Link></li> : '')}
                                            </ul>
                                            </li>
                                            <li className="dropdown"><Link to="#">Profile</Link>
                                            <ul>
                                                <li><Link to="/profile" onClick={refreshPage}>Instructor Profile</Link></li>
                                                <li><Link to="/profile" onClick={refreshPage}>Student Profile</Link></li>
                                                <li><Link to="/editProfile" onClick={refreshPage}>Edit Profile</Link></li>
                                            </ul>
                                            </li>


                                            <li className="dropdown"><Link to="#">Payment</Link>
                                            <ul>
                    
                                                { localStorage.getItem("token") === undefined || localStorage.getItem("token") === null ? '' : (JSON.parse(user).abonner !== true ? <li><Link to="/pricing" onClick={refreshPage}>Subscription</Link></li> : '')}
                                                <li><Link to="/historicCour" onClick={refreshPage}>Courses Unlock History</Link></li>
                                                <li><Link to="/historic-subscription" onClick={refreshPage}>Subscription History</Link></li>
                                            </ul>
                                            </li>


                                            <li><Link to="/contact" onClick={refreshPage}>Contact Us</Link></li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mobile-menu">
                    <div className="menu-backdrop"></div>
                    <div className="close-btn"><span className="icon flaticon-multiply"></span></div>
                    
                        <nav className="menu-box">
                            <div className="nav-logo"><Link to="/home"><img src="images/footer-logo.png" alt="" title=""/></Link></div>
                            <div className="menu-outer">
                                
                            </div>
                        </nav>
                </div>
            </header>
        </div>
        </React.Fragment>
    )
}
