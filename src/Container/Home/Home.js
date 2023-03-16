import React, { Component, createContext, Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import GlobalProvider from '../../context/context';
import BlogPost from '../pages/BlogPost/BlogPost';
import LifeCicleComp from '../pages/LifeCicleComp/LifeCicleComp';
import Product from '../pages/Product/Product';
import Document from '../pages/Document/Document';
import YoutubeComp from '../../Component/YoutubeComp';
import Youtube from '../../Component/YoutubeComp';
// import Product2 from '../pages/Product/Product2';

// export const RootContext = createContext();
// const Provider = RootContext.Provider

class Home extends Component {
  // state = {
  //   totalOrder: 0
  // }

  // state = {
  //   showComponent: true,
  // };

  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({
  //       showComponent: false,
  //     });
  //   }, 10000);
  // }

  // dispatch = (action) => {
  //   if(action.type === 'PLUS_ORDER'){
  //     return this.setState({
  //       totalOrder: this.state.totalOrder + 1
  //     })
  //   }
  //   if(action.type === 'MINUS_ORDER'){
  //     return this.setState({
  //       totalOrder: this.state.totalOrder - 1
  //     })
  // }
  // }

  render() {
    return (
      <BrowserRouter>
        {/* <div>
          <p>LifeCycle Component</p>
          <hr />
          {this.state.showComponent ? <LifeCicleComp /> : null}
          <LifeCicleComp />
          <p>Blog Post</p>
          <hr />
          <BlogPost />
        </div>  */}
        <Fragment>
          
          <div
            style={{
              marginLeft: '10px',
              display: 'flex',
            }}
          >
            <Link
              style={{
                fontSize: '11px',
              }}
              to="/"
            >
              Blog Post
            </Link>

            <Link
              style={{
                fontSize: '11px',
              }}
              to="/LifeCycle"
            >
              LifeCycle
            </Link>

            <Link
              style={{
                fontSize: '11px',
              }}
              to="/Product"
            >
              Product
            </Link>
            <Link
              style={{
                fontSize: '11px',
              }}
              to="/Document"
            >
              Document
            </Link>
            {/* <Link
              style={{
                fontSize: '11px',
              }}
              to="/YoutubeComp"
            >
              YoutubeComp
            </Link> */}
          </div>
          <Route path="/" exact component={BlogPost} />
          <Route path="/LifeCycle" component={LifeCicleComp} />
          <Route path="/Product" component={Product} />
          <Route path="/Document" component={Document} />
          {/* <Route path="/YoutubeComp" component={YoutubeComp} /> */}
          
          {/* <div>
            <Youtube time="7.12" title="aaaaa" desc="desc 1" />
            <Youtube time="7.40" title="bbbbb" desc="desc 2" />
            <Youtube time="8.12" title="cccccc" desc="desc 3" />
            <Youtube title="dddd" desc="desc 4" />
          </div> */}
        {/* <Product2/> */}
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default GlobalProvider(Home);
