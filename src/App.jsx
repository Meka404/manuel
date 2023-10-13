import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Balde } from "./pages/Balde";
import { Tele } from "./pages/Tele";
import { Principal } from "./pages/Principal";
import { Navigation } from "./components/Navigation";
import { Navigation2 } from "./components/Navigation2";
import { Ambiental } from "./pages/Ambiental";
import { Topografia } from "./pages/Topografia";
import { Proyectos } from "./pages/Proyectos";
import { Nosotros } from "./pages/Nosotros";
import { Ubicanos } from "./pages/Ubicanos";

import React from 'react'

function App() {
  return (
    <BrowserRouter>
    <Navigation></Navigation>
    <Navigation2></Navigation2>
      <Routes>
        <Route path="/balde" element={<Balde/>}/>
        <Route path="/tele" element={<Tele/>}/>
        <Route path="/" element={<Principal/>}/>
        <Route path="/ambiental" element={<Ambiental/>}/>
        <Route path="/topografia" element={<Topografia/>}/>
        <Route path="/ubicanos" element={<Ubicanos/>}/>
        <Route path="/nosotros" element={<Nosotros/>}/>
        <Route path="/proyectos" element={<Proyectos/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
