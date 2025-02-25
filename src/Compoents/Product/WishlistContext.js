import { createContext, useState, useContext } from "react";
import { toast } from 'react-toastify';


const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const addToWishlist = (product) => {

    const isPresent = wishlist.some(prod => prod.id === product.id)
    if (isPresent) {
      setWishlist((prevWishlist) => [...prevWishlist]);
      toast.warning("Already Added")
    }
    else {
      setWishlist((prevWishlist) => [...prevWishlist, product]);
      toast.success(`${product.name} added to Wishlist`)
    }
  };

  const removeFromWishlist = (product) => {
    setWishlist((prevWishlist) => prevWishlist.filter((item) => item.id !== product.id));
    toast.info(`${product.name} removed from the Wishlist`)

  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

// Custom Hook for easy access
export const useWishlist = () => useContext(WishlistContext);
