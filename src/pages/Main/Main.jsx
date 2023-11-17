import React from 'react'
import "./main.scss";
import { useGlobalContext } from '../../context';

export default function Main() {
  const {product,buyProduct,single} = useGlobalContext();
  return (
    <>
      <div className="content">
        {product.map((item) => {
          return(
            <div className="card" onClick={() => single(item.id)}>
              <img src={item.image} alt="" />
              <div className="txt">
                <h3>{item.name}</h3>
                <b>{item.narx} usd</b>
                <p>Lorem ipsum dolor sit amet,  adipisicing elit. Tempora, nulla?</p>
                <h6>{item.category}</h6>
                <div className="btn">
                  <button className='heart'><i class="fa-solid fa-heart"></i></button>
                  <button className='shopping' onClick={() => buyProduct(item.id)}><i class="fa-solid fa-cart-shopping"></i></button>
                </div>
              </div>
            </div>            
          )
        })}
      </div>
    </>
  );
}
