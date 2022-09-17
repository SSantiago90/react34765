import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import CartWidget from "./components/NavBar/CartWidget";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Componente
function App() {
  let misEstilos = { backgroundColor: "lightblue" };

  return (
    <div style={misEstilos}>
      <CartWidget />
      <ItemListContainer greeting="Bienvenidos a nuestra plataforma de cursos" />
    </div>
  );
}

export default App;
