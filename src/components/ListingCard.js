import React, { useState } from "react";

function ListingCard({ id, location, description, image}) {

  const [favorite, setFavorite] = useState(false);

  function handleFavorites() {
    setFavorite((currentFavorite) => !currentFavorite)
  }

  function handleDelete() {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    });
    
  }


  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={"description"} />
      </div>
      <div className="details">
        {favorite ? (
          <button onClick={handleFavorites} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleFavorites} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
