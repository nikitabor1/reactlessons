import axios from "axios";

export function fetchUsers() {
  return function(dispatch) {
    dispatch({ type: "FETCH_USERS" });
    axios
      .get("http://jsonplaceholder.typicode.com/users/")
      .then(response => {
        dispatch({ type: "FETCH_USERS_FULLFILLED", payload: response.data });
      })
      .catch(err => {
        dispatch({ type: "FETCH_USERS_REJECTED", payload: err });
      });
  };
}

// "FETCH_USERS"
// "FETCH_USERS_REJECTED"
// "FETCH_USERS_FULLFILLED"