import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NoPage } from '../pages/404/NoPage';
import { Home } from '../pages/Home';
import { Regiones } from '../pages/Regiones';

export const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/elecciones" element={<Regiones />} />
      <Route path="*" element={<NoPage/>} />
     </Routes>
    </BrowserRouter>
  )
}
