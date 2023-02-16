import { createContext, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cards from "./Cards";
import HomeScreen from "./HomeScreen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
  },
  {
    path: "/card",
    element: <Cards />,
  },
]);

export const ProductProvider = createContext();

const App = () => {
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
