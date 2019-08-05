import React, { Component } from "react";
import axios from "axios";
import CommentContent from "../components/CommentContent";

export default class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: null
    };
  }
  render() {
    return (
      <div>
        {this.state.comment && <CommentContent {...this.state.comment} />}
      </div>
    );
  }
  componentDidMount() {
    axios
      .get(
        `http://jsonplaceholder.typicode.com/comments/${this.props.params.id}`
      )
      .then(response => {
        this.setState({ comment: response.data });
      });
  }
}
