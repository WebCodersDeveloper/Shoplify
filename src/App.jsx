import { Route, Routes } from "react-router-dom"
import React, { useEffect, useState } from "react";
import Header from "./components/Header-bar/Header"
import Main from "./components/Main/Main"
import Like from "./components/Like/Like"
import AddProduct from "./components/Add/AddProduct"
import Buy from "./components/Buy/Buy"
import Catalog from "./components/catalog/Catalog"
import { uid } from "uid";



const getLocalStorage = (key) => {
  return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : [];
};


function App() {
  const id = uid();
  const img = "https://picsum.photos/300/200";

  const [item, setItem] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState(""); 
  const [product, setProduct] = useState(getLocalStorage("items"));

  const creatProduct = (e) => {
    e.preventDefault();
    const newItem = {
      id: id,
      image: img,
      name: item,
      narx: price,
      category: category,
    };

    setProduct([...product, newItem]);
    setItem("");
    setPrice("");
    setCategory("");
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(product));
  }, [product]);

  const removeItem = (id) => {
    setProduct(product.filter((item) => item.id !== id));
  };



  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/like" element={<Like />} />
        <Route
          path="/add"
          element={
            <AddProduct
              name={item}
              setName={setItem}
              price={price}
              setPrice={setPrice}
              category={category}
              setCategory={setCategory} 
              creatProduct={creatProduct}
              product={product}
              removeItem={removeItem}
            />
          }
        />
        <Route path="/buypage" element={<Buy />} />
        <Route  path="/catalog" element={<Catalog />} />
      </Routes>
      
    </>
  )
}

export default App
