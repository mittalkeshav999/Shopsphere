import { createContext, useState, useContext } from "react";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const [wishPopup,setWishPopup]=useState(false);
  

  const addToWishlist = (product) => {
    
     const isPresent= wishlist.some(prod => prod.id===product.id)
   if(isPresent) { setWishlist((prevWishlist) => [...prevWishlist])} 
   else
    {setWishlist((prevWishlist) => [...prevWishlist,product]);
      setWishPopup(true); 
      setTimeout(() => {
        setWishPopup(false);
      }, 2000);
    }
  };

  const removeFromWishlist = (productId) => {
    setWishlist((prevWishlist) => prevWishlist.filter((item) => item.id !== productId));
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist,wishPopup }}>
      {children}
    </WishlistContext.Provider>
  );
};

// Custom Hook for easy access
export const useWishlist = () => useContext(WishlistContext);
