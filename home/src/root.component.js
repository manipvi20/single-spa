import React from "react";
import { navigateToUrl } from "single-spa";

export default class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       user: ''
     };
     props.currentNameSubject.subscribe((data) => {
       this.state.user = data;
     })
     console.log(this.state);
  }


  render() {
    const { user } = this.state;
    console.log(user, 'iser');
    if(user == '') {
      navigateToUrl('/login');
    } else {
      return (
          <>
          <h1> Microfrontend Home page!</h1>
          </>
      );
    }
  }
}
