import React, { Component } from "react";
import axios from "axios";
import PostContent from "./PostContent";
import {mapStateToProps} from '../layouts/Layout'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/postsActions';

class PostList extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     posts: []
  //   };
  // }
  render() {
    if (!this.props.params.postId){
    if (!this.props.posts.length) {
      return (<>Нет ни одного Поста</>);
    }
    const posts = this.props.posts.map(post => {
      return <PostContent key={post.id} {...post} />;
    });
    return (
      <div>
        <h1>Посты</h1>
        {posts}
      </div>
    );
  } else{
    const post = this.props.posts.find(post => {
      return post.id == this.props.params.postId
    });
    return (
      <div>
        <h1>Посты</h1>
        <PostContent {...post} />
      </div>
    );
  }



  }
  componentDidMount() {
    this.props.dispatch(fetchPosts())
    // axios.get("http://jsonplaceholder.typicode.com/posts/").then(response => {
    //   this.setState({ posts: response.data });
    // });
  }
}
export default connect(mapStateToProps)(PostList);
