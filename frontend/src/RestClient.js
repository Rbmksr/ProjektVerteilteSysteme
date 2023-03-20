/* fetches api data from backend and extracts its json body */
export async function fetchAllShoeMen() {
  return await fetch("http://localhost:4000/shoeMen", {
    mode: "cors",
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      return res;
    });
}
