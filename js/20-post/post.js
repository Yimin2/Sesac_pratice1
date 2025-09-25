import axios from "axios";


async function addProduct() {
    const URL = "https://dummyjson.com/products/add"
    const METHOD = "POST"

    const body = {
        title: "갤럭시 s2949",
        category: "스마트폰",
    }

    const headers = {
        "Content-Type": "application/json"
    }

    const config = {
        url: URL,
        method: METHOD,
        headers: headers,
        data: body
    }

    const response = await axios(config)
    console.log(response)
}

addProduct()