import React, { useContext } from "react";
import { WishlistContext } from "../../context/wishlistContext";
import "./index.scss";

function Wishlist() {
  const { wishlist, addWishlist } = useContext(WishlistContext);
  console.log(wishlist);
  return (
    <div>
      {wishlist.length ? (
        <div className="wishlistPage">
          { 
            wishlist.map((x) => (
              <ul key={x._id} className="page">
                <img src={x.image} />
                <li className="name">{x.name}</li>
                <li className="author">{x.author}</li>
                <li onClick={() => addWishlist(x)} className="wishlist">
                  <i className="fa-regular fa-heart"></i>
                </li>
              </ul>
            ))}
        </div>
      ) : (
        <h1>Wishlistde mehsul yoxdur </h1>
      )}
    </div>
  );
}

export default Wishlist;
