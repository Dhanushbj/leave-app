import React, { Component } from 'react'
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
export default class ShowAllEmployees extends Component {
    constructor(props)
    {

    
        super(props)
        this.state={
            Employees:[]
        }
    }
    displayAllEmployees()
        {
            let url='https://localhost:44367/api/EmpInfo';

            axios.get(url).then(response=>{

                this.setState({Employees:response.data})

            }).catch(error=>{

                console.console.warn(error);
            })
            
        }
        componentDidMount()
        {
            this.displayAllEmployees();
        }
  render() {
    const{Employees}=this.state
    return (

        
      <div>  <br></br>
           <h2  style={{ margin: "1px", backgroundColor: "orange", textAlign: "center", padding: "10px", marginBottom: "20px" }}>
                  Show All Employee
                  <h5 style={{textAlign:"right"}}>
                <Link  style={{  color:"white", background:"Black", fontWeight:"bold", marginRight: "30px", width: "100px", height: "30px" }} 
                align="Center" to ="/Login">Logout</Link>
                </h5>
            </h2>
        
        
        <div> 
            

           </div>
        
        <table  class="panel border bg-white" border={5} width="50%" align='center'>
            <tr>
                <th>Employee Id   </th>
                <th>Full Name </th>
                
                <th>Email </th>
                <th>Gender </th>
                <th>Phone   </th>
                <th>Date of Joining   </th>
            </tr>

            {/* <table class="table table-dark table-striped">
  ...
</table> */}
            {
                Employees.map(e=>
                    <tr>
                        <th>{e.empID}</th>
                        <th>{e.fullname}</th>
                
                        <th>{e.email}</th>
                        <th>{e.gen}</th>
                        <th>{e.ph}</th>
                        <th>{e.date}</th>
                    </tr>)
                    

            }
            
        </table ><br></br>

        <button>
                 <Link  style={{ color:"white", background:"Black", fontWeight:"bold", marginRight: "30px", width: "100px", height: "30px" }} 
                align="Center" to ="/DashBoard">BACK</Link><br></br>

                
                </button>
      </div>
    )
  }
}



