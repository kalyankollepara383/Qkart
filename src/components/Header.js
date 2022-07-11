import { Button } from "antd";
import React from "react";
import "./Header.css"
import Search from "antd/lib/transfer/search";
import Loggedin from"./Loggedin";
import Loggedout from "./Loggedout";
import routes from  "../config/config"


export default class Header extends React.Component {
  root = () => {
    this.props.history.push(routes.Homepage);
  };

  explore = () => {
    this.props.history.push(routes.Productspage);
  };

  register = () => {
    this.props.history.push(routes.Registerpage);
  };

  login = () => {
    this.props.history.push(routes.Loginpage);
  };

  logout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    this.props.history.push(routes.Homepage);
  };

  render() {
    return (
      <div className="header">
        {/* Shows Qkart title image */}
        <div className="header-title" onClick={this.root}>
          <img src="icon.svg" alt="QKart-icon"></img>
        </div>

        {/* TODO: CRIO_TASK_MODULE_PRODUCTS - Display any child element passed to the component*/}
        {this.props.children}

        {/* Display links based on if the user's logged in or not */}
        <div className="header-action">
          {localStorage.getItem("username") ?
          (
          <Loggedin logout={this.logout}/>
        ) :( 
          <Loggedout login={this.login} explore={this.explore} register={this.register}/>
            ) }
        </div>
      </div>
    );
  }
}



