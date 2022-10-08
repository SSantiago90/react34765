import React, { useState, useEffect } from "react";
import "./itemlistcontainer.css";

import { getCursos, getCursosByCategory } from "../../mockAPI/mockAPI";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer(props) {
  const [coursesList, setCoursesList] = useState([]);
  const params = useParams();
  const categoryID = params.categoryID;

  useEffect(() => {
    if (categoryID === undefined) {
      getCursos().then((data) => {
        setCoursesList(data);
      });
    } else {
      getCursosByCategory(categoryID).then((data) => {
        setCoursesList(data);
      });
    }
  }, [categoryID]);

  return (
    <div className="container">
      <h1>Titulo</h1>
      <ItemList coursesList={coursesList} />
    </div>
  );
}

export default ItemListContainer;
