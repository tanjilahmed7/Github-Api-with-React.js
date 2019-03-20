import React, { Component } from 'react';
import './App.css';
import User from './User';

class App extends Component {

  state = {
    user : {}
  }

  getUser = () => {
    const name = this.refs.name.value;
    fetch(`http://api.github.com/users/${name}`)
    .then(response => response.json())
    .then(data => {
      this.setState({
        user : {
          name : data.name,
          location : data.location,
          company : data.company,
          avatar_url : data.avatar_url,
        }
      })
    })
  }

  render() {
    const { user } = this.state;
    return (
      <div className="App">
        <input type="text" placeholder="Enter a username" ref="name"  />
        <button onClick={ this.getUser } >Get User Details</button>
        <User user = {user}/>
      </div>
    );
  }
}

export default App;
