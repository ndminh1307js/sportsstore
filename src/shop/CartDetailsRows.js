import React, { Component } from 'react';

export class CartDetailsRows extends Component {
  handleChange = (product, event) => {
    this.props.updateCartQuantity(product, event.target.value);
  };

  render() {
    if (!this.props.cart || this.props.cart === 0) {
      return (
        <tr>
          <td colSpan='5'>Your cart is empty</td>
        </tr>
      );
    } else {
      return (
        <React.Fragment>
          {this.props.cart.map((item) => (
            <tr key={item.product.id}>
              <td>
                <input
                  type='number'
                  value={item.quantity}
                  step='1'
                  onChange={(event) => this.handleChange(item.product, event)}
                />
              </td>
              <td>{item.product.name}</td>
              <td className='text-danger'>${item.product.price.toFixed(2)}</td>
              <td className='text-danger'>
                ${(item.quantity * item.product.price).toFixed(2)}
              </td>
              <td>
                <button
                  className='btn btn-danger btn-sm'
                  onClick={() => this.props.removeFromCart(item.product)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <th colSpan='3' className='text-right'>
              Total:
            </th>
            <th colSpan='2' className='text-danger'>
              ${this.props.cartPrice.toFixed(2)}
            </th>
          </tr>
        </React.Fragment>
      );
    }
  }
}
