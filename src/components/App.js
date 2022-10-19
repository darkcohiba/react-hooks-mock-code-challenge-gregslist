import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [listings, setListings] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((response) => response.json())
      .then(data => setListings(data))
  }, []);
  console.log(searchTerm)

  const searchListings = listings.filter((listing) => 
    listing.description.toLowerCase().includes(searchTerm.toLowerCase())
  )


  return (
    <div className="app">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <ListingsContainer searchTerm={searchTerm} listings={searchListings}/>
    </div>
  );
}

export default App;
