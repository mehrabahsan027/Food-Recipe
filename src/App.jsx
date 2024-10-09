import React from "react";
import Home from "./components/Home";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import SingleRecipe from "./components/SingleRecipe";
import Category from "./components/Category";

import SearchElements from './components/SearchElements'
import NotFound from "./components/NotFound";
function App() {
  return (
    <div className="min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:idMeal" element={<SingleRecipe/>}/>
          <Route path="/category/:area" element={<Category/>}/>
          <Route path="/search/:searchFood" element={<SearchElements/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
