import Home from "./pages/Home";
import ProductList from "./pages/ProductList"
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { Routes, Route } from "react-router";

function App() {
  return <Routes>
    <Route exact path="/" element={<Home />}/>
    <Route exact path="Sigin" element={<Login />}/>
    <Route exact path="Sigup" element={<Register />}/>
    <Route exact path="Products" element={<ProductList />}/>
    <Route exact path="/product" element={<Product />}/>
    <Route exact path="/cart" element={<Cart />}/>

  </Routes>;
}

export default App;
