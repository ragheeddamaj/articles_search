import React from "react";
import { Article } from "../../interfaces/article";
import ListingItem from "./listing-item/listing-item";

interface IListing {
  data: Article[];
}

const Listing: React.FC<IListing> = ({ data }) => {
  return (
    <div>
      {data.map((item, index) => (
        <ListingItem key={index} article={item} />
      ))}
    </div>
  );
};

export default Listing;
