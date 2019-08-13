import React from "react";
import { connect } from "react-redux";
import Menu from "../components/Menu";
import MenuItem from "../components/MenuItem";
import { fetchUsers } from "../actions/usersActions";

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.brand = "React Blog!";
  }
  isActive(href) {
    return window.location.pathname === href;
  }

  render() {
    return (
      <>
        <Menu>
          <MenuItem href="/" active={this.isActive("/")}>
            Главная
          </MenuItem>
          <MenuItem href="/users" active={this.isActive("/users")}>
            Пользователи
          </MenuItem>
          <MenuItem href="/posts" active={this.isActive("/posts")}>
            Посты
          </MenuItem>
          <MenuItem href="/comments" active={this.isActive("/comments")}>
            Комментарии
          </MenuItem>
        </Menu>
        <div className="container">
          <div className="row">
            <div className="col-12">{this.props.children}</div>
          </div>
        </div>
        <footer className="card-footer">&copy; 2019</footer>
      </>
    );
  }
  componentDidMount() {
    // this.props.dispatch(fetchUsers())
  }
}

export function mapStateToProps(state) {
  return {
    users: state.users.users,
    posts: state.posts.posts,
    comments: state.comments.comments
  };
}

export default connect(mapStateToProps)(Layout);
