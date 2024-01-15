import React, { useContext, useEffect, useState } from "react";
import "./index.scss";
import { SearchContext } from "../../context/searchContext";
import { WishlistContext } from "../../context/wishlistContext";
import { NavLink } from "react-router-dom";

function GlobalBrands() {
  const [work, setWork] = useState([]);
  const { handleSearch, search } = useContext(SearchContext);
  const [sortedProperty, setSortedProperty] = useState([]);
  const {addWishlist} = useContext(WishlistContext)

  useEffect(() => {
    fetch("http://localhost:3000/")
      .then((res) => res.json())
      .then((data) => setWork(data));
  }, []);

  return (
    <div className="globalBrands">
      <div className="globalBrandsWork">
        <div className="caseStudy">OUR CASE STUDY</div>
        <h4 className="workGlobal">We work with global brands</h4>
        <div className="sort">
          <input
            className="input"
            type="text"
            onChange={(e) => handleSearch(e)}
          />
          <button onClick={()=>setSortedProperty({property:"name", asc:true})}>A-Z</button>
          <button onClick={()=>setSortedProperty({property:"name", asc:false})}>Z-A</button>
          <button onClick={()=>setSortedProperty(null)}>Default</button>
        </div>
        <div className="cards">
          {work
            .filter((x) => x.name.toLowerCase().includes(search.toLowerCase()))
            .sort((a,b) => {
                if (sortedProperty && sortedProperty.asc) {
                   return (a[sortedProperty.property] > b[sortedProperty.property]) ? 1 : ((b[sortedProperty.property] > a[sortedProperty.property]) ? -1 : 0)
                }else if (sortedProperty && sortedProperty.asc === false) {
                   return (a[sortedProperty.property] < b[sortedProperty.property]) ? 1 : ((b[sortedProperty.property] < a[sortedProperty.property]) ? -1 : 0)
                }else{
                    return 0
                }
            })
            .map((x) => (
              <ul key={x._id} className="card">
                <img className="image" src={x.image} />
                <li className="name">{x.name}</li>
                <li className="author">{x.author}</li>
                <li onClick={()=> addWishlist(x)}  className="wishlist"><i className="fa-regular fa-heart"></i></li>
                <li><NavLink to={"/detail/"+x._id}>Go To Learn More</NavLink></li>
              </ul>
            ))}
        </div>
      </div>
    </div>
  );
}

export default GlobalBrands;
