import React, { Component } from 'react'
import './index.css'

export default class Document extends Component {
  render() {
    return (
      <div className='container'>
      <div className="card">
        <img src='https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'/>
        <div>
          <h2>Invest in Valby's sparkling new contruction</h2>
          <h3>Type: residential Rental</h3>
          <p>Soon ou can</p>
          <button>Show the property project</button>
        </div>
      </div>
      </div>

    )
  }
}
