import { Route, Routes } from "react-router-dom"
import Header from "./components/Header-bar/Header"
import Main from "./components/Main/Main"
import Like from "./components/Like/Like"
import AddProduct from "./components/Add/AddProduct"
import Buy from "./components/Buy/Buy"
import Catalog from "./components/catalog/Catalog"




function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/like" element={<Like />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/buypage" element={<Buy />} />
        <Route  path="/catalog" element={<Catalog />} />
      </Routes>
      
    </>
  )
}

export default App
