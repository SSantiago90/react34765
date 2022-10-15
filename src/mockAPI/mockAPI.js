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

export function getCursos() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), 2000);
  });
}

export function getUnCurso(idParams) {
  return new Promise((resolve, reject) => {
    let cursoReq = data.find((item) => {
      return item.id === Number(idParams);
    });
    setTimeout(() => {
      if (cursoReq === undefined)
        reject(new Error("No se pudo encontrar el curso."));
      else {
        resolve(cursoReq);
      }
    }, 2000);
  });
}

export function getCursosByCategory(idCategoryParams) {
  return new Promise((resolve) => {
    let arrayFilterCourses = data.filter(
      (item) => item.category === idCategoryParams
    );
    setTimeout(() => resolve(arrayFilterCourses), 2000);
  });
}
