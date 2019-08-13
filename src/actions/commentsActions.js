import axios from "axios";

export function fetchComments() {
  return function(dispatch) {
    dispatch({ type: "FETCH_COMMENTS" });
    axios
      .get("http://jsonplaceholder.typicode.com/comments/")
      .then(response => {
        dispatch({ type: "FETCH_COMMENTS_FULLFILLED", payload: response.data });
      })
      .catch(err => {
        dispatch({ type: "FETCH_COMMENTS_REJECTED", payload: err });
      });
  };
}

// "FETCH_COMMENTS"
// "FETCH_COMMENTS_REJECTED"
// "FETCH_COMMENTS_FULLFILLED"