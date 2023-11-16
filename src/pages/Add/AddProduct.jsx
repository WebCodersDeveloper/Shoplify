import React from "react";
import "../Add/addproduct.scss";

export default function AddProduct({
  name,
  setName,
  price,
  setPrice,
  category, 
  setCategory, 
  creatProduct,
  product,
  removeItem,
}) {
  return (
    <>
      <div className="container">
        <div className="newItem">
          <form action="" onSubmit={creatProduct}>
            <input
              type="text"
              placeholder="Название продукта"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="number"
              placeholder="Цена"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />

            <label class="select">
              <select
                value={category} 
                onChange={(e) => setCategory(e.target.value)} 
              >
                <option value="">Kategoriya</option>
                <option value="Sutli maxuslotlar">Молочные продукты</option>
                <option value="Ichimliklar">Напитки</option>
                <option value="Non mahsulotlari">Хлеб</option>
                <option value="Mevalar">Фрукты</option>
                <option value="Sabzavotlar">Овощи</option>
                <option value="Muzlatilgan mahsulotlar">Замороженные</option>
                <option value="Qandolat mahsulotlari">
                  Кондитерские изделия
                </option>
                <option value="Choy,Kofe mahsulotlar">Чай, Кофе</option>
                <option value="Oziq-ovqatlar">Бакалея</option>
                <option value="Parxez bob mahsulotlar">Здоровое питание</option>
                <option value="Uy hayvonlar uchun mahsulotlar">Зоотовары</option>
                <option value="Bolalar ovqati">Детское питание</option>
                <option value="Go'sht, kolbasa">Мясо, Колбаса</option>
                <option value="Nooziq-ovqat mahsulotlari">
                  Непродовольственные товары
                </option>
              </select>
            </label>

            <button disabled={!name || !price} onClick={creatProduct}>
              Добавить
            </button>
          </form>
        </div>
        <div className="itemList">
          {product.map((item) => {
            return (
              <div className="item" key={item.id}>
                <img src={item.image} alt="image" />
                <div className="txt">
                  <h3>{item.name}</h3>
                  <p>{item.narx} Сум</p>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Aliquam, excepturi nesciunt atque iure corrupti eligendi!
                  </p>
                  <div className="btn_cont">
                    <button
                      onClick={() => removeItem(item.id)}
                      className="trash_btn"
                    >
                      <i class="fa-sharp fa-regular fa-trash-can fa-beat-fade"></i>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
