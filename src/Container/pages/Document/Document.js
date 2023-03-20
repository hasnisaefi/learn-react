import React, { Component, Fragment } from 'react';
import './index.css';

export default class Document extends Component {
  state = {
    nama: [],
    number: 0,
    inputan: [],
  };

  componentDidMount() {
    fetch('http://localhost:3000/post')
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          nama: data,
        })
      );
  }

  handleClick = () => {
    alert(`di klik, ${this.state.number + 1}`);
    this.setState({
      number: this.state.number + 1,
    });
  };

  Inputan = (a) => {
    this.setState({
      inputan: a.target.value,
    });
  };

  render() {
    const { nama } = this.state;
    return (
      <Fragment>
        <div
          style={{
            paddingLeft: '20px',
          }}
        >
          <h1>Halow {this.state.inputan}</h1>
          <input
            type="text"
            placeholder="ketik sesuatu"
            value={this.state.inputan}
            onChange={this.Inputan}
          />
        </div>
        <div className="container">
          <div className="card">
            <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />
            <div>
              <h2>Invest in Valby's sparkling new contruction</h2>
              <h3>Type: residential Rental</h3>
              <p>Soon ou can</p>
              <button onClick={this.handleClick}>
                Show the property project {this.state.number}
              </button>
            </div>
          </div>
          <ul>
            {nama.map((a, idx) => (
              <p key={idx}>{a.title}</p>
            ))}
          </ul>
        </div>
      </Fragment>
    );
  }
}
