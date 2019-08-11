import React, { Component } from "react";
// import axios from 'axios';
import UserProfile from "./UserProfile";
import { fetchUsers } from "../actions/usersActions";
import { mapStateToProps } from "../layouts/Layout";
import { connect } from "react-redux";

class UsersList extends Component {
  // constructor(props){
  //     super(props);
  //     this.state = {
  //         users:[]
  //     }
  // }
  render() {
    if (!this.props.params.userId) {
      if (!this.props.users.length) {
        return <>Нет ни одного пользователя</>;
      } else {
        const users = this.props.users.map(user => {
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
        const user = this.props.users.find(item => 
            {return item.id == this.props.params.userId})
        return (
          <div>
            <h1>Пользователи</h1>
            <UserProfile {...user}/>
          </div>
        );
      }
   
  }
  componentDidMount() {
      this.props.dispatch(fetchUsers());
  }

}

// axios.get('http://jsonplaceholder.typicode.com/users/').then(response=>{
//     this.setState({ users: response.data})
// });

export default connect(mapStateToProps)(UsersList);
// export default UsersList;