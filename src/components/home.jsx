import React, { Component } from "react";
import axios from 'axios';

class Home extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
    errors: [],
    users: [],
  };

  componentDidMount() {
    this.getUsers();
  }

  getUsers = () => {
    axios.get("users").then((response) => {
      console.log(response.data);
      const users = response.data;
        this.setState({ users });
    });
  };

  render() { 
    return ( 
    <div>
    <h1>users!</h1>
    <ul>
        { this.state.users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
    </div>
     );
  }
}
 

export default Home;
