import axios from "axios";

const BASE_URL = "https://dummyjson.com"

const testRoute = async () => {
    const data = await axios.get(`${BASE_URL}/test`)
    console.log(data.data)
}

testRoute()

async function getAllProducts() {
    const response = await axios.get(`${BASE_URL}/products`)
    console.log(response.data)
    console.table(Object.entries(response.data))
}
getAllProducts()

async function getProductProperty(property) {
    const response = await axios.get(`${BASE_URL}/products`)
    console.log(response.data)
    const values = response.data.products
        .map(product => product[property])
    console.log(values)
}

getProductProperty("title")