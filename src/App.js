import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Favorites from "./pages/Favorites";
import SingleProduct from "./pages/SingleProduct";
import SignUP from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Contacts from "./pages/Contacts";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children: [
        { path: "/", element: <Home /> },
        { path: "cart", element: <Cart /> },
        {path: 'favorites' , element: <Favorites/>},
        {path: 'contacts' , element: <Contacts/>},
        {path: 'items/:id' , element : <SingleProduct/>},
        {path : '*' , element:<p>not found</p>}
      ],
    },
    {
      path:'/signUP',
      element:<SignUP/>
    },
    {
      path:'/signIn',
      element:<SignIn/>
    }
  ]);
  return (
    <div className="App">
      <Provider store={store}>
        <RouterProvider router={router}/> 
      </Provider>
    </div>
  );
}

export default App;
