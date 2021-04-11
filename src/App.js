import React from 'react';
import axios from "axios";

import User from "./components/User";

const api = "https://60705aae85c3f0001746fe87.mockapi.io/";
const usersAPI = `${api}users`;

class App extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    users: [],
  };
}

componentDidMount(){
  axios.get(usersAPI).then(({data}) => {
    this.setState({users: data});
  });
}

componentDidUpdate(){ 
   
}

handleClick = (e) => {
  const {users} = this.state;
  users.pop();
  this.setState({users});
}

  render() {
    const {users} = this.state;
    return ( 
    <>
     <button onClick={this.handleClick}>Delete</button>
      <ul>
      {users.length > 0 ? users.map((user)=> (<User key = {user.id} name={user.name} avatar={user.avatar}/>)): "no users found"}
      </ul>
    </>
    );
  }
}


export default App;
