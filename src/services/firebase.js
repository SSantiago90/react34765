import { initializeApp } from "firebase/app";

import {
  getFirestore,
  collection,
  doc,
  getDocs,
  getDoc,
  query,
  where,
  addDoc,
  writeBatch
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD468FYpXE3imoOXtubm_MBkHqaxLQbKPM",
  authDomain: "react34765.firebaseapp.com",
  projectId: "react34765",
  storageBucket: "react34765.appspot.com",
  messagingSenderId: "353119364014",
  appId: "1:353119364014:web:dd2f0344f5fdb0c228de3f",
};

//1. Inicializar Firebase e inicializar FIRESTORE
const FirebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(FirebaseApp);

export async function getCursos() {
  const collectionRef = collection(db, "cursos");
  let results = await getDocs(collectionRef);

  let dataCursos = results.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });

  return dataCursos;
}

export async function getUnCurso(idParams) {
  const docRef = doc(db, "cursos", idParams);
  const docResult = await getDoc(docRef);
  if (docResult.exists()) {
    return { id: docResult.id, ...docResult.data() };
  }
}

export async function getCursosByCategory(idCategoryParams) {
  const collectionRef = collection(db, "cursos");

  const queryCat = query(
    collectionRef,
    where("category", "==", idCategoryParams)
  );

  let results = await getDocs(queryCat);

  let dataCursos = results.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });

  return dataCursos;
}

export async function createBuyOrder(orderData){
  const collectionRef = collection(db, "orders");
  let respuesta = await addDoc(collectionRef, orderData)
  return respuesta.id;
}

async function sendDataToFirebase(){
  const data = [
    {
      id: 1,
      title: "UX/UI",
      img: "https://www.seoptimer.com/es/blog/wp-content/uploads/2020/06/uiux.png",
      price: 95,
      expired: true,
      detail: "Aprende Diseño UX/UI desde cero!",
      stock: 10,
      category: "diseño",
      offer: true,
    },
    {
      id: 2,
      title: "Javascript",
      img: "https://soyhorizonte.com/wp-content/uploads/2020/10/Javascript-by-SoyHorizonte.jpg",
      price: 59,
      expired: false,
      detail: "Aprende Javascript desde cero!",
      stock: 8,
      category: "programacion",
    },
    {
      id: 3,
      title: "React",
      img: "https://blog.facialix.com/wp-content/uploads/2021/11/reactjs.jpg",
      price: 59,
      expired: true,
      detail: "Aprende React desde cero!",
      stock: 7,
      category: "programacion",
    },
    {
      id: 4,
      title: "UX/UI",
      img: "https://www.seoptimer.com/es/blog/wp-content/uploads/2020/06/uiux.png",
      price: 95,
      expired: true,
      detail: "Aprende Diseño UX/UI desde cero!",
      stock: 10,
      category: "diseño",
    },
    {
      id: 5,
      title: "Javascript",
      img: "https://soyhorizonte.com/wp-content/uploads/2020/10/Javascript-by-SoyHorizonte.jpg",
      price: 59,
      expired: false,
      detail: "Aprende Javascript desde cero!",
      stock: 8,
      category: "programacion",
    },
    {
      id: 6,
      title: "React",
      img: "https://blog.facialix.com/wp-content/uploads/2021/11/reactjs.jpg",
      price: 59,
      expired: false,
      detail: "Aprende React desde cero!",
      stock: 7,
      category: "programacion",
    },
  ];

  let itemsCollectionRef = collection(db, "cursos")

  for(let curso of data){
    delete(curso.id)
    let newDoc = await addDoc(itemsCollectionRef, curso);
    console.log("Documento creado:",newDoc.id)
  }
}

export default FirebaseApp;
