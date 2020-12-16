import React, {useState} from 'react'
import {Link, BrowserRouter as Router} from 'react-router-dom';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {setLoginStatus} from './../redux/actions/authAction';
import './../css/alert.css';
import cogoToast from 'cogo-toast';

export default function Login() {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');



    const dispatch = useDispatch();
    const dispatchState = (token,user) => dispatch(setLoginStatus(token, user));
    

      
      // type is 'success' or 'error'
      const showAlert = (type, msg) => {

        // eslint-disable-next-line default-case
        switch(type){
            case "success":
                cogoToast.loading('Logging...').then(() => {
                    cogoToast.success(msg);
                  });
            break;

            default:

                  const { hide } = cogoToast.error(msg, {
                    onClick: () => {
                      hide();
                    },
                  });

            break;


        }
        

      };

      const loginReq = async (data) => {
          console.log(data);
        try {
          const url ='/auth/login';
          const res = await axios({
            method: 'post',
            url,
            data,
          });

          console.log(res);
      
          if (res.status === 200) {
            
            dispatchState(res.data.token,JSON.stringify(res.data.user));
            showAlert("success", "Login Successfully !");
            window.setTimeout(() => {
              window.location.replace("/");
            }, 1500);
          }
        } catch (err) {
          console.log(err);
          showAlert("error", err.response.data.message ? err.response.data.message : 'error');
        }
      };

      function loginUser(){
        const courseDataForm = document.getElementById('login');
        if(courseDataForm){
            courseDataForm.addEventListener('submit', async (e) => {
                e.preventDefault();
            
                document.getElementById('btn-login').text = 'Laoding...';
            
                const form = {
                    email,
                    password
                }

                await loginReq(form);
                document.getElementById('btn-login').text = 'Login';
              });
            }
      };

    return (
        <React.Fragment>
        <Router>
        <section className="page-title">
            <div className="auto-container">
                <h1>Login</h1>
                
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
        <section className="login-section">
            <div className="auto-container">
                <div className="login-box">
                    
                   
                    <div className="title-box">
                        <h2>Login</h2>
                        <div className="text"><span className="theme_color">Welcome!</span> Please confirm that you are visiting</div>
                    </div>
                    
                   
                    <div className="styled-form">
                        <form id="login">
                            <div className="form-group">
                                <label>User Name</label>
                                <input className="form-control" type="text" name="email" id="email" placeholder="Email" required="" value={email} onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <span className="eye-icon flaticon-eye"></span>
                                <input className="form-control" type="password" name="password" id="password" placeholder="Password" required="" value={password} onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <div className="clearfix">
                                    <div className="pull-left">
                                        <div className="check-box">
                                            <input type="checkbox" name="remember-password" id="type-1"/> 
                                            <label htmlFor="type-1">Remember Password</label>
                                        </div>
                                    </div>
                                    <div className="pull-right">
                                        <Link to="#" className="forgot">Forget Password?</Link> 
                                    </div>
                                </div>
                            </div>
                            <div className="form-group text-center">
                                <button type="submit" id="btn-login" className="theme-btn btn-style-three" onClick={loginUser}><span className="txt">Login <i className="fa fa-angle-right"></i></span></button>
                            </div>
                            <div className="form-group">
                                <div className="users">New User? <Link to="/register">Sign Up</Link></div>
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
