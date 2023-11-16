import { createContext, useContext } from "react";
import { uid } from "uid";
import React, { useEffect, useState } from "react";

const StoresContext = createContext();



const ShopProvider = ({children}) => {

    const getLocalStorage = (key) => {
        return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : [];
      };
      const id = uid();
      const img = "https://picsum.photos/300/200";
         
    
      const [item, setItem] = useState(0);
    
    
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
    
    return(
        <StoresContext.Provider value={{
            getLocalStorage,
            buyProduct,
            removeItem,
            creatProduct,
            single,
            plusCount,
            count,
            setCount,
            buyer,
            setBuyer,
            product,
            setProduct,
            category,
            setCategory,
            price,
            setPrice,
            item,
            setItem,
            img,
            id

        }}>
            {children}
        </StoresContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(StoresContext)
}

export {StoresContext, ShopProvider}



























// import { createContext, useContext } from "react";

// const AppContext = createContext();

// const AppProvider = ({children}) => {
//     const getLocalStorage = (key) => {
//         return localStorage.getItem(key)
//           ? JSON.parse(localStorage.getItem(key))
//           : [];
//       };
//       const getLocalStorageUser = () => {
//         return localStorage.getItem('user')
//           ? JSON.parse(localStorage.getItem('user'))
//           : false;
//       };
//       return (
//         <AppContext.Provider value={{
//             getLocalStorage,
//             getLocalStorageUser,
//         }}>
//             {children}
//         </AppContext.Provider>
//       )
// }

// export const  useGlobalContext = () => {
//     return useContext(AppContext)
// }
// export {AppContext , AppProvider}