
import axios from 'axios';
import React, { Component, Fragment } from 'react';

export default class DetailPost extends Component {
  state = {
    post: {
      title: '', 
      body: '',
    }
  }

  componentDidMount() {
   let id = this.props.match.params.postID;
    axios.get(`http://localhost:3000/post/${id}`).then (res => {
      console.log(res);
      let post = res.data 
      this.setState({
        post: {
          title: post.title,
          body: post.body

        } 
      })
    })
  }
  render() {
    return (
      <Fragment>
        <div>
          <p>{this.state.post.title}</p>
          <p style={{}}>{this.state.post.body}</p>
        </div>
        <hr />
      </Fragment>
    );
  }
}
