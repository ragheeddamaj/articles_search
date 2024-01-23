import React from "react";
import { Article } from "../../interfaces/article";
import ListingItem from "./listing-item/listing-item";

interface IListing {
  data: Article[];
  searchKey: string;
}

const Listing: React.FC<IListing> = ({ data, searchKey = "" }) => {
  return (
    <div>
      {data.map((item, index) => (
        <ListingItem key={index} searchKey={searchKey} article={item} />
      ))}
    </div>
  );
};

export default Listing;
