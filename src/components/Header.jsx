import React, { Component } from "react";
import "styles/header.css";

class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <a className="fb_logo" href="#">
            <h1>facebook</h1>
          </a>
          <form className="loginform">
            <table>
              <tr>
                <td>
                  <p className="input_text">Email or phone</p>
                </td>
                <td>
                  <p className="input_text">Password</p>
                </td>
              </tr>
              <tr>
                <td>
                  <input className="email_password_input" />
                </td>
                <td>
                  <input className="email_password_input" />
                </td>
                <td>
                  <button className="logInButton">Log In</button>
                </td>
              </tr>
            </table>
          </form>
        </header>
      </div>
    );
  }
}

export default Header;
