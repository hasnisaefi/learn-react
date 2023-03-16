import React, { Component } from 'react'
import Counter from './Counter'

export default class CardProduct extends Component {
  state = {
    nilaiAwal: 10,
  };

  handleeCounter = (newVall) => {
    this.props.counterChange(newVall)
  }

  handlePlus = () => {
    console.log('diklik plus');
    this.setState({
      nilaiAwal: this.state.nilaiAwal + 1,
    }, () => {
      this.handleeCounter(this.state.nilaiAwal)

    });
  };

  handleMinus = () => {
    console.log('diklik minus');
    if (this.state.nilaiAwal > 0) {
      this.setState({
        nilaiAwal: this.state.nilaiAwal - 1,
      }, () => {
        this.handleeCounter(this.state.nilaiAwal)
  
      });
    }
  };

  render() {
    return (
      <div >
       <p style={{
        fontSize:'13px'
       }}>Daging Ayam Berbumbu Rasa Original</p>
       <div
          style={{
            paddingLeft: '10px',
          }}
        >
          <button onClick={this.handlePlus}>+</button>
          <input type="text" value={this.state.nilaiAwal} />
          <button onClick={this.handleMinus}>-</button>
        </div>
       {/* <Counter/> */}
      </div>
    )
  }
}
