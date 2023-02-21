import { createContext, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cards from "./Cards";
import NotFoundPage from "./NotFound";
import HomeScreen from "./HomeScreen";
import { setProducts } from "./services/products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
  },
  {
    path: "/card",
    element: <Cards />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export const ProductProvider = createContext();

const App = () => {
  setProducts();
  const [addedProducts, setAddedProducts] = useState([]);
  return (
    <div>
      <ProductProvider.Provider value={{ addedProducts, setAddedProducts }}>
        <RouterProvider router={router} />
      </ProductProvider.Provider>
    </div>
  );
};

export default App;
