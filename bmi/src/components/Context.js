import React, { Component } from "react";

export const DataContext = React.createContext();

export class DataProvider extends Component {
  state = {
    products: [
      {
        _id: "1",
        title: "Cropped Linen Shirt",
        src:
          "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F35%2Fb4%2F35b442e5b11c1738f235f74b65185a568d629153.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_shirtsblouses_shirts%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
        description: "Bright blue Jeans Shirt",
        content:
          "Cropped,wide shirt in airy linen with a collar,buttons down the front and a pleat at the back.Dropped Shoulders and elbow-length sleeves.",
        price: 23,
        colors: ["red", "black", "crimson", "teal"],
        count: 1
      },
      {
        _id: "2",
        title: "Oversized printed T-shirt",
        src:
          "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fca%2F3c%2Fca3cc31931f72e6c8574eba81ef37cdf1736d6c5.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_tops_printed_tshirts%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
        description: "Light grey marl/Snoopy",
        content:
          "Oversized T-shirt in soft cotton jersey with a print motif on the front,a round,ribbed neckline and gently dropped shoulders.Can be even recycled.",
        price: 9,
        colors: ["red", "crimson", "teal"],
        count: 1
      },
      {
        _id: "3",
        title: "Wide-cut Shirt",
        src:
          "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F16%2Fe8%2F16e83a6596331461b05febe59be86ba7bff2322e.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
        description: "Orange/pink Plaid",
        content:
          "Wide-cut short in soft,woven cotton fabric.Collar,buttons at front,and an open chest pocket.Dropped shoulders and long sleeves with button at cuffs.",
        price: 42,
        colors: ["lightblue", "white", "crimson", "teal"],
        count: 1
      },
      {
        _id: "4",
        title: "Oversized printed T-shirt",
        src:
          "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F40%2F57%2F4057a8bcdfc4c08dcd7056a1f788afcfd73c65b5.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_tops_printed_tshirts%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
        description: "Light beige/Nirvana",
        content:
          "Oversized T-shirt in soft cotton jersey with a print motif on the front, a round, ribbed neckline and gently dropped shoulders.",
        price: 12,
        colors: ["orange", "black", "crimson", "teal"],
        count: 1
      },
      {
        _id: "5",
        title: "Cotton Blouse",
        src:
          "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fed%2F9d%2Fed9de62a52c2543f5ef61beccb9d6b6a1bfac92e.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
        description: "Blue/Pink Floral",
        content:
          "Airy blouse in a cotton weave with a small stand-up collar, buttons down the front and a yoke with gathers along the shoulders and at the back. Gently dropped shoulders, long, wide sleeves and narrow cuffs.",
        price: 32,
        colors: ["orange", "black", "crimson", "teal"],
        count: 1
      },
      {
        _id: "6",
        title: "Oversized printed T-shirt",
        src:
          "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fd1%2F35%2Fd1351ca84bcdf038de8fcafcd0e65b1832bc300a.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_tops_printed_tshirts%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
        description: "Cream/Mickey Mouse",
        content:
          " Oversized T-shirt in soft cotton jersey with a print motif on the front, a round, ribbed neckline and gently dropped shoulders.Composed of cotton and other fibres.",
        price: 17,
        colors: ["orange", "black", "crimson", "teal"],
        count: 1
      }
    ],
    cart: [],
    total: 0
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
      alert("The product has been added to cart.");
    }
  };

  reduction = (id) => {
    const { cart } = this.state;
    cart.forEach((item) => {
      if (item._id === id) {
        item.count === 1 ? (item.count = 1) : (item.count -= 1);
      }
    });
    this.setState({ cart: cart });
    this.getTotal();
  };

  increase = (id) => {
    const { cart } = this.state;
    cart.forEach((item) => {
      if (item._id === id) {
        item.count += 1;
      }
    });
    this.setState({ cart: cart });
    this.getTotal();
  };

  removeProduct = (id) => {
    if (window.confirm("Do you want to delete this product?")) {
      const { cart } = this.state;
      cart.forEach((item, index) => {
        if (item._id === id) {
          cart.splice(index, 1);
        }
      });
      this.setState({ cart: cart });
      this.getTotal();
    }
  };

  getTotal = () => {
    const { cart } = this.state;
    const res = cart.reduce((prev, item) => {
      return prev + item.price * item.count;
    }, 0);
    this.setState({ total: res });
  };

  componentDidUpdate() {
    localStorage.setItem("dataCart", JSON.stringify(this.state.cart));
    localStorage.setItem("dataTotal", JSON.stringify(this.state.total));
  }

  componentDidMount() {
    const dataCart = JSON.parse(localStorage.getItem("dataCart"));
    if (dataCart !== null) {
      this.setState({ cart: dataCart });
    }
    const dataTotal = JSON.parse(localStorage.getItem("dataTotal"));
    if (dataTotal !== null) {
      this.setState({ total: dataTotal });
    }
  }

  render() {
    const { products, cart, total } = this.state;
    const { addCart, reduction, increase, removeProduct, getTotal } = this;
    return (
      <DataContext.Provider
        value={{
          products,
          addCart,
          cart,
          reduction,
          increase,
          removeProduct,
          total,
          getTotal
        }}
      >
        {this.props.children}
      </DataContext.Provider>
    );
  }
}
