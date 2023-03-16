import { getValue } from '@testing-library/user-event/dist/utils';
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { GlobalConsumer } from '../../../context/context';

class LifeCicleComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
    // console.log('constructor');
  }

  // getDerivedStateFromProps bermaksud jika dia memiliki nilai (props, state)
  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps');
    return null;
  }

  // LifeCycle

  componentDidMount() {
    // console.log('componentDidMount');
    // setTimeout(() => {
    //   this.setState({
    //     count: 2,
    //   });
    // }, 5000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    console.log('nextState', nextState);
    console.log('this.satate', this.state);

    // if (nextState.count >= 4) {
    //   return false;
    // }
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate(prevProp, prevState, snapshot) {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  diKlik = () => {
    this.setState({
      count: this.state.count + 1,
    });
    console.log('klik');
  };

  render() {
    console.log(this.props);
    console.log('render');
    return (
      <Fragment>
        <p
          style={{
            marginLeft: '10px',
          }}
        >
          Halaman LifeCycle
        </p>
        <hr />
        <div>
          <button
            style={{
              background: 'salmon',
              marginLeft: '10px',
            }}
            className="btn"
            onClick={this.diKlik}
          >
            Component button {this.state.count}
          </button>
          <p
            style={{
              marginLeft: '10px',
              fontSize: '13px',
            }}
          >
            Total Order: {this.props.state.totalOrder}
          </p>
        </div>
      </Fragment>
    );
  }
}

// const mapStateToPropsss = state => {
//   return{
//     order: state.totalOrder
//   }
// }

// export default connect(mapStateToPropsss) (LifeCicleComp);
export default GlobalConsumer (LifeCicleComp);