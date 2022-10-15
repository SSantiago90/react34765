import React, { useState, useEffect } from "react";
import "./itemlistcontainer.css";

import { getCursos, getCursosByCategory } from "../../services/firebase";

import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";

function ItemListContainer(props) {
  const [coursesList, setCoursesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const params = useParams();
  const categoryID = params.categoryID;

  useEffect(() => {
    setCoursesList([]);
    if (categoryID === undefined) {
      getCursos().then((data) => {
        setCoursesList(data);
        setIsLoading(false);
      });
    } else {
      getCursosByCategory(categoryID).then((data) => {
        setCoursesList(data);
        setIsLoading(false);
      });
    }
  }, [categoryID]);

  return (
    <div className="container">
      <h1>Titulo</h1>
      {isLoading ? <Loader /> : <ItemList coursesList={coursesList} />}
    </div>
  );
}

export default ItemListContainer;
