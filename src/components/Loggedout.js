import React, { Component } from 'react';
import { Button } from "antd";

class Loggedout extends Component {
  
    render() {
        return (
          <>
          <div className="header-link" onClick={this.props.explore}>
            Explore
          </div>

          <div className="header-link" onClick={this.props.login}>
            Login
          </div>

          <div className="header-link">
            <Button type="primary" onClick={this.props.register}>
              Register
            </Button>
          </div>
        </>
          
         
            
        );
    }
}

export default Loggedout;