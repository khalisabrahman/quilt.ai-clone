import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./global/Navbar";
import Home from "./scenes/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
