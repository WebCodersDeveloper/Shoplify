import { Navigate, Route, Routes } from "react-router-dom"
import React, { useEffect, useState } from "react";
import Header from "./components/Header-bar/Header"
import Main from "./components/Main/Main"
import Like from "./components/Like/Like"
import AddProduct from "./components/Add/AddProduct"
import Buy from "./components/Buy/Buy"
import Catalog from "./components/catalog/Catalog"
import { uid } from "uid";
import Footer from "./components/Footer/Footer";
import { useGlobalContext } from "./context";
import { flushSync } from "react-dom";
import Single from "./components/Single/Single";




function App() {
  const id = uid();
  const img = "https://picsum.photos/300/200";
  const {getLocalStorage} = useGlobalContext();
  


  const [item, setItem] = useState(0);

  let num = 1;
  num = 3


  const [price, setPrice] = useState("");
  const [category, setCategory] = useState(""); 
  const [product, setProduct] = useState(getLocalStorage("items"));
  const [buyer, setBuyer] = useState(getLocalStorage("buyer"));

  const[count, setCount] = useState(0)


  const removeItem = (id) => {
    setProduct(product.filter((item) => item.id !== id));
  };

  const plusCount = (id) => {
    buyer.map((item) =>{
      if (item.id === id) {
        // item.amount + 1
        console.log(item);
      }
      
    });
  }
  const single = (id) => {
    product.map((item) =>{
      if (item.id === id) {
        console.log(item);
        
      }
      
    });
  }
  const creatProduct = (e) => {
    e.preventDefault();
    const newItem = {
      id: id,
      image: img,
      name: item,
      narx: price,
      category: category,
      amount: 1,
    };

    setProduct([...product, newItem]);
    setItem("");
    setPrice("");
    setCategory("");
  };
  const buyProduct = (id) => {
    const buyItem = product.find((item) => item.id === id);
    setBuyer([...buyer, buyItem]);
    console.log(buyItem);
  }

    useEffect(() => {
        localStorage.setItem("items", JSON.stringify(product));
        localStorage.setItem("buyer", JSON.stringify(buyer));
      }, [product,buyer]);


  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main product={product} buyProduct={buyProduct} single={single}/>} />
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
        <Route path="/single" element={<Single />} />
        <Route path="/buypage" element={<Buy buyer={buyer} count={count} plusCount={plusCount}/>} />
        <Route  path="/catalog" element={<Catalog />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
