import React, { Component } from 'react';
class User extends Component {
    render (){
        const {user} = this.props
        return (
            <div>
                <h1>User Details</h1>
                <img src={user.avatar_url} width="300"/>
                <h1>{ user.name}</h1>
                <h1>{ user.location }</h1>
                <h1>{ user.company }</h1>
            </div>
        )
    }
}
export default User;