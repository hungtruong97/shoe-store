import React, { Component } from "react";
import styles from "./ProductItem.module.css";

export default class ProductItem extends Component {
  render() {
    const { name, price, shortDescription, image } = this.props.item;
    return (
      <div className={styles.item}>
        <img src={image} alt=""></img>
        <h3>{name}</h3>
        <p>{shortDescription}</p>
        <p>{price}$</p>
        <button
          onClick={() => {
            this.props.setSelectedItem(this.props.item);
          }}
        >
          View Details
        </button>
        <button
          style={{ marginLeft: 10 }}
          onClick={() => {
            this.props.addToCart(this.props.item);
          }}
        >
          Add to Cart
        </button>
      </div>
    );
  }
}
