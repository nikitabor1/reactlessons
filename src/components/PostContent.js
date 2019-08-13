import React, { Component } from "react";
import { Link } from "react-router";

const PostContent= (props) => {
  
    return (
      <div className="card border-secondary mb-3">
        <div className="card-header">
          <Link to={`/posts/${props.id}`}>{props.title}</Link>
        </div>

        <div className="card-body text-secondary">
          <p>{props.title}</p>
          <p>{props.body}</p>
        </div>
      </div>
    );
}

export default PostContent