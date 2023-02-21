import products from "../data/data"

export function setProducts() {
 const localData = JSON.parse(localStorage.getItem("data"));
 if (!localData) {
  localStorage.setItem("data", JSON.stringify(products))
 }
}

export function getProducts() {
 return JSON.parse(localStorage.getItem("data"))
}