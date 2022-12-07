import React, { Component } from 'react'
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
export default class ShowAllManagers extends Component {
    constructor(props)
    {

    
        super(props)
        this.state={
            Managers:[]
        }
    }
    displayAllManagers()
        {
            let url='https://localhost:44367/api/ManInfo';

            axios.get(url).then(response=>{

                this.setState({Managers:response.data})

            }).catch(error=>{

                console.console.warn(error);
            })
            
        }
        componentDidMount()
        {
            this.displayAllManagers();
        }
  render() {
    const{Managers}=this.state
    return (

        
      <div > 
           <h2 style={{ margin: "1px", backgroundColor: "orange", textAlign: "center", padding: "10px", marginBottom: "20px" }}>
                  All Managers

                  <h5 style={{textAlign:"right"}}>
                <Link  style={{  color:"white", background:"Black", fontWeight:"bold", marginRight: "30px", width: "100px", height: "30px" }} 
                align="Center" to ="/Login">Logout</Link>
                </h5>
            </h2>
        
        
        <div> 
            

           </div>
        
        <table  class="panel border bg-white"  border={5} width="10%" align='center'>
            <tr>
                <th>Manager Id   </th>              
                <th>full Name     </th>
                
                <th>Email </th>
                
                <th>Phone   </th>
            


     
            </tr>

    {/* "manID": 201,
    "fname": "Jhon",
    "lname": "Wick",
    "email": "Jhon@gmail.com",
    "password": "Jhon@123",
    "conPwd": "Jhon@123",
    "gen": "Male",
    "ph": 6303373528,
    "date": "02/06/2006" */}

            
            {
                Managers.map(e=>
                    <tr>
                        <th>{e.manID}</th>
                        <th>{e.fullname}</th>
                    
                        <th>{e.email}</th>
                        
                        <th>{e.ph}</th>
                        
                    </tr>)
                    

            }
            
        </table>

       

        <br>
        </br>
        <br></br>
        <br></br>
        <br></br>
        <button>
                 <Link  style={{ color:"white", background:"Black", fontWeight:"bold", marginRight: "30px", width: "100px", height: "30px" }} 
                align="Center" to ="/DashBoard">BACK</Link><br></br>

                
                </button>
      </div>
    )
  }
}



