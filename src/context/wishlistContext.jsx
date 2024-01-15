import React, { createContext, useState } from 'react'
import UseLocalStorage from '../hook/useLocalStorage'

export const WishlistContext =createContext()
function WishlistProvider({children}) {
    const [wishlist, setWishlist] = UseLocalStorage("wishlist", [])

    function addWishlist(item) {
        const index = wishlist.findIndex((x)=>x._id === item._id)

        if (index === -1) {
            setWishlist([...wishlist,item])
        }else{
            removeWishlist(item)
        }
    }
    function removeWishlist(item) {
        setWishlist(wishlist && wishlist.findIndex((x)=> x._id !== item._id))
    }
  return (
    <WishlistContext.Provider value={{addWishlist,wishlist}}>{children}</WishlistContext.Provider>
  )
}

export default WishlistProvider