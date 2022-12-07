
import React, { Component } from 'react'
import axios from 'axios';




import { BrowserRouter,Routes,Route,Link,redirect, Router, Switch } from 'react-router-dom';

export default class  Registration extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            empID:'',
             fullname:'',
             email:'',
             password:'',
             
             conPwd:'',
             gen:'',
             ph:'',
             date:'',
             fields: {},
             errors:{}
        }
        this.handleChanghe=this.handleChange.bind(this);
        this.newemp=this.newemp.bind(this);
    }
handleChange(object)
{
    this.setState(object)
}       
newemp(){
    alert("Registration Successful");
        let url='https://localhost:44367/api/EmpInfo';
            axios.post(url,{


                empID:this.state.empID,
                fullname:this.state.fullname,
                
                email:this.state.email,
                password:this.state.password,
                conPwd:this.state.conPwd,
                gen:this.state.gen,
                ph:this.state.ph,
                date:this.state.date
            }
            ).then(response=>{
              if(response.data.email!=null)
              {
                alert("Register successful");
                  sessionStorage.setItem("email",response.data.email);
                  
                  window.location="/Login";
              }
              else
                  {
      
                      alert("Email ID is Invalid");
                  }
          }).catch(error=>{
              alert(error);
        });










            // ).then
            // (Response=>
            //     {console.log("Employee Registration Successfull")})

            //    sessionStorage.setItem("email",Response.data.email);

            //     window.location="/Login";


                

            }
      validateForm(){
              let fields = this.state.fields;
                    let errors = {};
                    let formIsValid = true;
              
                    if (!fields["fullname"]) {
                      formIsValid = false;
                      errors["fname"] = "*Please enter your Full Name.";
                    }
              
                    if (typeof fields["Fullname"] !== "undefined") {
                      if (!fields["Fullnme"].match(/^[a-zA-Z ]*$/)) {
                        formIsValid = false;
                        errors["Fullname"] = "*Please enter alphabet characters only.";
                      }
                    }
              
                   
              
                   
              
                    if (!fields["EmpID"]) {
                      formIsValid = false;
                      errors["EmpID"] = "*Please enter Employee ID";
                    }
              
                    if (typeof fields["EmpID"] !== "undefined") {
                      if (!fields["EmpID"].match(/^[0-9]{10}$/)) {
                        formIsValid = false;
                        errors["EmpID"] = "*Please enter valid Employee ID.";
                      }
                    }
              
              
              
                    if (!fields["emailid"]) {
                      formIsValid = false;
                      errors["emailid"] = "*Please enter your Email-ID.";
                    }
              
                    if (typeof fields["emailid"] !== "undefined") {
                      //regular expression for email validation
                      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
                      if (!pattern.test(fields["emailid"])) {
                        formIsValid = false;
                        errors["emailid"] = "*Please enter valid email-ID.";
                      }
                    }
              
                    if (!fields["mobileno"]) {
                      formIsValid = false;
                      errors["mobileno"] = "*Please enter your mobile no.";
                    }
              
                    if (typeof fields["mobileno"] !== "undefined") {
                      if (!fields["mobileno"].match(/^[0-9]{10}$/)) {
                        formIsValid = false;
                        errors["mobileno"] = "*Please enter valid mobile no.";
                      }
                    }
              
                    if (!fields["password"]) {
                      formIsValid = false;
                      errors["password"] = "*Please enter your password.";
                    }
              
                    if (typeof fields["password"] !== "undefined") {
                      if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
                        formIsValid = false;
                        errors["password"] = "*Please enter secure and strong password.";
                      }
                    }
              
                    if (!fields["Confirmpassword"]) {
                      formIsValid = false;
                      errors["Confirmpassword"] = "*Please enter your password.";
                    }
              
                    if (typeof fields["Confirmpassword"] !== "undefined") {
                      if (!fields["Confirmpassword"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
                        formIsValid = false;
                        errors["Confirmpassword"] = "*Please enter secure and strong password.";
                      }

            }

                    
                    
       
        


     
    

        
        
    }
   
   
  render() {
    const{Registration}=this.state
    return (
       
    
   
    
       
       


       
    
        
        
                 <div class="container">
                  <div ><br></br>
                        <h2 style={{backgroundColor:"orange",margin:"1px",textAlign:"center",padding:"1px",marginBottom:"20px",width:"100%"}}class="pt-3 font-weight-bold">
                          Employee Registration</h2>
                    </div>
                  <div class="panel-body p-3">  

                  <div > 
                   <table  class="panel border bg-green" border={10} width="45%" align='center'>
                
            

           
            <tr>
            

              
              
               <th >Employee Id</th>
               <th>
                

               
                <input class="far fa-user p-2" placeholder='Employee-ID' required type="text" name="empid"
                 onChange={(e)=>this.handleChange({empID:e.target.value})}></input><br></br>
                </th>
               </tr>
               <tr>
               
                </tr>
                <tr>


                <th> Full Name</th>
                <th>
               <input class="far fa-user p-2"   placeholder='Full Name' required type="text" name="fullname"
                onChange={(e)=>this.handleChange({fullname:e.target.value})}></input>
                <div className="errorMsg">{this.state.errors.fullname}</div>
               </th>
                </tr>

                <tr>
                
                </tr>
                <tr>

                
                
                </tr>
                
                <tr>
                <th>Email Id </th>
                <th>
               <input class="far fa-user p-2"  placeholder='Email-ID' required type="text" name="email"
                onChange={(e)=>this.handleChange({email:e.target.value})}></input>
               </th>
                </tr>
                <tr>
                
                </tr>
                <tr>
                <th>Password </th>
                <th>
               <input class="far fa-user p-2"  placeholder='Password' required type="password" name="password"
                onChange={(e)=>this.handleChange({password:e.target.value})}></input>
               </th>
                </tr>
                <tr>
                
                </tr>
                <tr>
                <th>Confirm Password </th>
                <th>
               <input class="far fa-user p-2"  placeholder='Confirm Password' required type="password" name="conPwd"
                onChange={(e)=>this.handleChange({conPwd:e.target.value})}></input>
               </th>
                </tr>
                <tr>
                
                </tr>
                <tr>

                <th>Gender </th>
                <th>
               <input   class="far fa-user p-2" placeholder='Gender' required type="text" name="gen"
                onChange={(e)=>this.handleChange({gen:e.target.value})}></input>
               </th>
                <th> </th>
                <th>
                  
                  
               
                  
                
                


                
                
              
               </th>
                
                </tr>
                <tr>
                
                </tr>
                <tr>
                <th>Phone Number  </th>
                <th>
               <input  class="far fa-user p-2"  placeholder='Phone Number' required type="text" name="ph"
               
                onChange={(e)=>this.handleChange({ph:e.target.value})}></input>
               </th>
                </tr>
                <tr>
                
                </tr>
                <tr>
                <th>Date of Joining   </th>
                <th>
               <input  placeholder='Date of Joining' required type="Date" name="date"
                onChange={(e)=>this.handleChange({date:e.target.value})}></input>
               </th>
                </tr>
                <tr>
               
                </tr>
            
                

            
            <tr>
                

               
                
    
            
               
               
               
               
               
              
               


               
            </tr>
            <tr align='center'>
            <td align='center'>
               
               
               
               
               
            </td>
            
            </tr>








        





            
                    

            
            
        </table>
        </div>    
        </div>
        <div>
        <button align="Center" onClick={this.newemp}>Register</button>
         
        </div>
             
               

               
               
               




       
        
        
      </div>

        
    
    
      
    )

        
    }
}






