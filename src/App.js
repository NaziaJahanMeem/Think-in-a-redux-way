import React from "react";
import { Navbar } from "./components/navbar/Navbar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Posts } from "./pages/Posts";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/posts/:postId" element={<Posts />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
