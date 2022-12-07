
// import man from './Images/man.png';
 import sher from './Images/capture.PNG';
import React, { Component } from 'react';

import axios from 'axios';

import LmsPic from './Images/google.png';

import pic1 from './Images/fb.png';

import pic2 from './Images/twitter.png';

import Registration from './Component/Registration';

import { BrowserRouter, Routes, Route,Link} from 'react-router-dom';

import message from './Component/Message';

import DashBoard from './Component/DashBoard';

export default class AdminLogin extends Component {
    
    constructor(props) {
      super(props)
    
      this.state = {
         email:'',
         password:'',
         setMessages:'',
         message:''
      }
      this.submit=this.submit.bind(this);
      this.handlechange=this.handlechange.bind(this);
      

    }
    submit()
    {
        let email=this.state.email;
        let password=this.state.password;
        let url="https://localhost:44367/api/EmpInfo/"+email+","+password;
        axios.get(url,{
            email:this.state.email,
            password:this.state.password

        }).then(response=>{
            if(response.data.email!=null)
            {
            alert("Login Successful");

            sessionStorage.setItem("email",response.data.email);

            window.location="/DashBoard";

            }
            else 
            {
                alert("Invalid");
                window.location="/Login";
            }
            

    
             
            if (this.submit!== null) {
                    
                    alert("Hi Rajini");
                    

                  return;
                }
            
                

              

        }).catch(error=>{
            alert(error);
        });


    }
    handlechange(object)
    {
        this.setState(object);

    }
  render() {
    return (


      <div>
        
       
        
        
  <div class="container"><br></br>
  <br></br>
        <div class="row">
            <div class="offset-md-2 col-lg-5 col-md-7 offset-lg-4 offset-md-3">
                <div class="panel border bg-white">
                    <div class="panel-heading">
                        <h3 class="pt-3 font-weight-bold">Login</h3>
                    </div>
                    <div class="panel-body p-3">
                        <form action="login_script.php" method="POST">
                            <div class="form-group py-2">
                                <div class="input-field">
                                    <span class="far fa-user p-2"></span>
                                    <input type="text" name="email" placeholder="Username or Email" onChange={(e)=>this.handlechange({email:e.target.value})}></input>
                                    {/* <input type="text" placeholder="Username or Email" required></input>  */}
                                </div>
                            </div>
                            <div class="form-group py-1 pb-2">
                                <div class="input-field">
                                    <span class="fas fa-lock px-2"></span>
                                    <input type="password" name="password" placeholder="Enter your Password" onChange={(e)=>this.handlechange({password:e.target.value})}></input>
                                    {/* <input type="password" placeholder="Enter your Password" required></input> */}
                                    <button class="btn bg-white text-muted">
                                        <span class="far fa-eye-slash"></span>
                                    </button>
                                </div>
                            </div>
                            <div class="form-inline">
                                <input type="checkbox" name="remember" id="remember"></input>
                                <label for="remember" class="text-muted">Remember me</label><br></br>
                                
                            </div>
                            <button onClick={this.submit}>Login</button> <br></br>
                            
                             {/* <div class="btn btn-primary btn-block mt-3">Login</div>  */}<br>
                             </br>
                             {/* <div><a href="Forgotpassword" id="forgot" class="font-weight-bold">Forgotpassword</a></div>
                             <li>

                             </li> */}
                              <Link  style={{ fontWeight:"bold", marginRight: "50px", width: "100px", height: "30px" }} 
                                   align="Right" to ="/Forgotpassword">ForgotPassword</Link>
                            <div class="text-center pt-4 text-muted">Don't have an account? <a href="Registration">Registration</a>
                                 
                                 
                            </div>
                        </form>
                        
                    </div>
                    <div class="mx-3 my-2 py-2 bordert">
                           <a   href="https://www.google.com"  class="px-1">
                          <img src={LmsPic} height={50} width={50}/>
                          </a>
                          <a href="https://wwww.facebook.com" target="_blank" class="px-1">
                          <img src={pic1} height={50} width={50}/>
                          </a>
                          
                          <a href="https://www.twitter.com" target="_blank" class="px-1">
                          <img src={pic2} height={50} width={50}/>
                          </a>
                        


                         
                          
                       
                    </div>
                    
                </div>
                
            </div>
        </div>
        
    </div>

    
   
          
          
      </div>


    )
  }
}











