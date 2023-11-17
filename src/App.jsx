import { RouterProvider } from "react-router-dom"
import Header from "./pages/Header-bar/Header"

import Footer from "./pages/Footer/Footer";
import { useGlobalContext } from "./context";
import router from "./components/CB";




function App() {
  
  return (
    <>
      <Header />
      <RouterProvider router={router}/>
      <Footer />
    </>
  )
}

export default App
