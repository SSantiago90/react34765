import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
// 1. Importamos los componentes de react-router-dom
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./app.css";

function App() {
  let misEstilos = { backgroundColor: "lightblue" };

  // 2. Contenemos nuestra App con el BrowserRouter
  // 3. Definimos nuestras Rutas con <Routes> y <Route>
  return (
    <div className="main" style={misEstilos}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryID" element={<ItemListContainer />} />
          {/* 5. Definimos un segmento para nuestra URL de detalle */}
          <Route
            path="/curso/:itemID"
            element={<ItemDetailContainer />}
          ></Route>
          <Route path="*" element={<h4>Te perdiste! Error: 404</h4>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
