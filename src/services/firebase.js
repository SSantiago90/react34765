import { initializeApp } from "firebase/app";

import {
  getFirestore,
  collection,
  doc,
  getDocs,
  getDoc,
  query,
  where,
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

export default FirebaseApp;
