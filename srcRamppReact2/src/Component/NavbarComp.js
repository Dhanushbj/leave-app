import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React,{Component} from 'react';
import {
  BrowserRouter as Router ,
  Route,
  Link,
  Routes
} from "react-router-dom";

import Login from '../Login';

import Registration from './Registration';

import Applyleave from '../ApplyLeave';

import ShowAllLeaveDeatails from './ShowAllLeaveDeatails';

import ShowAllEmployees from './ShowAllEmployees';

import ShowAllManagers from './ShowAllManagers';

import DashBoard from './DashBoard';

import Forgotpassword from './Forgotpassword';

// import pic5 from '/Images/782847.jpg';

export default class NavbarComp extends Component{
  render(){
  return (
    <Router>
    <div>
    <Navbar className='App-header' variant={"Dark"} expand="lg">
      <Container>
        
        <Navbar.Brand href="/Login">   

         <h3> Leave-Management-System </h3>

          </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="me-auto">

            <Nav.Link as={Link} to={"/Login"}>Login</Nav.Link>

            <Nav.Link as={Link} to={"/Registration"}>Registration</Nav.Link>

           

            <Nav.Link as={Link} to={"/DashBoard"}>DashBoard</Nav.Link> 

         
            
          </Nav>
        </Navbar.Collapse>

        <Nav>
         
        </Nav>
      </Container>

      <Container></Container>

      <Navbar bg="primary" variant="dark"></Navbar>

    </Navbar>
    

    
    
    <Routes>
        <Route path="/Login" element={<Login/>}/>  

        <Route path="/Registration" element={<Registration/>}/>

        <Route path="/ApplyLeave" element={<Applyleave/>}/>

        <Route path="/ShowAllLeaveDeatails" element={<ShowAllLeaveDeatails/>}/>

        <Route path="/ShowAllEmployees" element={<ShowAllEmployees/>}/>

        <Route path="/DashBoard" element={<DashBoard/>}/>

        <Route path="/Forgotpassword" element={<Forgotpassword/>}/>
      
    </Routes>
    <br></br>
   
           
           <Routes>
           <Route path="/ShowAllManagers" element={<ShowAllManagers/>}/>
           </Routes>
           
       
        <br></br>

        <Navbar className='App-header' variant={"Dark"} expand="lg" > 

        <Nav className="me-auto">
       
        <h5   style={{color:"blue"  }}>Privacy Policy</h5><br></br>

        
        
         
        


        </Nav>

            
           
        </Navbar><br>
        </br>
            
        <footer><br></br>
        
         <Container><br></br>
        
     
           
          <h5>All Rights Reserved by @2022.</h5>

          </Container>

        </footer>
    </div>
    </Router>
    

   
  );
}
 }

























  