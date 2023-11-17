import React from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import About from "./About";
import Navbar from "./Navbar";

function App() {
    return (
      <div>
        <Navbar />
        <Route path="/about">
          <About />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Home />;
        </Route>
      </div>
    );
  }

export default App