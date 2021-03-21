import React, { Component } from 'react';
import iconDelete from '../images/icon_delete.png'

export class ProductCard extends Component {
  render() {
    return(
    <>
    <div className="product-card d-flex p-2 mb-4" >

      <div className="w-100">
        <img src='https://user-images.githubusercontent.com/60890508/96071205-3f383280-0e67-11eb-844e-e1f5d65e11b2.jpg'  className="width-product" />
        <p className="price m-2">23415</p>
      </div>

      <div className="d-flex flex-column justify-content-center p-4">
        <h6>Energia vital limpiador</h6>
        <div className="d-flex align-items-center justify-content-center mt-3">
          <button className="btn-increaseProduct" type="button" >-</button>
            <span>1</span>
          <button className="btn-decreaseProduct" type="button" >+</button>
        </div>
      </div>

      <div>
        <button className="btn-delete" type="button">
          <img src={iconDelete} alt="eliminar" />
        </button>
      </div>

   </div>

       <div className="product-card d-flex p-2" >

      <div className="w-100">
        <img src='https://user-images.githubusercontent.com/60890508/96071187-33e50700-0e67-11eb-9ab7-2cbdafdabd00.jpg'  className="width-product" />
        <p className="price m-2">24345</p>
      </div>

      <div className="d-flex flex-column justify-content-center p-4">
        <h6>Elixir de ojos</h6>
        <div className="d-flex align-items-center justify-content-center mt-3">
          <button className="btn-increaseProduct" type="button" >-</button>
            <span>1</span>
          <button className="btn-decreaseProduct" type="button" >+</button>
        </div>
      </div>

      <div>
        <button className="btn-delete" type="button">
          <img src={iconDelete} alt="eliminar" />
        </button>
      </div>

   </div>

   </>
      
    );
  }

}
export default ProductCard;