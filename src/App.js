import React, { Component } from "react";
import ProductList from "./components/ProductList";

export default class App extends Component {
  render() {
    return (
      <div
        style={{
          padding: "0px 100px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Shoes Shop</h1>
        <ProductList />
      </div>
    );
  }
}
