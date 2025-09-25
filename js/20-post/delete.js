import axios from "axios";

async function deleteProduct() {
    const URL = "https://dummyjson.com/products/1"
    const data = await axios.delete(
        `${URL}`,
    )
    console.log(data.data)
}
deleteProduct()