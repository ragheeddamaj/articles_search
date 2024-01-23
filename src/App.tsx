import React, { useEffect, useState } from "react";
import "./App.css";
import { Input } from "antd";
import Listing from "./components/listing/listing";
import articles_mock from "./mock/articles_mock";
import { Article } from "./interfaces/article";
import { Tweet } from "react-tweet";

const App: React.FC<{}> = () => {
  const [searchKeyState, setSearchKeyState] = useState<string>("");
  const [articlesState, setArticleState] = useState<Article[]>(articles_mock);
  useEffect(() => {
    const articlesFiltered = articles_mock.filter(
      (item) =>
        searchKeyState == "" ||
        (searchKeyState != "" &&
          (item.title.includes(searchKeyState) ||
            item.description.includes(searchKeyState)))
    );
    setArticleState(articlesFiltered);
  }, [searchKeyState]);

  return (
    <div className="App">
      <div className="Left-column">
        <h2>Search</h2>
        <Input
          placeholder="Search articles..."
          onChange={(e) => {
            setSearchKeyState(e.target.value);
          }}
        />
        <div className="Search">
          <b>{articlesState.length} Posts</b> were found
        </div>
        <Listing searchKey={searchKeyState} data={articlesState} />
      </div>
      <div className="Right-column">
        <Tweet id="1683920951807971329"  />
      </div>
    </div>
  );
};

export default App;
