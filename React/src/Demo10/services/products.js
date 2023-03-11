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


export function addProduct(_products) {
 localStorage.setItem("added-data", JSON.stringify(_products))
}

export function getAddedProducts() {
 return JSON.parse(localStorage.getItem("added-data"))
}