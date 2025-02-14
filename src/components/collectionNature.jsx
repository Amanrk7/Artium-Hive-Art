import React from "react";
import ArtCard from "./ArtCard";

export function CollectionNature({ data }) {
  return (
    <div className="masonry-grid">
      {data.map((item, index) => (
        <div key={index} className="masonry-item">
          <ArtCard data={item} />
        </div>
      ))}
    </div>
  );
}