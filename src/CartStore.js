import { atom, useAtom } from 'jotai';
import Immutable from 'seamless-immutable';

// Define the initial state of the cart. We put in one piece of test data
const initialCart = Immutable([
// {
//     "id": 1,
//     "title": "Testing",
//     "author": "cde",
//     "quantity": 10,
//     "price": 12.99,
//     "imageUrl": "https://picsum.photos/id/225/300/200",
//     "description": "Premium organic green tea leaves, rich in antioxidants and offering a smooth, refreshing taste."
//   },
]);

// Create an atom for the cart
export const cartAtom = atom(initialCart);

// Custom hook for cart operations
export const useCart = () => {
  const [cart, setCart] = useAtom(cartAtom);

  // Function to calculate the total price of items in the cart
  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  const addToCart = (book) => {
    setCart((currentCart) => {
      const existingItemIndex = currentCart.findIndex(item => item.book_id === book.id);
      if (existingItemIndex !== -1) {
        // Use setIn to update quantity immutably
        const currentQuantity = currentCart[existingItemIndex].quantity;
        return currentCart.setIn([existingItemIndex, 'quantity'], currentQuantity + 1);
      } else {
        // Use concat to add a new item immutably
        return currentCart.concat({ ...book, book_id: book.id, quantity: 1 });
      }
    });
  };

  const modifyQuantity = (book_id, quantity) => {
    setCart((currentCart) => {
      const existingItemIndex = currentCart.findIndex(item => item.book_id === book_id);
      if (existingItemIndex !== -1) {

        // check if the quantity will be reduced to 0 or less, if so remove the item
        if (quantity < 0) {
          return currentCart.filter(item => item.book_id !== book_id);
        } else {                      
            return currentCart.setIn([existingItemIndex, 'quantity'], quantity);
        }

      }
    });
  }

  const removeFromCart = (book_id) => {
    setCart((currentCart) => {
      return currentCart.filter(item => item.book_id !== book_id);
    });
  }

  const setCartContent = (cartItems) => {
    setCart(Immutable(cartItems));
  }

  return {
    cart,
    getCartTotal,
    addToCart,
    modifyQuantity,
    removeFromCart,
    setCartContent
  };
};