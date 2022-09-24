import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

import "./app.css";
import NavBar from "./components/NavBar/NavBar";
// Componente
function App() {
  let misEstilos = { backgroundColor: "lightblue" };

  return (
    <div className="main" style={misEstilos}>
      <NavBar />
      <ItemListContainer greeting="Bienvenidos a nuestra plataforma de cursos" />
    </div>
  );
}

export default App;
