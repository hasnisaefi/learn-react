import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { GlobalConsumer } from '../../../context/context';
import { RootContext } from '../../Home/Home';
import CardProduct from './CardProduct/CardProduct';

class Product extends Component {
  // state = {
  //   order: 4,
  // };

  // handleCounterChange = (newValue) => {
  //   this.setState({
  //     order: newValue,
  //   });
  // };

  render() {
    return (
      <Fragment>
        <div
          style={{
            marginLeft: '10px',
          }}
        >
          <p>Halaman Product</p>
          <hr />
          <div>
            <div>
              <img src="https://placeimg.com/200/152/tech" alt="" />
            </div>
            <div>{this.props.Totalorder}</div>
          </div>
          <CardProduct />
        </div>
      </Fragment>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     order: state.totalOrder,
//   };
// };

//export default connect(mapStateToProps)(Product);

export default GlobalConsumer(Product);
