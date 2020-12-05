import React, {useEffect} from 'react'
import axios from 'axios';
import Subscribe from './utils/SubscribeStripe';

export default function Pricing() {

    const res_subscribe = async () => {
        const url = `/abonnement/create/${localStorage.getItem('sub_payment_intent_id')}/${localStorage.getItem('nbMonth')}`;
        try {
            const resultPayment = await axios({
            headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`},
            method: 'get',
            url,
            });

            if (resultPayment.status === 200) {
                console.log(resultPayment);
                
            }

            }catch (err) {
                console.log(err);
            }; 
            localStorage.removeItem('sub_payment_intent_id');
            localStorage.removeItem('nbMonth');

            
    }

    useEffect(() =>{
        if(localStorage.getItem('sub_payment_intent_id') !== null && localStorage.getItem('sub_payment_intent_id') !== undefined){
            res_subscribe();
        }
    },[])

    const subclick = (title, description, price,nbMonth) => {
        const data = {
            title,
            description,
            price,
            nbMonth
        }
        Subscribe(data);
    }

    const style={"cursor": "pointer"}

    return (
        <React.Fragment>
            <section className="page-title">
                <div className="auto-container">
                    <h1>Pricing</h1>
                    
                    
                    <div className="search-boxed">
                        <div className="search-box">
                            
                                <div className="form-group">
                                    <input type="search" name="search-field" placeholder="What do you want to learn?" required=""/>
                                    <button type="submit"><span className="icon fa fa-search"></span></button>
                                </div>
                            
                        </div>
                    </div>
                    
                </div>
            </section>
            <section className="pricing-section price-page-section">
                <div className="auto-container">
                    
                    <div className="sec-title style-two centered">
                        <h2>Plans & Pricing</h2>
                        <div className="text">There are many types of subscribers of code catcher available,</div>
                    </div>
                    
                    <div className="pricing-tabs tabs-box">
                        
                        
                        <div className="tabs-content">
                            
                            
                            <div className="tab active-tab" id="prod-monthly">
                                <div className="content">
                                    <div className="row clearfix">
                                        
                                        <div className="price-block style-two col-lg-4 col-md-6 col-sm-12">
                                            <div className="inner-box">
                                                <div className="icon-box">
                                                    <span className="icon"><img src="images/resource/price-icon-4.png" alt=""/></span>
                                                </div>
                                                <h3>1 Month</h3>
                                                <div className="text">You will be member of our course creators for 1 month.</div>
                                                <span  className="theme-btn btn-style-eight" style={style} onClick={(e) => {e.target.innerHTML = "PROCESSING..."; subclick("1 Month", "Be a course creator for 1 month.", 10, 1);}}><span className="txt">Subscribe</span></span>
                                                <div className="price">$10 <span>Per month</span></div>
                                            </div>
                                        </div>
                                        
                                        
                                        <div className="price-block style-two col-lg-4 col-md-6 col-sm-12">
                                            <div className="inner-box">
                                                <div className="icon-box">
                                                    <span className="icon"><img src="images/resource/price-icon-5.png" alt=""/></span>
                                                </div>
                                                <h3>6 Months</h3>
                                                <div className="text">You will be member of our course creators for 6 month.</div>
                                                <span  className="theme-btn btn-style-eight" style={style} onClick={(e) => subclick("6 Months", "Be a course creator for 6 months.", 50, 6)}><span className="txt">Subscribe</span></span>
                                                <div className="price">$50 <span>Per 6 months</span></div>
                                            </div>
                                        </div>
                                        
                                        
                                        <div className="price-block style-two col-lg-4 col-md-6 col-sm-12">
                                            <div className="inner-box">
                                                <div className="icon-box">
                                                    <span className="icon"><img src="images/resource/price-icon-6.png" alt=""/></span>
                                                </div>
                                                <h3>1 Year</h3>
                                                <div className="text">You will be member of our course creators for 1 year.</div>
                                                <span className="theme-btn btn-style-eight" style={style} onClick={(e) => subclick("1 Year", "Be a course creator for 12 months / 1 Year.", 100, 12)}><span className="txt">Subscribe</span></span>
                                                <div className="price">$100 <span>Per Year</span></div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            
                            
                            
                        </div>
                        
                    </div>
                    
                </div>
            </section>
        </React.Fragment>
    )
}
