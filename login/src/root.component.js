import React, { useCallback } from "react";
import { 
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,useNavigate  } from 'react-router-dom';
import { navigateToUrl } from "single-spa";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './root.css';
const Login = (props) => {
  console.log(props, '---login props')
  // const history = useNavigate ();
  console.log(props);
      const [user, setUser] = React.useState({});
      const [pass, setPassword] = React.useState({});
      React.useEffect(() => {
        if (user) {
          props.currentNameSubject.next(user);
        }
      },[props.currentNameSubject])
      const onInputChange = (event) => {
        console.log(event.target.value);
        setUser(event.target.value);
      }
      const onPasswordChange = (event) => {
        setPassword (event.target.value);
      }
      const login = (event) => {
        if(user == 'admin' && pass == 'admin') {
          props.currentNameSubject.next(user);
          navigateToUrl('/');
         }
      }
        return (
          <Router>
          <div className="auth-wrapper">
            <div className="auth-inner">
            <form>
                <h3>Sign In</h3>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" onChange={onInputChange}/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={onPasswordChange} />
                </div>
                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary btn-block" onClick={login}>Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
            </div>
            </div>
            </Router>
        );
}

export default Login;