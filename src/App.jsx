import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartContextProvider } from "./context/cartContext";

import "./app.css";
import CartView from "./components/CartView/CartView";

function App() {
  let misEstilos = { backgroundColor: "lightblue" };

  return (
    <div className="main" style={misEstilos}>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />

            <Route
              path="/category/:categoryID"
              element={<ItemListContainer />}
            />
            <Route
              path="/curso/:itemID"
              element={<ItemDetailContainer />}
            ></Route>
             <Route
              path="/cart"
              element={<CartView/>}
            ></Route>
            <Route path="*" element={<h4>Te perdiste! Error: 404</h4>} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
