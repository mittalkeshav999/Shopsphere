import { createContext, useState, useContext} from "react";
import { toast} from 'react-toastify';


const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product,selectedColor,selectedSize) => {
    if(product.colors.length>0 &&  !selectedColor){
      toast.error("Please Select Color")
      return;
    }
    if(product.colors.length>0 && !selectedSize){
      toast.error("Please Select Size")
      return;
    }
    setCart((prevCart) => {
      toast.success(`${product.name} added to Bag`)
      const existingItem = prevCart.find((item) => item.id === product.id && item.selectedColor===selectedColor && item.selectedSize===selectedSize);
      if (existingItem) {
        if(existingItem.quantity<product.availability.stock_quantity){
        return prevCart.map((item) =>
          item.id === product.id  ? { ...item,selectedColor,selectedSize, quantity: item.quantity + 1 } : item
        );
      }
        else{
          toast.warning(`Stock limit reached for ${product.name}`)
        }

      } 
      else {
       
        return [...prevCart, { ...product,selectedColor,selectedSize, quantity: 1 }]
      }
    });
  };
  const removeFromCart = (product) => {

    setCart((prevCart) => prevCart.filter((item) => item.id !== product.id || item.selectedColor!==product.selectedColor || item.selectedSize!== product.selectedSize ));
  };
  const incrementQuantity = (prod) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        (item.id === prod.id && item.selectedColor===prod.selectedColor && item.selectedSize===prod.selectedSize && item.quantity<item.availability.stock_quantity) ? { ...item, quantity: item.quantity + 1 } : item 
      )
    );
  };

  // Function to decrement quantity
  const decrementQuantity = (prod) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === prod.id && item.selectedColor===prod.selectedColor && item.selectedSize===prod.selectedSize ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0) // Remove item if quantity reaches 0
    );
  };
  return (  
    <CartContext.Provider value={{ cart, addToCart, removeFromCart,incrementQuantity,decrementQuantity}}>
      {children}
    </CartContext.Provider>
  );
  
};


// Custom Hook for easy access
export const useCart = () => useContext(CartContext);
