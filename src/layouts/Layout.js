import React from "react";
import { connect } from "react-redux";
import Menu from "../components/Menu";
import MenuItem from "../components/MenuItem";

const Layout = props => {
  const isActive = href => {
    return window.location.pathname === href;
  };

  return (
    <>
      <Menu>
        <MenuItem href="/" active={isActive("/")}>
          Главная
        </MenuItem>
        <MenuItem href="/users" active={isActive("/users")}>
          Пользователи
        </MenuItem>
        <MenuItem href="/posts" active={isActive("/posts")}>
          Посты
        </MenuItem>
        <MenuItem href="/comments" active={isActive("/comments")}>
          Комментарии
        </MenuItem>
      </Menu>
      <div className="container">
        <div className="row">
          <div className="col-12">{props.children}</div>
        </div>
      </div>
      <footer className="card-footer">&copy; 2019</footer>
    </>
  );
};

export function mapStateToProps(state) {
  return {
    users: state.users.users,
    posts: state.posts.posts,
    comments: state.comments.comments
  };
}

export default Layout;
