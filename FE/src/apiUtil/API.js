import axios from "axios";

const basePath = "http://localhost:8000";

export const getProducts = async ()=> {
    let productList = []
    try {
        const apiUrl = `${basePath}/api/products`
        productList = (await axios.get(apiUrl)).data.products
        console.log(productList)
    }
    catch(e) {
        console.log(e);
    }
}