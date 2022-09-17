import React from "react";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <nav>
      <ul>
        <a href="#">
          <li>Cursos Programación</li>
        </a>
        <li>Cursos Diseño</li>
      </ul>
      <CartWidget />
    </nav>
  );
}
// export NavBar -> Importarlo desde App -> renderizarlo
export default NavBar;
