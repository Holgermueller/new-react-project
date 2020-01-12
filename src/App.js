import React from "react";
import Header from "./layout/header/Header";
import Meter from "./form/Meter";
import Form from "./form/Form";
import Footer from "./layout/footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Meter />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
