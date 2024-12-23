import React from "react";

import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import { Route, Routes } from "react-router-dom";

import "./scss/app.scss";

export const SearchContext = React.createContext();

function App(){

  const [searchValue,setSearchValue]=React.useState('');// из app.js передаем данные в header
  
  return(
    <div className="App">
    <div className="wrapper">
   <SearchContext.Provider value={{searchValue, setSearchValue}}>
   <Header/>
    <div className="content">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </div>
   </SearchContext.Provider>
  </div>
  </div>
  );
  
  }

export default App;
