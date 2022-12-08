import logo from './logo.svg';
import './App.css';
import ListEmployeeComponent from './Components/ListOFEmployees';
import ListOfLeaveDetails from './Components/ListOfLeaveDetails';


function App() {
  return (
    <div className="App">
      <h1>Welcome to Leave operations</h1>
       <ListEmployeeComponent/> 
      <ListOfLeaveDetails></ListOfLeaveDetails>
    </div>
  );
}

export default App;
