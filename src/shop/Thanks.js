import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Thanks extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col bg-dark text-white'>
            <div className='navbar-brand'>SPORTS STORE</div>
          </div>
        </div>
        <div className='m-2 text-center'>
          <h2>Thanks</h2>
          <p>Thank for placing your order</p>
          <p>Your order is #{this.props.order ? this.props.order.id : 0}</p>
          <p>We'll ship your goods as soon as possible.</p>
          <Link className='btn btn-primary' to='/shop'>
            Return to Store
          </Link>
        </div>
      </div>
    );
  }
}
