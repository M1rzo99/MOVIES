import { lazy, Suspense } from "react";
import React from "react";
import Navbar from "../navber/navbar";
import { Route, Routes } from "react-router-dom";

const NotFoundPage = lazy(() => import("../../pages/home-page"));
const HomePage = lazy(() => import("../../pages/home-page"));
const TrandingPage = lazy(() => import("../../pages/tranding-page"));
const PopularPage = lazy(() => import("../../pages/popular-page"));
const DeteliedPage = lazy(() => import("../../pages/detelied-page"));

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tranding" element={<TrandingPage />} />
          <Route path="/movie/:movieId" element={<DeteliedPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/popular" element={<PopularPage />} />
        </Routes>
      </Suspense>
    </div> // /movie/: dinamik id chiqarish un bajaramiz
  );
};

export default App;
