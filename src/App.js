import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AddMemory from "./pages/AddMemory";
import YearView from "./pages/YearView";
import MemoryView from "./pages/MemoryView";

import Navbar from "./components/Navbar";

function App() {

  return (

    <BrowserRouter>

      <Navbar/>

      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/add" element={<AddMemory/>}/>
        <Route path="/year/:year" element={<YearView/>}/>
        <Route path="/memory/:id" element={<MemoryView/>}/>

      </Routes>

    </BrowserRouter>

  )

}

export default App;