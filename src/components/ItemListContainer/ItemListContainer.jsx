import React, { useState, useEffect } from "react";
import "./itemlistcontainer.css";

import { getCursos } from "../../mockAPI/mockAPI";
import ItemList from "./ItemList";
import ItemCount from "../ItemCount/ItemCount";

function ItemListContainer(props) {
  const [coursesList, setCoursesList] = useState([]);  

  useEffect(() => {
    getCursos().then((data) => {
      setCoursesList(data);
    });
  }, []);

  return (
    <div className="container">
      <h1>Titulo</h1>
      <ItemList coursesList={coursesList} />
      <hr />
    </div>
  );
}

export default ItemListContainer;
