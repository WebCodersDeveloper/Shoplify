import React from 'react'
import "./main.css"
import img1 from './images/header.png';
import img2 from './images/Button.png';
import img3 from './images/mahsulot1.png';
import img4 from './images/narx.png'
import img5 from './images/mahsulot2.png';
import img6 from './images/mahsulot3.png';
import img7 from './images/mahsulot4.png';
import img8 from './images/mahsulot5.png';
import img9 from './images/prilojeniya.png';
import img10 from './images/prilojeniya2.png';
import img11 from './images/ctati.png';
import img12 from './images/ctati2.png';
import img13 from './images/ctati3.png';
import img14 from './images/footer.png';



 


export default function Main() {
  return (
    <div className='main'>
      <img className='img-1' src= {img1} alt="" />
      <div className='container'>
        <p className='p-1'>Акции</p>
        <img className='img-2' src={img2} alt="" />
        <div className='mahsulotlar'>
        <div className='mahsulot-1'>
          <img src={img3} alt />
          <img className='img-4' src={img4}  alt="" />
          <div className='like'>
          <label class="container">
          <input type="checkbox" />
          <svg id="Layer_1" version="1.0" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M16.4,4C14.6,4,13,4.9,12,6.3C11,4.9,9.4,4,7.6,4C4.5,4,2,6.5,2,9.6C2,14,12,22,12,22s10-8,10-12.4C22,6.5,19.5,4,16.4,4z"></path></svg>
          </label>
          </div>
          <p className ='p-2'>Г/Ц Блинчики с мясом вес, <br /> Россия</p>
          <div class="rating">
           <div>
              <input type="radio" id="star5" name="rating" defaultValue={5} />
              <label htmlFor="star5" />
              <input type="radio" id="star4" name="rating" defaultValue={4} />
              <label htmlFor="star4" />
              <input type="radio" id="star3" name="rating" defaultValue={3} />
              <label htmlFor="star3" />
              <input type="radio" id="star2" name="rating" defaultValue={2} />
              <label htmlFor="star2" />
              <input type="radio" id="star1" name="rating" defaultValue={1} />
              <label htmlFor="star1" />
            </div>
          </div>
          <button className='mahsulot-button'>В корзину</button>
        </div>
        <div className='mahsulot-1'>
          <img src={img5} alt />
          <div className='like1'>
          <label class="container">
          <input type="checkbox" />
          <svg id="Layer_1" version="1.0" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M16.4,4C14.6,4,13,4.9,12,6.3C11,4.9,9.4,4,7.6,4C4.5,4,2,6.5,2,9.6C2,14,12,22,12,22s10-8,10-12.4C22,6.5,19.5,4,16.4,4z"></path></svg>
          </label>
          </div>
          <img className='img-4' src={img4}  alt="" />
          <p className ='p-2'>Г/Ц Блинчики с мясом вес, <br /> Россия</p>
          <div class="rating1">
           <div>
              <input className='input1' type="radio" id="star5" name="rating1" defaultValue={5} />
              <label className='label1' htmlFor="star5" />
              <input className='input1' type="radio" id="star4" name="rating1" defaultValue={4} />
              <label className='label1' htmlFor="star4" />
              <input className='input1' type="radio" id="star3" name="rating1" defaultValue={3} />
              <label className='label1' htmlFor="star3" />
              <input className='input1' type="radio" id="star2" name="rating1" defaultValue={2} />
              <label className='label1' htmlFor="star2" />
              <input className='input1' type="radio" id="star1" name="rating1" defaultValue={1} />
              <label className='label1' htmlFor="star1" />
            </div>
          </div>
          <button className='mahsulot-button'>В корзину</button>
        </div>
        <div className='mahsulot-1'>
          <img src={img6} alt />
          <div className='like1'>
          <label class="container">
          <input type="checkbox" />
          <svg id="Layer_1" version="1.0" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M16.4,4C14.6,4,13,4.9,12,6.3C11,4.9,9.4,4,7.6,4C4.5,4,2,6.5,2,9.6C2,14,12,22,12,22s10-8,10-12.4C22,6.5,19.5,4,16.4,4z"></path></svg>
          </label>
          </div>
          <img className='img-4' src={img4}  alt="" />
          <p className ='p-2'>Г/Ц Блинчики с мясом вес, <br /> Россия</p>
          <div class="rating">
           <div>
              <input type="radio" id="star5" name="rating" defaultValue={5} />
              <label htmlFor="star5" />
              <input type="radio" id="star4" name="rating" defaultValue={4} />
              <label htmlFor="star4" />
              <input type="radio" id="star3" name="rating" defaultValue={3} />
              <label htmlFor="star3" />
              <input type="radio" id="star2" name="rating" defaultValue={2} />
              <label htmlFor="star2" />
              <input type="radio" id="star1" name="rating" defaultValue={1} />
              <label htmlFor="star1" />
            </div>
          </div>
          <button className='mahsulot-button'>В корзину</button>
        </div>
        <div className='mahsulot-1'>
          <img src={img6} alt />
          <div className='like1'>
          <label class="container">
          <input type="checkbox" />
          <svg id="Layer_1" version="1.0" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M16.4,4C14.6,4,13,4.9,12,6.3C11,4.9,9.4,4,7.6,4C4.5,4,2,6.5,2,9.6C2,14,12,22,12,22s10-8,10-12.4C22,6.5,19.5,4,16.4,4z"></path></svg>
          </label>
          </div>
          <img className='img-4' src={img4}  alt="" />
          <p className ='p-2'>Г/Ц Блинчики с мясом вес, <br /> Россия</p>
          <div class="rating">
           <div>
              <input type="radio" id="star5" name="rating" defaultValue={5} />
              <label htmlFor="star5" />
              <input type="radio" id="star4" name="rating" defaultValue={4} />
              <label htmlFor="star4" />
              <input type="radio" id="star3" name="rating" defaultValue={3} />
              <label htmlFor="star3" />
              <input type="radio" id="star2" name="rating" defaultValue={2} />
              <label htmlFor="star2" />
              <input type="radio" id="star1" name="rating" defaultValue={1} />
              <label htmlFor="star1" />
            </div>
          </div>
          <button className='mahsulot-button'>В корзину</button>
        </div>
        <div>
        </div>
        </div>
        <p className='novinki'>Новинки</p>
        <img className='img-2' src={img2} alt="" />
        <div className='mahsulotlar-2'>
        <div className='mahsulot-1'>
          <img src={img7} alt />
          <div className='like1'>
          <label class="container">
          <input type="checkbox" />
          <svg id="Layer_1" version="1.0" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M16.4,4C14.6,4,13,4.9,12,6.3C11,4.9,9.4,4,7.6,4C4.5,4,2,6.5,2,9.6C2,14,12,22,12,22s10-8,10-12.4C22,6.5,19.5,4,16.4,4z"></path></svg>
          </label>
          </div>
          <img className='img-4' src={img4}  alt="" />
          <p className ='p-2'>Г/Ц Блинчики с мясом вес, <br /> Россия</p>
          <div class="rating">
           <div>
              <input type="radio" id="star5" name="rating" defaultValue={5} />
              <label htmlFor="star5" />
              <input type="radio" id="star4" name="rating" defaultValue={4} />
              <label htmlFor="star4" />
              <input type="radio" id="star3" name="rating" defaultValue={3} />
              <label htmlFor="star3" />
              <input type="radio" id="star2" name="rating" defaultValue={2} />
              <label htmlFor="star2" />
              <input type="radio" id="star1" name="rating" defaultValue={1} />
              <label htmlFor="star1" />
            </div>
          </div>
          <button className='mahsulot-button'>В корзину</button>
        </div>
        <div className='mahsulot-1'>
          <img src={img6} alt />
          <div className='like1'>
          <label class="container">
          <input type="checkbox" />
          <svg id="Layer_1" version="1.0" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M16.4,4C14.6,4,13,4.9,12,6.3C11,4.9,9.4,4,7.6,4C4.5,4,2,6.5,2,9.6C2,14,12,22,12,22s10-8,10-12.4C22,6.5,19.5,4,16.4,4z"></path></svg>
          </label>
          </div>
          <img className='img-4' src={img4}  alt="" />
          <p className ='p-2'>Г/Ц Блинчики с мясом вес, <br /> Россия</p>
          <div class="rating">
           <div>
              <input type="radio" id="star5" name="rating" defaultValue={5} />
              <label htmlFor="star5" />
              <input type="radio" id="star4" name="rating" defaultValue={4} />
              <label htmlFor="star4" />
              <input type="radio" id="star3" name="rating" defaultValue={3} />
              <label htmlFor="star3" />
              <input type="radio" id="star2" name="rating" defaultValue={2} />
              <label htmlFor="star2" />
              <input type="radio" id="star1" name="rating" defaultValue={1} />
              <label htmlFor="star1" />
            </div>
          </div>
          <button className='mahsulot-button'>В корзину</button>
        </div>
        <div className='mahsulot-1'>
          <img src={img6} alt />
          <div className='like1'>
          <label class="container">
          <input type="checkbox" />
          <svg id="Layer_1" version="1.0" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M16.4,4C14.6,4,13,4.9,12,6.3C11,4.9,9.4,4,7.6,4C4.5,4,2,6.5,2,9.6C2,14,12,22,12,22s10-8,10-12.4C22,6.5,19.5,4,16.4,4z"></path></svg>
          </label>
          </div>
          <img className='img-4' src={img4}  alt="" />
          <p className ='p-2'>Г/Ц Блинчики с мясом вес, <br /> Россия</p>
          <div class="rating">
           <div>
              <input type="radio" id="star5" name="rating" defaultValue={5} />
              <label htmlFor="star5" />
              <input type="radio" id="star4" name="rating" defaultValue={4} />
              <label htmlFor="star4" />
              <input type="radio" id="star3" name="rating" defaultValue={3} />
              <label htmlFor="star3" />
              <input type="radio" id="star2" name="rating" defaultValue={2} />
              <label htmlFor="star2" />
              <input type="radio" id="star1" name="rating" defaultValue={1} />
              <label htmlFor="star1" />
            </div>
          </div>
          <button className='mahsulot-button'>В корзину</button>
        </div>
        <div className='mahsulot-1'>
          <img src={img5} alt />
          <div className='like1'>
          <label class="container">
          <input type="checkbox" />
          <svg id="Layer_1" version="1.0" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M16.4,4C14.6,4,13,4.9,12,6.3C11,4.9,9.4,4,7.6,4C4.5,4,2,6.5,2,9.6C2,14,12,22,12,22s10-8,10-12.4C22,6.5,19.5,4,16.4,4z"></path></svg>
          </label>
          </div>
          <img className='img-4' src={img4}  alt="" />
          <p className ='p-2'>Г/Ц Блинчики с мясом вес, <br /> Россия</p>
          <div class="rating">
           <div>
              <input type="radio" id="star5" name="rating" defaultValue={5} />
              <label htmlFor="star5" />
              <input type="radio" id="star4" name="rating" defaultValue={4} />
              <label htmlFor="star4" />
              <input type="radio" id="star3" name="rating" defaultValue={3} />
              <label htmlFor="star3" />
              <input type="radio" id="star2" name="rating" defaultValue={2} />
              <label htmlFor="star2" />
              <input type="radio" id="star1" name="rating" defaultValue={1} />
              <label htmlFor="star1" />
            </div>
          </div>
          <button className='mahsulot-button'>В корзину</button>
        </div>
        </div>
        <p className='ranshi'>Покупали раньше</p>
        <img className='img-2' src={img2} alt="" />
        <div className='mahsulotlar-3'>
        <div className='mahsulot-1'>
          <img src={img8} alt />
          <div className='like1'>
          <label class="container">
          <input type="checkbox" />
          <svg id="Layer_1" version="1.0" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M16.4,4C14.6,4,13,4.9,12,6.3C11,4.9,9.4,4,7.6,4C4.5,4,2,6.5,2,9.6C2,14,12,22,12,22s10-8,10-12.4C22,6.5,19.5,4,16.4,4z"></path></svg>
          </label>
          </div>
          <img className='img-4' src={img4}  alt="" />
          <p className ='p-2'>Г/Ц Блинчики с мясом вес, <br /> Россия</p>
          <div class="rating">
           <div>
              <input type="radio" id="star5" name="rating" defaultValue={5} />
              <label htmlFor="star5" />
              <input type="radio" id="star4" name="rating" defaultValue={4} />
              <label htmlFor="star4" />
              <input type="radio" id="star3" name="rating" defaultValue={3} />
              <label htmlFor="star3" />
              <input type="radio" id="star2" name="rating" defaultValue={2} />
              <label htmlFor="star2" />
              <input type="radio" id="star1" name="rating" defaultValue={1} />
              <label htmlFor="star1" />
            </div>
          </div>
          <button className='mahsulot-button'>В корзину</button>
        </div>
        <div className='mahsulot-1'>
          <img src={img6} alt />
          <div className='like1'>
          <label class="container">
          <input type="checkbox" />
          <svg id="Layer_1" version="1.0" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M16.4,4C14.6,4,13,4.9,12,6.3C11,4.9,9.4,4,7.6,4C4.5,4,2,6.5,2,9.6C2,14,12,22,12,22s10-8,10-12.4C22,6.5,19.5,4,16.4,4z"></path></svg>
          </label>
          </div>
          <img className='img-4' src={img4}  alt="" />
          <p className ='p-2'>Г/Ц Блинчики с мясом вес, <br /> Россия</p>
          <div class="rating">
           <div>
              <input type="radio" id="star5" name="rating" defaultValue={5} />
              <label htmlFor="star5" />
              <input type="radio" id="star4" name="rating" defaultValue={4} />
              <label htmlFor="star4" />
              <input type="radio" id="star3" name="rating" defaultValue={3} />
              <label htmlFor="star3" />
              <input type="radio" id="star2" name="rating" defaultValue={2} />
              <label htmlFor="star2" />
              <input type="radio" id="star1" name="rating" defaultValue={1} />
              <label htmlFor="star1" />
            </div>
          </div>
          <button className='mahsulot-button'>В корзину</button>
        </div>
        <div className='mahsulot-1'>
          <img src={img7} alt />
          <div className='like1'>
          <label class="container">
          <input type="checkbox" />
          <svg id="Layer_1" version="1.0" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M16.4,4C14.6,4,13,4.9,12,6.3C11,4.9,9.4,4,7.6,4C4.5,4,2,6.5,2,9.6C2,14,12,22,12,22s10-8,10-12.4C22,6.5,19.5,4,16.4,4z"></path></svg>
          </label>
          </div>
          <img className='img-4' src={img4}  alt="" />
          <p className ='p-2'>Г/Ц Блинчики с мясом вес, <br /> Россия</p>
          <div class="rating">
           <div>
              <input type="radio" id="star5" name="rating" defaultValue={5} />
              <label htmlFor="star5" />
              <input type="radio" id="star4" name="rating" defaultValue={4} />
              <label htmlFor="star4" />
              <input type="radio" id="star3" name="rating" defaultValue={3} />
              <label htmlFor="star3" />
              <input type="radio" id="star2" name="rating" defaultValue={2} />
              <label htmlFor="star2" />
              <input type="radio" id="star1" name="rating" defaultValue={1} />
              <label htmlFor="star1" />
            </div>
          </div>
          <button className='mahsulot-button'>В корзину</button>
        </div>
        <div className='mahsulot-1'>
          <img src={img5} alt />
          <div className='like1'>
          <label class="container">
          <input type="checkbox" />
          <svg id="Layer_1" version="1.0" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M16.4,4C14.6,4,13,4.9,12,6.3C11,4.9,9.4,4,7.6,4C4.5,4,2,6.5,2,9.6C2,14,12,22,12,22s10-8,10-12.4C22,6.5,19.5,4,16.4,4z"></path></svg>
          </label>
          </div>
          <img className='img-4' src={img4}  alt="" />
          <p className ='p-2'>Г/Ц Блинчики с мясом вес, <br /> Россия</p>
          <div class="rating">
           <div>
              <input type="radio" id="star5" name="rating" defaultValue={5} />
              <label htmlFor="star5" />
              <input type="radio" id="star4" name="rating" defaultValue={4} />
              <label htmlFor="star4" />
              <input type="radio" id="star3" name="rating" defaultValue={3} />
              <label htmlFor="star3" />
              <input type="radio" id="star2" name="rating" defaultValue={2} />
              <label htmlFor="star2" />
              <input type="radio" id="star1" name="rating" defaultValue={1} />
              <label htmlFor="star1" />
            </div>
          </div>
          <button className='mahsulot-button'>В корзину</button>
        </div>
        </div>
        <p className='pridlojeniya'>Специальные предложения</p>
        <div className='prilojeniya-div'>
          <img src={img9} alt="" />
          <img src={img10} alt="" />
        </div>
        <p className='magazin'>Наши магазины</p>
        <iframe className='xarita' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d568.6334870289817!2d69.20355991888844!3d41.285815701360804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bad0a15e3d9%3A0x113a4202c090ade9!2sTechjobs%20Recruiting%20company!5e1!3m2!1suz!2s!4v1699455714287!5m2!1suz!2s" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        <p className='ctati'>Статьи</p>
        <img className='img-2' src={img2} alt="" /> 
        <div className='ctati-div'>
          <div className='ctati-div1'>
            <img src={img11} alt="" />
            <p className='ctati-p'>05.03.2021</p>
            <p className='ctati-p1'>Режим использования масок и <br /> перчаток на территории магазинов</p>
            <p className='ctati-p2'>Подробная информация о режимах <br /> использования масок и перчаток на <br /> территории магазинов "ЛЕНТА". Информация <br /> обновляется каждый будний день.</p>
            <button className='ctati-button'>Подробнее</button>
          </div>
          <div className='ctati-div1'>
            <img src={img12} alt="" />
            <p className='ctati-p'>05.03.2021</p>
            <p className='ctati-p1'>Режим использования масок и <br /> перчаток на территории магазинов</p>
            <p className='ctati-p2'>Подробная информация о режимах <br /> использования масок и перчаток на <br /> территории магазинов "ЛЕНТА". Информация <br /> обновляется каждый будний день.</p>
            <button className='ctati-button'>Подробнее</button>
          </div>
          <div className='ctati-div1'>
            <img src={img13} alt="" />
            <p className='ctati-p'>05.03.2021</p>
            <p className='ctati-p1'>Режим использования масок и <br /> перчаток на территории магазинов</p>
            <p className='ctati-p2'>Подробная информация о режимах <br /> использования масок и перчаток на <br /> территории магазинов "ЛЕНТА". Информация <br /> обновляется каждый будний день.</p>
            <button className='ctati-button'>Подробнее</button>
          </div>
        </div>
      </div>
        <img className='footer' src={img14} alt="" />
    </div>
  )
}
