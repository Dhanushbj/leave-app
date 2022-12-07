import React, { Component, useEffect } from 'react'
import axios from 'axios';
import {
    BrowserRouter as Router ,
    Route,
    Link,
    Routes
  } from "react-router-dom";
 import { Button } from 'react-bootstrap';

export default class Applyleave extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            
             lStatus:'',
             lType:'',
             sdate:'',
             edate:'',
             empID:''
        }
        this.handleChange=this.handleChange.bind(this);
        this.newleave=this.newleave.bind(this);
    }
handleChange(object)
{
    this.setState(object)
}      
newleave(){
    alert("Leave Applied");
        let url='https://localhost:44367/api/LeaveInfo';
            axios.post(url,{


                
                lStatus:this.state.lStatus,
                lType:this.state.lType,
                sdate:this.state.sdate,
                edate:this.state.edate,
                empID:this.state.empID
            }
            ).then
            (Response=>{
                console.log("Leave Application"); 
                sessionStorage.setItem("lid",Response.data.lid);
                window.location="/ShowAllLeaveDeatails";
                
            }
                )

            .catch(error=>{alert("error")});
           
         


    
                
    

        
        
    }
    
   
  render() {
    const{Applyleave}=this.state
    return (
       
    
   
    


       
    
        
        
      <><div className='App1'><br></br>
      



            

            <h2 style={{ margin: "1px", backgroundColor: "orange", textAlign: "center", padding: "10px", marginBottom: "20px" }}>
                Application for Leave

                <h5 style={{textAlign:"right"}}>
                <Link  style={{  color:"white", background:"Black", fontWeight:"bold", marginRight: "30px", width: "100px", height: "30px" }} 
                align="Center" to ="/Login">Logout</Link>
                </h5>
            </h2><br></br>



            <table  class="panel border bg-white" border={10} width="40%" align='center'>



               
                <tr>

                </tr>
                <tr>


                    <th>Leave Status</th>
                    <th>
                        <input  placeholder='Leave Status' style={{ width: "300px", height: "30px" }} type="text" name="lStatus"
                            onChange={(e) => this.handleChange({ lStatus: e.target.value })}></input>
                    </th>
                </tr>

                <tr>

                </tr>
                <tr>
                    <th>Leave Type</th>
                    <th>
                        <input  placeholder='Leave Type' style={{ width: "300px", height: "30px" }} type="text" name="lType"
                            onChange={(e) => this.handleChange({ lType: e.target.value })}></input>
                    </th>
                </tr>
                <tr>

                </tr>

                <tr>
                    <th>Start Date</th>
                    <th>
                        <input  style={{ width: "300px", height: "30px" }} type="date" name="sdate"
                            onChange={(e) => this.handleChange({ sdate: e.target.value })}></input>
                    </th>
                </tr>
                <tr>
                           
                </tr>
                <tr>
                    <th>End Date</th>
                    <th>
                        <input style={{ width: "300px", height: "30px" }} type="date" name="edate"
                            onChange={(e) => this.handleChange({ edate: e.target.value })}></input>
                    </th>
                </tr>
                <tr>

                </tr>
                <tr>
                    <th>EmployeeID</th>
                    <th>
                        <input  placeholder='Employee-ID' style={{ width: "300px", height: "30px" }} type="text" name="empID"
                            onChange={(e) => this.handleChange({ empID: e.target.value })}></input>
                    </th>
                </tr>

            </table>

        
            <div align="center">
                
                <button><Link style={{ color:"white", background:"Black", fontWeight:"bold", marginRight: "10px", marginTop: "10px", width: "100px", height: "30px" }} 
                align="Center" onClick={this.newleave}> APPLY </Link></button>


                {/* <button style={{ fontWeight:"bold", marginLeft: "10px", marginTop: "10px", width: "100px", height: "30px" }} 
                align="Center">BACK</button> */}


                    <button>
                 <Link  style={{ color:"white", background:"Black", fontWeight:"bold", marginRight: "30px", width: "100px", height: "30px" }} 
                align="Center" to ="/ShowAllEmployees">BACK</Link><br></br>

                
                </button>
                 <Routes>
                 
                 
                 <Route path="/ApplyLeave" element={<Applyleave/>}/>
                 </Routes>
                
            </div>

        </div>
        </>
      
    
    
      
    )

        
    }
}