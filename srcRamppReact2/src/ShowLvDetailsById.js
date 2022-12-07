import React, { Component } from 'react'
import axios from 'axios';

export default class ShowLvDetailsById extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      Leave_A:[],
      leave_Id:''
    }
    
  }
  DisplayLvById()
  {
    let leave_Id= this.state.leave_Id;
    let url='https://localhost:44360/api/LeaveInfo'+leave_Id;
    axios.get(url).then(Response=>
        {
            this.setState({Leave_A:Response.data})
        }).catch(error=>{
            console.warn(error);
            alert(error);
        })
  }
  componentDidMount()
  {
        this.DisplayLvById();
  } 
    render() {
        const{Leave_A}=this.state;
    return (
      <div>ShowLvDetailsById


<table>
            <tr>
                <th>Leave Id</th>
                <th>Employee Id</th>
                <th>Leave Type</th>
                <th>Leave Status</th>
                <th>Start Date</th>
                <th>End Date</th>
            </tr>
            {
                 Leave_A.map(c=>
                    <tr><th>{c.leave_Id}</th>
                    <th>{c.empId}</th>
                    <th>{c.leave_Type}</th>
                    <th>{c.leave_Status}</th>
                    <th>{c.start_Date}</th>
                    <th>{c.end_Date}</th></tr>
                    )
            }
            <label>Enter the Leave Id</label>
        <input type="text" name="leave_Id" onChange={(e)=>this.handlechange({leave_Id:e.target.value})}></input>
    <button onClick={this.DisplayLvById}>Click</button>
        </table>
      </div>
    )
  }
}
