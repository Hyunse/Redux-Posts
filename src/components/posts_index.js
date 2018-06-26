import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';


class PostIndex extends Component {
  
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    console.log(this.props.posts);
    return (
      <div>
        PostIndex
      </div>
    );
  }

};

function mapStateToProps({ posts }) {
  return { posts };
} 

export default connect(mapStateToProps, { fetchPosts })(PostIndex);