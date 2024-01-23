import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Input } from "antd";
import Listing from "./components/listing/listing";
import articles_mock from "./mock/articles_mock";

function App() {
  return (
    <div className="App">
      <div className="Left-column">
        <h2>Search</h2>
        <Input placeholder="Search articles..." />
        <div className="Search">
          <b>10 Posts</b> were found
        </div>
        <Listing data={articles_mock}/>
      </div>
    </div>
  );
}

export default App;
