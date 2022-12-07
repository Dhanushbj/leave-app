import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Logout extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
      this.Logout = this.Logout.bind(this)
    }

    Logout()
    {
        if(sessionStorage.getItem("empID") != null)
        {
            sessionStorage.removeItem("empID")
            window.location="/NavbarComp";
        }
    }
    
  render() {
    return (
      <div>
        
        <button onClick={this.Logout}>Logout</button>
      </div>
    )
  }
}