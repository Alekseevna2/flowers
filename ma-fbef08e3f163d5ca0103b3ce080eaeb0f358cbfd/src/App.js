import React from "react";
import "./scss/app.scss";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import { Route, Routes } from "react-router-dom";


function App(){
  const [searchValue,setSearchValue]=React.useState('');// из app.js передаем данные в header
  return(
    <div className="wrapper">
      <Header searchValue={searchValue} setSearchValue={setSearchValue}/>
      <div className="content">
      <div className="container">
        <Routes> /*маршутизация
          <Route path="/" element={<Home searchValue={searchValue}/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </div>
      </div>
    </div>
  );
  }
export default App;
