import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './Container/Home/Home';
import { Component } from 'react';
import FunctionComp from './Component';
//import ClassComp from './Container';
import Youtube from './Component/YoutubeComp';

//FUNCTION COMP
// const FunctionComp = () => {
//   return <p>hello functioncomp</p>;
// };

//CLASS COMP
// class ClassComp extends Component {
//   render() {
//     return <p>hello classcomp</p>;
//   }
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <FunctionComp/>
    <Youtube time= "7.12" title="aaaaa" desc="desc 1"/>
    <Youtube time= "7.40" title="bbbbb" desc="desc 2"/>
    <Youtube time= "8.12" title="cccccc" desc="desc 3"/>
    <Youtube title="dddd" desc="desc 4"/> */}
    <hr/>
    {/* <ClassComp/> */}
   
    <Home />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
