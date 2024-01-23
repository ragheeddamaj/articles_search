import React from "react";
import "./listing-item.css";
import { Article } from "../../../interfaces/article";
import { displayDate } from "../../../utils/date-utils";
import { Highlighter } from "react-highlight-string";

interface IListingItem {
  article: Article;
  searchKey: string;
}

const ListingItem: React.FC<IListingItem> = ({ article, searchKey = '' }) => {
  return (
    <div className="Listing-item">
      <h1 className="Item-title">
        <Highlighter text={article.title} substrings={[searchKey]} />
      </h1>
      <span className="Item-date">{displayDate(article.post_date)}</span>
      <p className="Item-description">
        <Highlighter text={article.description} substrings={[searchKey]} />
      </p>
    </div>
  );
};

export default ListingItem;
