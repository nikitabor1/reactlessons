import axios from "axios";

export function fetchPosts() {
  return function(dispatch) {
    dispatch({ type: "FETCH_POSTS" });
    axios
      .get("http://jsonplaceholder.typicode.com/posts/")
      .then(response => {
        dispatch({ type: "FETCH_POSTS_FULLFILLED", payload: response.data });
      })
      .catch(err => {
        dispatch({ type: "FETCH_POSTS_REJECTED", payload: err });
      });
  };
}

// "FETCH_POSTS"
// "FETCH_POSTS_REJECTED"
// "FETCH_POSTS_FULLFILLED"



