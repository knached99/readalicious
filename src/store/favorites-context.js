import { createContext, useState } from "react";
import { useEffect } from "react/cjs/react.development";

const FavoritesContext = createContext({
  getFavorites: () => {},
  addFavorite: (book) => {},
  removeFavorite: (book) => {},
  isFavorite: (book) => {},
});

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  /**
   * Adds a book to the favorites state after sending a POST request to Firebase.
   *
   * POST request should be formatted as follows ...
   * https://{your-firebase-url}/favorites.json
   *
   * You will need to parse the response from this request to get the "name" that Firebase assigns. This will be id of favorite object.
   * The firebase response will be formatted as follows ...
   * {
   *  name: 'some id firebase assigns'
   * }
   *
   * The favorite object you store in state should have the following structure ...
   * {
   *  id: "name" from Firebase response
   *  book: all attributes from the favorited book object
   * }
   */
  const addFavorite = async (book) => {};

  /**
   * Remove a favorite book from the favorites state after sending a DELETE request to Firebase.
   *
   * DELETE request sent to firebase should have the following structure ...
   * https://{your-firebase-url}/favorites/{id-of-favorite}.json
   *
   * Be sure to use the id of the favorite and not the book.
   */
  const removeFavorite = async (book) => {};

  /**
   * Checks to see if book is a favorite. Returns a boolean. Only checks favorites state (No HTTP request).
   * Make sure to check for equality as follows book.id === favorite.book.id.
   * The consumer of the context is not aware of the favorite id.
   */
  const isFavorite = (book) => {
    return false;
  };

  /**
   * Returns an array of favorite books from the favorites state (without the "favorite id"), no HTTP request.
   * This extracts the book object from each favorite and returns an array of books to the context consumer.
   */
  const getFavorites = () => {
    return [];
  };

  /**
   * Initial load of favorites. Send GET request to Firebase to get favorite books to populate favorites state.
   *
   * GET request should be formatted as follows (same as POST request) ...
   * https://{your-firebase-url}/favorites.json
   */
  useEffect(() => {}, []);

  /**
   * Object to return to context consumers. This is their interface to interact with this context.
   */
  const context = {
    getFavorites,
    addFavorite,
    removeFavorite,
    isFavorite,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;
