import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Dashboard from "./pages/dashboard/Dashboard";
import Nav from "./components/nav/Nav";
import Footer from "./components/layout/footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/dashboard" component={Dashboard} />

        <Footer />
      </Router>
    </div>
  );
}

export default App;
