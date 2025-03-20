import React from "react";
import Navbar from "../navber/navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/home-page";
import DeteliedPage from "../../pages/detelied-page";
import NotFoundPage from "../../pages/not-found-page";

import PopularPage from "../../pages/popular-page";
import TrandingPage from "../../pages/tranding-page";
const App = () => {
  // const movieServie = new MovieService()
  // movieServie.getAllPopular().then(data=>console.log(data));
  // movieServie.getAllTranding().then(data=>console.log(data))
  // movieServie.getAllDetelies(12).then(data=>console.log(data))

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tranding" element={<TrandingPage />} />
        <Route path="/movie/:movieId" element={<DeteliedPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/popular" element={<PopularPage />} />
      </Routes>
    </div> // /movie/: dinamik id chiqarish un bajaramiz
  );
};

export default App;
