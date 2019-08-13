import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import { Provider } from "react-redux";

import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./layouts/Layout";
import Main from "./pages/Main";
import UsersList from "./components/UsersList";
import PostList from "./components/PostList";
import CommentList from "./components/CommentList";
import PageNotFound from "./pages/PageNotFound";

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Main} />
        <Route path="users" component={UsersList}>
          <Route path=":userId" component={UsersList} />
        </Route>
        <Route path="posts" component={PostList}>
          <Route path=":postId" component={PostList} />
        </Route>
        <Route path="comments" component={CommentList}>
          <Route path=":commentId" component={CommentList} />
        </Route>
        <Route path="*" component={PageNotFound} />
      </Route>
    </Router>
  </Provider>,
  document.querySelector("#root")
);
