import React, { Component } from "react";
import styles from "./Modal.module.css";

export default class Modal extends Component {
  render() {
    const { name, price, description, quantity, image } = this.props.item;
    return (
      <div className={styles.modal}>
        <div className={styles.close}>
          <button
            onClick={() => {
              this.props.handleClose();
            }}
          >
            x
          </button>
        </div>
        <img src={image} alt=""></img>
        <h1>{name}</h1>
        <p>{description}</p>
        <p>Price: {price}$</p>
        <p>Quantity: {quantity}</p>
        <button>Add to Cart</button>
      </div>
    );
  }
}
