import React, { Component, Fragment } from 'react';
import Post from '../../../Component/Post/Post';
import axios from 'axios';
import API from '../../../services';

export default class BlogPost extends Component {
  state = {
    post: [],
    formBlogPost: {
      id: 1,
      title: '',
      body: '',
      userId: 1,
    },
    isUpdate: true,
    comments: [],
  };

  getPostApi = () => {
    // ('http://localhost:3000/post?_sort=id&_order=desc') / urutkan berdasarkan id
    // sort (parameter mana yang menjadi parameten mengurutkan)
    // axios
    //   .get('http://localhost:3000/post?_sort=id&_order=desc')
    // .then((result) => {
    //   //console.log(res.data);
    //   this.setState({
    //     post: result.data,
    //   });
    //   });

    API.getNewsBlog().then((e) => {
      console.log(e);
      this.setState({
        post: e,
      });
    });

    // API.getComments().then((result) => {
    //   this.setState({
    //     comments: result,
    //   });
    // });
  };

  postDataToApi = () => {
    API.postNewsBlog(this.state.formBlogPost).then((res) => {
      console.log(res);
      this.getPostApi(res);
      this.setState({
        formBlogPost: {
          id: 1,
          title: '',
          body: '',
          userId: 1,
        },
      });
    });
  };
  //   axios.post('http://localhost:3000/post', this.state.formBlogPost).then(
  //     (res) => {
  //       console.log(res);
  //       this.getPostApi();
  //       this.setState({
  //         formBlogPost: {
  //           id: 1,
  //           title: '',
  //           body: '',
  //           userId: 1,
  //         },
  //       });
      // },
      // (err) => {
      //   console.log('eror', err);
      // }
  //   );
  // };

  putDataToApi = () => {
    API.updateNewsBlog(this.state.formBlogPost, this.state.formBlogPost.id).then(res => {
      this.getPostApi(res);
      this.setState({
        isUpdate: false,
        formBlogPost: {
          id: 1,
          title: '',
          body: '',
          userId: 1,
        },
      });
    })
  };

  handleRemove = (data) => {
    console.log(data);
    API.deleteNewsBlog(data).then(res => {
      console.log(res);
      this.getPostApi(res);
    });
  };

  handleUpdate = (dataa) => {
    console.log(dataa);
    this.setState({
      formBlogPost: dataa,
      isUpdate: true,
    });
    // axios.put(`http://localhost:3000/post/${data}`, this.state.formBlogPost).then(res => {
    //   //console.log(res);
    //   this.getPostApi();
    // });
  };

  handleFormChange = (event) => {
    console.log(event);
    // console.log('form change',event.target);
    let fromBlogPostNew = { ...this.state.formBlogPost };
     console.log('new value', fromBlogPostNew);
    //  console.log('init state', this.state.formBlogPost);

    console.log(event.target.name);

    // membuat id menjadi dinamis //

    let timeStammp = new Date().getTime();
    console.log(timeStammp);

    if (!this.state.isUpdate) {
    //   // ! bermaksud jika this.state.isUpdate bernilai false maka jalankan fromBlogPostNew['id'] = timeStamp;
      fromBlogPostNew['id'] = timeStammp;
    }

    fromBlogPostNew[event.target.name] = event.target.value;
    this.setState(
      {
        formBlogPost: fromBlogPostNew,
      },
      () => {
        console.log('value object formBlogPost', this.state.formBlogPost);
      }
    );
  };

  handleSubmit = () => {
    //console.log(this.state.formBlogPost);
    if (this.state.isUpdate) {
      this.putDataToApi();
    } else {
      this.postDataToApi();
    }
  };

  handleDetail = (id) => {
    this.props.history.push(`/detail-post/${id}`);
  };

  componentDidMount() {
    this.getPostApi();
  }

  //memanggil API dgn fetch

  // fetch('https://jsonplaceholder.typicode.com/posts')
  // .then(response=> response.json())
  // .then(json =>{
  //   this.setState({
  //     post: json
  //   })
  // })

  //memanggil API dengan axios

  // axios.get("http://localhost:3004/post")
  // .then((res) => {
  //   //console.log(res.data);
  //   this.setState({
  //     post: res.data
  //   })
  // })

  render() {
    return (
      <Fragment>
        <div>
          <p
            style={{
              marginLeft: '10px',
            }}
          >
            Halaman Blogpost
          </p>
          <hr />
          <p
            style={{
              marginLeft: '10px',
              fontWeight: '700',
            }}
          >
            Blog Post
          </p>
          <div
            style={{
              marginBottom: '40px',
              marginLeft: '10px',
              fontSize: '13px',
            }}
          >
            <label htmlFor="title">Title</label>
            <input
              style={{
                fontSize: '10px',
              }}
              type="text"
              name="title"
              placeholder="add title"
              onChange={this.handleFormChange}
              value={this.state.formBlogPost.title}
            />
            <br />
            <label htmlFor="body">Blog Content</label>
            <br />
            <input
              style={{
                fontSize: '10px',
              }}
              name="body"
              id="body"
              cols="30"
              rows="5"
              placeholder="add blog content"
              onChange={this.handleFormChange}
              value={this.state.formBlogPost.body}
            ></input>
            <br />
            <button
              style={{
                cursor: 'pointer',
              }}
              onClick={this.handleSubmit}
            >
              simpan
            </button>
          </div>

          {/* {this.state.comments.map((comment) => {
            return <p key={comment.id}>email : {comment.email}</p>;
          })} */}

          {this.state.post.map((post) => {
            return (
              <Post
                key={post.id}
                data={post}
                remove={this.handleRemove}
                update={this.handleUpdate}
                goDetail={this.handleDetail}
              />
            );
          })}
        </div>
      </Fragment>
    );
  }
}
