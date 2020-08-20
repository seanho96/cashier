import React, { Component } from 'react';

export const DataContext = React.createContext();

export class DataProvider extends Component {
  state = {
    products: [
      {
        _id: '1',
        title: 'Adidas Shoes 01',
        src:
          'https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/891d1a2070a148aaab14abc6011d77af_9366/zx-2k-boost-shoes.jpg',
        description: 'Lorem, ipsum dolor.',
        content:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, quos!',
        price: 23,
        colors: ['red', 'black', 'crimson', 'teal'],
        count: 1,
      },
      {
        _id: '2',
        title: 'Adidas Shoes 02',
        src:
          'https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/5163039e2e914f70aa25ab41014a99ab_9366/zx-2k-boost-shoes.jpg',
        description: 'Lorem, ipsum dolor.',
        content:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, quos!',
        price: 19,
        colors: ['red', 'crimson', 'teal'],
        count: 1,
      },
      {
        _id: '3',
        title: 'Adidas Shoes 03',
        src:
          'https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/fede3f7f39fc4f059870ab5e00fd00f6_9366/stan-smith-human-made-shoes.jpg',
        description: 'Lorem, ipsum dolor.',
        content:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, quos!',
        price: 50,
        colors: ['lightblue', 'white', 'crimson', 'teal'],
        count: 1,
      },
      {
        _id: '4',
        title: 'Adidas Shoes 04',
        src:
          'https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/20154f4373fd459c9ffeab4a00b763f9_9366/response-super-shoes.jpg ',
        description: 'Lorem, ipsum dolor.',
        content:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, quos!',
        price: 15,
        colors: ['orange', 'black', 'crimson', 'teal'],
        count: 1,
      },
      {
        _id: '5',
        title: 'Adidas Shoes 05',
        src:
          'https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/2271f5de8b014eb88032a6b00157c2fc_9366/adilette-comfort-slides.jpg',
        description: 'Lorem, ipsum dolor.',
        content:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, quos!',
        price: 10,
        colors: ['orange', 'black', 'crimson', 'teal'],
        count: 1,
      },
      {
        _id: '6',
        title: 'Adidas Shoes 06',
        src:
          'https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/f54d673afd4944f1af8eabc6011d465b_9366/predator-mutator-20.3-firm-ground-boots.jpg',
        description: 'Lorem, ipsum dolor.',
        content:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, quos!',
        price: 17,
        colors: ['orange', 'black', 'crimson', 'teal'],
        count: 1,
      },
    ],
    cart: [],
    subtotal: 0,
    tax: 0,
    total: 0,
    modelIsOpen: false,
  };

  addCart = (id) => {
    const { products, cart } = this.state;
    const check = cart.every((item) => {
      return item._id !== id;
    });
    if (check) {
      const data = products.filter((product) => {
        return product._id === id;
      });
      this.setState({ cart: [...cart, ...data] });
    } else {
      alert('The product has been added to cart.');
    }
  };

  reduction = (id) => {
    const { cart } = this.state;
    cart.forEach((item) => {
      if (item._id === id) {
        item.count === 1 ? this.removeProduct(id) : (item.count -= 1);
      }
    });
    this.setState({ cart: cart });
    this.getTotals();
  };

  increase = (id) => {
    const { cart } = this.state;
    cart.forEach((item) => {
      if (item._id === id) {
        item.count += 1;
      }
    });
    this.setState({ cart: cart });
    this.getTotals();
  };

  removeProduct = (id) => {
    if (window.confirm('Do you want to delete this product?')) {
      const { cart } = this.state;
      cart.forEach((item, index) => {
        if (item._id === id) {
          cart.splice(index, 1);
        }
      });
      this.setState({ cart: cart });
      this.getTotals();
    }
  };

  getTotals = () => {
    const { cart } = this.state;
    const newSubTotal = cart.reduce((prev, item) => {
      return prev + item.price * item.count;
    }, 0);
    const newTax = parseFloat((newSubTotal * 0.1).toFixed(2));
    const newTotal = newSubTotal + newTax;
    this.setState({
      subtotal: newSubTotal,
      tax: newTax,
      total: newTotal,
    });
  };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  componentDidUpdate() {
    localStorage.setItem('dataCart', JSON.stringify(this.state.cart));
    localStorage.setItem('dataSubTotal', JSON.stringify(this.state.subtotal));
    localStorage.setItem('dataTax', JSON.stringify(this.state.tax));
    localStorage.setItem('dataTotal', JSON.stringify(this.state.total));
  }

  componentDidMount() {
    const dataCart = JSON.parse(localStorage.getItem('dataCart'));
    if (dataCart !== null) {
      this.setState({ cart: dataCart });
    }
    const dataSubTotal = JSON.parse(localStorage.getItem('dataSubTotal'));
    if (dataSubTotal !== null) {
      this.setState({ subtotal: dataSubTotal });
    }
    const dataTax = JSON.parse(localStorage.getItem('dataTax'));
    if (dataTax !== null) {
      this.setState({ tax: dataTax });
    }
    const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
    if (dataTotal !== null) {
      this.setState({ total: dataTotal });
    }
  }

  render() {
    const { products, cart, subtotal, tax, total, modalIsOpen } = this.state;
    const {
      addCart,
      reduction,
      increase,
      removeProduct,
      getTotals,
      openModal,
      closeModal,
    } = this;
    return (
      <DataContext.Provider
        value={{
          products,
          addCart,
          cart,
          reduction,
          increase,
          removeProduct,
          subtotal,
          getTotals,
          tax,
          total,
          modalIsOpen,
          openModal,
          closeModal,
        }}
      >
        {this.props.children}
      </DataContext.Provider>
    );
  }
}
