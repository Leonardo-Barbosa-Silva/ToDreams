import { BASE_URL } from '../apis/products'; 

const getProducts = async () => {
    const resp = await fetch(BASE_URL)
    const json = await resp.json()
    return json.products
}

export default getProducts;
