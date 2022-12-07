import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
export default class ShowAllLeaveDeatails extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
       Leave:[]
    }
  }
  DisplayLeave()
  {
    let url= 'https://localhost:44367/api/LeaveInfo';
    axios.get(url).then(Response=>
        {
            this.setState({Leave:Response.data});
            
        }).catch(error=>{
            console.warn(error);
            alert(error);
        })
  }
  componentDidMount()
  {
    this.DisplayLeave();
  }
    render() {
        const{Leave}=this.state;
    return (
      <><><div align="center"> 
           <br></br>
        
        

            <h2 style={{ margin: "1px", backgroundColor: "orange", textAlign: "center", padding: "10px", marginBottom: "20px" }}>
                Leave Details

                <h5 style={{textAlign:"right"}}>
                <Link  style={{  color:"white", background:"Black", fontWeight:"bold", marginRight: "30px", width: "100px", height: "30px" }} 
                align="Center" to ="/Login">Logout</Link>
                </h5>
                
            </h2><br></br>

                

            <table class="panel border bg-white" border={2} width="50%" align='center'>
                <tr>
                    <th>Leave Id</th>
                    <th>Leave Status</th>
                    <th>Leave Type</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Employee Id</th>
                </tr>
                {Leave.map(c => <tr>
                    <th>{c.lid}</th>
                    <th>{c.lStatus}</th>
                    <th>{c.lType}</th>
                    <th>{c.sdate}</th>
                    <th>{c.edate}</th>
                    <th>{c.empID}</th>
                </tr>
                )}
            </table><br></br>

            <button>
                 <Link  style={{ color:"white", background:"Black", fontWeight:"bold", marginRight: "30px", width: "100px", height: "30px" }} 
                align="Center" to ="/DashBoard">BACK</Link><br></br>

                
                </button>
        </div></>
        </>
    )
  }
}