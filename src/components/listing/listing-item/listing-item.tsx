import React from "react";
import "./listing-item.css";
import { Article } from "../../../interfaces/article";
import { displayDate } from "../../../utils/date-utils";

interface IListingItem {
  article: Article;
}

const ListingItem: React.FC<IListingItem> = ({ article }) => {
  return (
    <div className="Listing-item">
      <h1 className="Item-title">{article.title}</h1>
      <span className="Item-date">
        {displayDate(article.post_date)}
      </span>
      <p className="Item-description">{article.description}</p>
    </div>
  );
};

export default ListingItem;
