const fetch = require("node-fetch");
// fetches api data from backend and extracts its json body return "no data found" if json body is empty
export async function fetchAllShoeMen() {
  return await fetch("http://localhost:4000/series/shoeMen", {
    mode: "cors",
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      return res;
    });
}
// fetches api data from backend and extracts its json body
export async function fetchAllShoeWomen() {
  return await fetch("http://localhost:4000/shoeWomen", {
    mode: "cors",
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      return res;
    });
}
// fetches api data from backend and extracts its json body
export async function fetchAllShoeChildren() {
  return await fetch("http://localhost:4000/shoeChildren", {
    mode: "cors",
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      return res;
    });
}