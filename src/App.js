import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./layout/header/Header";
import Home from "./pages/Home";
import Artist from "./pages/Artist";
import Album from "./pages/Album";
import Format from "./pages/Format";
import Genre from "./pages/Genre";
import Nav from "./nav/Nav";
import Footer from "./layout/footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/artist" component={Artist} />
        <Route path="/album" component={Album} />
        <Route path="/format" component={Format} />
        <Route path="/genre" component={Genre} />
        <Nav />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
