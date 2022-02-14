import { Link } from "@reach/router";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './root.css';
import {Navbar, Container, Nav} from 'react-bootstrap';

export default class Root extends React.Component {
  state = {
    hasError: false
  };

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <div className="error">Error</div>;
    } else {
      return (
        <>

      <Navbar bg="dark" variant="dark">
      <div class="container-fluid">
          <Link className="nav-link" to="/" className="logo">
            <img
              src="https://single-spa.js.org/img/logo-white-bgblue.svg"
              className="d-inline-block align-top"
              height="60"
              width="60"
              alt=""
            />
            <p className="logo-text">Single SPA</p>
           </Link>
          <Nav className="me-auto">
          <Link className="nav-link" to="/employees">
              Employees
          </Link>
            {/* <Link className="nav-link" to="/angular">
              Angular
            </Link> */}
          </Nav>
         </div>
        </Navbar>
        </>
      );
    }
  }
}
