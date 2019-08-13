import React, { Component, useEffect } from "react";
import UserProfile from "./UserProfile";
import { fetchUsers } from "../actions/usersActions";
import { mapStateToProps } from "../layouts/Layout";
import { connect } from "react-redux";

const UsersList = (props) => {
  useEffect(()=>props.dispatch(fetchUsers()),[])

    if (!props.params.userId) {
      if (!props.users.length) {
        return <>Нет ни одного пользователя</>;
      } else {
        const users = props.users.map(user => {
          return <UserProfile key={user.id} {...user} />;
        });
        return (
          <div>
            <h1>Пользователи</h1>
            {users}
          </div>
        );
      }
    } else {
        const user = props.users.find(item => 
            {return item.id == props.params.userId})
        return (
          <div>
            <h1>Пользователи</h1>
            <UserProfile {...user}/>
          </div>
        );   
  }
  
}


export default connect(mapStateToProps)(UsersList);
