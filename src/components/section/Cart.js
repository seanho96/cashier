import React, { Component } from 'react';
import { DataContext } from '../Context';
import Colors from './Colors';
import Modal from 'react-modal';
import '../css/Details.css';
import '../css/Cart.css';
import '../css/Modal.css';

export class Cart extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    };
  }

  static contextType = DataContext;

  componentDidMount() {
    this.context.getTotals();
  }

  render() {
    const {
      cart,
      increase,
      reduction,
      removeProduct,
      subtotal,
      tax,
      total,
      modalIsOpen,
      openModal,
      closeModal,
    } = this.context;

    if (cart.length === 0) {
      return <h2 style={{ textAlign: 'center' }}>Nothings Product</h2>;
    } else {
      return (
        <>
          {cart.map((item) => (
            <div className="details cart" key={item._id}>
              <img src={item.src} alt="" />
              <div className="box">
                <div className="row">
                  <h2>{item.title}</h2>
                  <span>${item.price * item.count}</span>
                </div>
                <Colors colors={item.colors} />
                <p>{item.description}</p>
                <p>{item.content}</p>
                <div className="amount">
                  <button className="count" onClick={() => reduction(item._id)}>
                    {' '}
                    -{' '}
                  </button>
                  <span>{item.count}</span>
                  <button className="count" onClick={() => increase(item._id)}>
                    {' '}
                    +{' '}
                  </button>
                </div>
              </div>
              <div className="delete" onClick={() => removeProduct(item._id)}>
                X
              </div>
            </div>
          ))}
          <div className="total">
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={() => closeModal()}
              style={{
                content: {
                  backgroundColor: '#fff',
                },
              }}
            >
              <div className="modal">
                <h2>Payment</h2>

                <p>
                  Total Paid: $
                  <input
                    type="number"
                    placeholder="Enter paid amount"
                    value={this.state.input}
                    onChange={(event) =>
                      this.setState({ input: event.target.value })
                    }
                  />
                </p>
                <p>Total: ${total}</p>
                <p>
                  Change: ${parseFloat(this.state.input - total).toFixed(2)}
                </p>

                <div className="modal__buttons">
                  <button
                    className="modal__closeButton"
                    onClick={() => closeModal()}
                  >
                    Close
                  </button>
                  <button
                    className="modal__submitButton"
                    onClick={() => closeModal()}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </Modal>
            <button onClick={() => openModal()}>Payment</button>
            <h3>Sub-Total: ${subtotal}</h3>
            <h3>Tax: ${tax}</h3>
            <h3>Total: ${total}</h3>
          </div>
        </>
      );
    }
  }
}

export default Cart;
