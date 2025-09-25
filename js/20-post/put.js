import axios from "axios";

async function putProduct() {
    const URL = "https://dummyjson.com/products/1"

    const data = await axios.put(
        `${URL}`,
        {
            title: "아이폰 s2949",
            category: "스마트폰",
        },
        {
            headers: {
                "Content-Type": "application/json"
            }
        })
    console.log(data.data)
}

putProduct()