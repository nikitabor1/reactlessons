import React, { Component, useEffect } from "react";
import PostContent from "./PostContent";
import {mapStateToProps} from '../layouts/Layout'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/postsActions';

const PostList = (props) => {

  useEffect(()=> props.dispatch(fetchPosts()),[])

    if (!props.params.postId){
    if (!props.posts.length) {
      return (<>Нет ни одного Поста</>);
    }
    const posts = props.posts.map(post => {
      return <PostContent key={post.id} {...post} />;
    });
    return (
      <div>
        <h1>Посты</h1>
        {posts}
      </div>
    );
  } else{
    const post = props.posts.find(post => {
      return post.id == props.params.postId
    });
    return (
      <div>
        <h1>Посты</h1>
        <PostContent {...post} />
      </div>
    );
  }
  
}
export default connect(mapStateToProps)(PostList);
