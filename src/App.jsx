import ItemListContainer from "./components/ItemList/ItemListContainer";

// Componente
function App() {
  let misEstilos = { backgroundColor: "lightblue" };

  return (
    <div style={misEstilos}>
      <ItemListContainer 
      greeting="Bienvenidos a nuestra plataforma de cursos" />
    </div>
  );
}

export default App;
