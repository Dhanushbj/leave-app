import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavbarComp from './Component/NavbarComp';
import DashBoard from './Component/DashBoard';

import Login from './Login';
import sherlock from './Images/782847.jpg';
import { BrowserRouter, Routes, Route,Link, Router } from 'react-router-dom';
import ShowAllManagers from './Component/ShowAllManagers';
import Registration from './Component/Registration';
import Applyleave from './ApplyLeave';
import ShowAllLeaveDeatails from './Component/ShowAllLeaveDeatails';
import ShowAllEmployees from './Component/ShowAllEmployees';
import AdminLogin from './Login';



function App() {
  return (
    <>
    <div className="App">
      
      
      
      <NavbarComp/>
      
      
      
       
         
       
      
       
       

      </div>

    
      
    
    
    </>
  );
}

export default App;
