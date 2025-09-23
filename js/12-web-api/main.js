import axios from "axios";

async function connectTest() {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1")
    console.log(response.data)
    console.table(Object.entries(response))
    console.table(Object.keys(response))
}

connectTest()
