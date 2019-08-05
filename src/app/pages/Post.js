import React, { Component } from "react";
import axios from "axios";
import PostContent from "../components/PostContent";

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: null
    };
  }
  render() {
    return <div>{this.state.post && <PostContent {...this.state.post} />}</div>;
  }
  componentDidMount() {
    axios
      .get(`http://jsonplaceholder.typicode.com/posts/${this.props.params.id}`)
      .then(response => {
        this.setState({ post: response.data });
      });
  }
}
