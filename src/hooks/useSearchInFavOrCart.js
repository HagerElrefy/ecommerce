import { useSelector } from "react-redux";

function useSearchInFavOrCart(item) {
    const [favorites, cart] = useSelector((state) => [
      state.favorites.favorites,
      state.cart.cart,
    ]);
    const searchInFav = favorites.findIndex((i) => i.id === item);
    const searchInCart = cart.findIndex((i) => i.id === item);
    return [searchInFav, searchInCart];
  }
  
  export default useSearchInFavOrCart;