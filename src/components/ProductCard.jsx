import React, { Component } from 'react';

export class ProductCard extends Component {
  render() {
    return(
    <div className="product-card" >
      <img src='https://user-images.githubusercontent.com/60890508/96071170-2b8ccc00-0e67-11eb-8613-071b328a064b.jpg'  className="width-product" />
      <p className="price">24345</p>
      <p className="name">Elixir ojos</p>
      <button className="btn-increaseProduct" type="button" >+</button>
        <span>5</span>
      <button className="btn-decreaseProduct" type="button" >-</button>
      <button className="btn-delete" type="button">
        <img src="https://cdn1.iconfinder.com/data/icons/toolbar-signs/512/trash-512.png" alt="eliminar" />
      </button>
   </div>
      
    );
  }

}
export default ProductCard;