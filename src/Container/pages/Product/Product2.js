import axios from 'axios';
import React, { Component, Fragment } from 'react';
import CardProduct from './CardProduct/CardProduct';

class Product2 extends Component {
  state = {
    nilaiAwal: 10,
    get: [],
  };
  
  handleCounter = (newVal) => {
    this.setState({
      nilaiAwal: newVal,
    });
  };
  
  
  
  // handlePlus = () => {
    //   console.log('diklik plus');
    //   this.setState({
      //     nilaiAwal: this.state.nilaiAwal + 1,
  //   });
  // };

  // handleMinus = () => {
  //   console.log('diklik minus');
  //   if (this.state.nilaiAwal > 0) {
  //     this.setState({
  //       nilaiAwal: this.state.nilaiAwal - 1,
  //     });
  //   }
  // };

  componentDidMount() {

    // API GET menggunakan FETCH

    // fetch('http://localhost:3000/post')
    //   .then((res) => res.json())
    //   // .then((res) =>console.log(res))
    //   .then((isiApi) => {
    //     // .then(isiApi => console.log(isiApi)
    //     this.setState({
    //       get: isiApi,
    //     });
    //   });


    //API GET menggunakan AXIOS

    axios.get('http://localhost:3000/post')
    .then ((ress) => {
      console.log(ress);
      this.setState({
        get: ress.data
      })
    })
    
  }

  render() {
    return (
      <Fragment>
        <CardProduct counterChange={(val) => this.handleCounter(val)} />
        {/* <div
          style={{
            paddingLeft: '10px',
          }}
        >
          <button onClick={this.handlePlus}>+</button>
          <input type="text" value={this.state.nilaiAwal} />
          <button onClick={this.handleMinus}>-</button>
        </div> */}
        <div
          style={{
            paddingLeft: '10px',
          }}
        >
          <p>count: {this.state.nilaiAwal}</p>
        </div>

        <div>
          {this.state.get.map((api) => {
            return <p key={api}>API GET : {api.title}</p>;   
          })}
          
        </div>
          
      </Fragment>
    );
  }
}

export default Product2;
