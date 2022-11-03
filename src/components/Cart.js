import React, { Component } from "react";
import styles from "./Cart.module.css";

export default class Cart extends Component {
  renderCartItem = (cart) => {
    const html = cart.map((item) => {
      return (
        <tr>
          <td>{item.product.id}</td>
          <td>{item.product.name}</td>
          <td>
            <img src={item.product.image} alt="" width={120} />
          </td>
          <td>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
              }}
            >
              <button
                className="btn btn-primary"
                onClick={() => this.props.decreaseQty(item.product.id)}
              >
                <i className="fa-solid fa-minus"></i>
              </button>
              <span>{item.quantity}</span>
              <button
                className="btn btn-primary"
                onClick={() => this.props.increaseQty(item.product.id)}
              >
                <i className="fa-solid fa-plus"></i>
              </button>
            </div>
          </td>
          <td>{item.product.price}$</td>
          <td>{item.product.price * item.quantity}$</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => {
                this.props.deleteCartItem(item.product.id);
              }}
            >
              <i className="fa-solid fa-trash"></i>
            </button>
          </td>
        </tr>
      );
    });
    return html;
  };

  render() {
    return (
      <div
        className="position-fixed w-100 h-100 top-0 left-0"
        style={{ backgroundColor: "rgba(0,0,0,0.8" }}
      >
        <div className={styles.cart}>
          <div className={styles.title}>
            <h1>Cart</h1>
            <button
              className="btn"
              onClick={() => {
                this.props.closeCart();
              }}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th style={{ width: "5%" }}>ID</th>
                <th style={{ width: "20%" }}>Name</th>
                <th style={{ width: "30%" }}>Image</th>
                <th style={{ width: "20%" }}>Quantity</th>
                <th style={{ width: "15%" }}>Unit Price</th>
                <th style={{ width: "10%" }}>Total</th>
                <th></th>
              </tr>
            </thead>
            {this.props.cart.length === 0 ? (
              <tbody>
                <tr>
                  <td colSpan={7}>Your cart is empty</td>
                </tr>
              </tbody>
            ) : (
              <tbody>
                {this.renderCartItem(this.props.cart)}
                <tr>
                  <td colSpan={5} style={{ textAlign: "right" }}>
                    <p style={{ fontWeight: "bold" }}>Amount: </p>
                  </td>
                  <td style={{ fontWeight: "bold" }}>
                    {this.props.calcTotalSum()}$
                  </td>
                  <td></td>
                </tr>
              </tbody>
            )}
          </table>
          {this.props.cart.length !== 0 && (
            <button
              className="btn btn-primary"
              onClick={() => {
                this.props.checkOut();
              }}
            >
              Check Out
            </button>
          )}
        </div>
      </div>
    );
  }
}
