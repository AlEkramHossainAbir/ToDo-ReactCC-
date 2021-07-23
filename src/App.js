import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ToDo from "./components/ToDo";

import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {

  return (
    <div>
      <Header title="To Do List- React Practice"></Header>
      <ToDo title="To Do List- React Practice" ></ToDo>
      <Footer></Footer>
    </div>
  );
}
