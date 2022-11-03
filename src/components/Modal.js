import React, { Component } from "react";
import styles from "./Modal.module.css";

export default class Modal extends Component {
  render() {
    const { name, price, description, quantity, image } = this.props.item;
    return (
      <div
        className="position-fixed w-100 h-100 top-0 left-0"
        style={{ backgroundColor: "rgba(0,0,0,0.8" }}
      >
        <div className={styles.modal}>
          <div className="btn ms-auto">
            <button
              onClick={() => {
                this.props.closeModal();
              }}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
          <img src={image} alt=""></img>
          <h1>{name}</h1>
          <p>{description}</p>
          <p>Price: {price}$</p>
          <p>Quantity: {quantity}</p>
          <button onClick={() => this.props.addToCart(this.props.item)}>
            Add to Cart
          </button>
        </div>
      </div>
    );
  }
}
