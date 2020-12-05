import React from 'react'
import {Link} from 'react-router-dom';
export default function NotFound404() {
    return (
        <React.Fragment>
        <section className="page-title style-two">
            <div className="auto-container">
                <h1>Something went wrong!</h1>
            </div>
        </section>
        <section className="error-section">
            <div className="auto-container">
                <div className="content">
                    <div className="image">
                        <img src="images/resource/error.png" alt=""/>
                    </div>
                    <Link to="home" className="theme-btn btn-style-two"><span className="txt">Back to the homepage <i className="fa fa-angle-right"></i></span></Link>
                </div>
            </div>
        </section>
        </React.Fragment>
    )
}

