import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import Geed from "./Pages/Geed";
import Selector from "./Pages/Selector";
import Recycling from "./Pages/Recycling";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/selector" element={<Selector />} />
        <Route path="/recycling" element={<Recycling />} />
        <Route path="/geed" element={<Geed />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