// import React from 'react';
// import {
//   MDBBtn,
//   MDBContainer,
//   MDBRow,
//   MDBCol,
//   MDBCard,
//   MDBCardBody,
//   MDBInput,
//   MDBSelect,
//   MDBRadio
// }
// from 'mdb-react-ui-kit';

// function App() {
//   return (
//     <MDBContainer fluid>

//       <MDBRow className='justify-content-center align-items-center m-5'>

//         <MDBCard>
//           <MDBCardBody className='px-4'>

//             <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">Registration </h3>

//             <MDBRow>

//               <MDBCol md='6'>
//                 <MDBInput wrapperClass='mb-4' label='First Name' size='lg' id='form1' type='text'/>
//               </MDBCol>

//               <MDBCol md='6'>
//                 <MDBInput wrapperClass='mb-4' label='Last Name' size='lg' id='form2' type='text'/>
//               </MDBCol>

//             </MDBRow>

//             <MDBRow>

//               <MDBCol md='6'>
//                 <MDBInput wrapperClass='mb-4' label='Email' size='lg' id='form3' type='text'/>
//               </MDBCol>

//               <MDBCol md='6' className='mb-4'>
//                 <h6 className="fw-bold">Gender: </h6>
//                 <MDBRadio name='inlineRadio' id='inlineRadio1' value='option1' label='Female' inline />
//                 <MDBRadio name='inlineRadio' id='inlineRadio2' value='option2' label='Male' inline />
//                 <MDBRadio name='inlineRadio' id='inlineRadio3' value='option3' label='Other' inline />
//               </MDBCol>

//             </MDBRow>

//             <MDBRow>

//               <MDBCol md='6'>
//                 <MDBInput wrapperClass='mb-4' label='Email' size='lg' id='form4' type='email'/>
//               </MDBCol>

//               <MDBCol md='6'>
//                 <MDBInput wrapperClass='mb-4' label='Phone Number' size='lg' id='form5' type='rel'/>
//               </MDBCol>

//             </MDBRow>

//             <MDBSelect
//               label='Choose option'
//               className='mb-4'
//               size='lg'
//               data={[
//                 { text: 'Choose option', value: 1, disabled: true },
//                 { text: 'Subject 1', value: 2 },
//                 { text: 'Subject 2', value: 3 },
//                 { text: 'Subject 3', value: 4 }
//               ]}
//               />
//             <MDBBtn className='mb-4' size='lg'>Submit</MDBBtn>

//           </MDBCardBody>
//         </MDBCard>

//       </MDBRow>
//     </MDBContainer>
//   );
// }

// export default App;






        
















      


  
   
        
    



   
   
  
    
       
    
   
    
