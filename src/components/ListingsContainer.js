import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings}) {

  console.log(listings)



  const listingsCards = listings.map(listing =>(
    <ListingCard 
      id={listing.id}
      key={listing.id}
      description={listing.description}
      image={listing.image}
      location={listing.location}
    />
  ))
  return (
    <main>
      <ul className="cards">
        {listingsCards}
      </ul>
    </main>
  );
}

export default ListingsContainer;
