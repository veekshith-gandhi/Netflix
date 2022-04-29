/** @format */

import Home from "./Pages/Home/index";
import "./app.scss";
import Watch from "./Pages/Watch";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Register from "./Pages/Register";
import Login from "./Pages/Login";

function App() {
  const user = true;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Register />} />
        <Route path="/register" element={!user ? <Register /> : <Home />} />
        <Route path="/login" element={!user ? <Login /> : <Home />} />
        {user && (
          <>
            <Route path="/movies" element={<Home type="Movies" />} />
            <Route path="/series" element={<Home type="Series" />} />
            <Route path="/watch" element={<Watch />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
