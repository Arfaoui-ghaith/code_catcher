import React from 'react'

export default function ContactUs() {

    const layer1 = {
        backgroundImage: "url(images/icons/icon-1.png)"
    }
    const layer2 = {
        backgroundImage: "url(images/icons/icon-2.png)"
    }
    return (
        <div>
        <section class="page-title">
            <div class="auto-container">
                <h1>Contact Us</h1>
                
                
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

	

	    <section class="contact-page-section">
            <div class="patern-layer-one paroller" data-paroller-factor="0.40" data-paroller-factor-lg="0.20" data-paroller-type="foreground" data-paroller-direction="vertical" style={layer1}></div>
            <div class="patern-layer-two paroller" data-paroller-factor="0.40" data-paroller-factor-lg="-0.20" data-paroller-type="foreground" data-paroller-direction="vertical" style={layer2}></div>
            <div class="auto-container">
                <div class="inner-container">
                    
                    <div class="sec-title centered">
                        <h2>Get in touch</h2>
                    </div>
                    
                    
                    <div class="contact-form">
                    
                        
                        <form >
                            <div class="row clearfix">
                                
                                <div class="col-lg-6 col-md-6 col-sm-12 form-group">
                                    <input type="text" name="username" placeholder="First Name*" required=""/>
                                </div>
                                
                                <div class="col-lg-6 col-md-6 col-sm-12 form-group">
                                    <input type="text" name="lastname" placeholder="Last Name*" required=""/>
                                </div>
                                
                                <div class="col-lg-6 col-md-6 col-sm-12 form-group">
                                    <input type="email" name="email" placeholder="Email Address*" required=""/>
                                </div>
                                
                                <div class="col-lg-6 col-md-6 col-sm-12 form-group">
                                    <input type="text" name="phone" placeholder="Phone Number*" required=""/>
                                </div>
                                
                                <div class="col-lg-12 col-md-12 col-sm-12 form-group">
                                    <textarea class="" name="message" placeholder="Send Message"></textarea>
                                </div>
                                
                                <div class="col-lg-12 col-md-12 col-sm-12 form-group text-right">
                                    <button class="theme-btn btn-style-three" type="submit" name="submit-form"><span class="txt">Send Message <i class="fa fa-angle-right"></i></span></button>
                                </div>
                                
                            </div>
                        </form>
                            
                    </div>
                    
                </div>
                
                
                    <div class="contact-info-section">
                        <div class="title-box">
                            <h2>Contact Information</h2>
                            <div class="text">Lorem Ipsum is simply dummy text of the printing <br/> and typesetting industry.</div>
                        </div>
                    
                    <div class="row clearfix">
                        
                        
                        <div class="info-column col-lg-4 col-md-6 col-sm-12">
                            <div class="info-inner">
                                <div class="icon fa fa-phone"></div>
                                <strong>Phone</strong>
                                <ul>
                                    <li>+1 (123) 456-7890</li>
                                    <li>+1 (123) 456-7890</li>
                                </ul>
                            </div>
                        </div>
                        
                        
                        <div class="info-column col-lg-4 col-md-6 col-sm-12">
                            <div class="info-inner">
                                <div class="icon fa fa-envelope-o"></div>
                                <strong>Email</strong>
                                <ul>
                                    <li>info@yourcompany.com</li>
                                    <li>infobootcamp@gmail.com</li>
                                </ul>
                            </div>
                        </div>
                        
                        
                        <div class="info-column col-lg-4 col-md-6 col-sm-12">
                            <div class="info-inner">
                                <div class="icon fa fa-map-marker"></div>
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
        <section class="map-section">
		
            <div class="map-boxed">
                
                <div class="map-outer">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.631217835854!2d10.209222315141487!3d36.851307272521154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd3532056d986d%3A0x36f5072f8a82c006!2sISET%20Charguia!5e0!3m2!1sfr!2stn!4v1604654732500!5m2!1sfr!2stn" allowfullscreen=""></iframe>
                </div>
            </div>
	    </section>
        </div>
    )
}
