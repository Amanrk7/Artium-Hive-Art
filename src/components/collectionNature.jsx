import React from "react";
import ArtCard from "./ArtCard";

export function CollectionNature({ data }) {
  return (
    <>
      {data.map((item, index) => (
        <div id="main1">
          <ArtCard key={index} data={item} />
        </div>
      ))}
    </>
  );
}
