import React from "react";
import { BrowserRouter, Link, browserHistory  } from "react-router-dom";
import { navigateToUrl } from "single-spa";
import './root.css';

export default class Root extends React.Component {
  constructor(props) {
    super(props);
    console.log(props, 'react app')
    this.state = {
       employees: [],
       user: ''
     };
     props.currentNameSubject.subscribe((data) => {
       this.state.user = data;
     })
     console.log(this.state);
  }

  componentDidMount() {
    fetch("https://reqres.in/api/users").then((response) => {
      response.json().then((data) => this.setState({ employees: data.data }));
    });
  }

  componentDidCatch(error, errorInfo) {
    console.log(error);
  }

  render() {
    const { employees, user } = this.state;
    console.log(user, 'iser');
    if(user == '') {
      navigateToUrl('/login');
    } else {
      if (!employees.length) {
        return (
          <div className="spinner-border" role="status">
            <span className="sr-only"></span>
          </div>
        );
      }

      return (
        <BrowserRouter basename="/">
          <table className="table table-striped table-bordered table-sm">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => {
                return (
                  <tr key={employee.id}>
                    <th>
                      <Link to={`/employees/${employee.id}`}>{employee.id}</Link>
                    </th>
                    <td>{employee.first_name}</td>
                    <td>{employee.last_name}</td>
                    <td>{employee.email}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <em>{this.props.name} using React</em>
        </BrowserRouter>
      );
    }
  }
}
