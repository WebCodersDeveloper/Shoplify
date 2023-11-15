import React from 'react'

export default function Buy({buyer,count,plusCount}) {
  return (
    <>
      <div className="content">
        {buyer.map((item) => {
          return(
            <div className="card" id={item.id}>
              <img src={item.image} alt="" />
              <div className="txt">
                <h3>{item.name}</h3>
                <b>{item.narx} usd</b>
                <p>Lorem ipsum dolor sit amet,  adipisicing elit. Tempora, nulla?</p>
                <h6>{item.category}</h6>
                <div className="btn">
                  <button onClick={() => plusCount(item.id)}><i class="fa-solid fa-minus"></i></button>
                  <span>{item.amount}</span>
                  <button><i class="fa-solid fa-plus"></i></button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
