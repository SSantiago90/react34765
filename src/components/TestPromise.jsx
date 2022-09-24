import React from "react";

function TestPromise() {
  let promise = new Promise((resolve, reject) => {
    resolve("Esta todo ok!");
  });

  return <div>Promises</div>;
}

export default TestPromise;
