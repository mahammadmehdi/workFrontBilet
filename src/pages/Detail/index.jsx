import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { WishlistContext } from "../../context/wishlistContext";
import "./index.scss"

function Detail() {
  const [detailPage, setDetailPage] = useState([]);
  const {addWishlist} = useContext(WishlistContext)

  const { id } = useParams();
  useEffect(() => {
    fetch("http://localhost:3000/" + id)
      .then((res) => res.json())
      .then((data) => setDetailPage(data));
  }, []);

  return (
    <div className="detailPage">
      <ul className="page">
        <img className="image" src={detailPage.image}  />
        <li className="name">{detailPage.name}</li>
        <li className="author">{detailPage.author}</li>
        <li onClick={()=> addWishlist(x)}  className="wishlist"><i className="fa-regular fa-heart"></i></li>

      </ul>
    </div>
  );
}

export default Detail;
