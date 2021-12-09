import axios from "axios";

const BASE_URL = "http://localhost:8080/fruit"

const http = axios.create({
    baseURL: {BASE_URL},
    headers: {
        'Content-type': 'application-json'
    }
});

export const getFruit = async (id) => {
    const rawResponse = await http.get(`${BASE_URL}/${id}`);
    return rawResponse.data
}
export const geFruitList = async (type = '', name = '', price = '') => {
    const rawResponse = await axios.get(`${BASE_URL}?kind=${type}&name=${name}&price=${price}`)
    return rawResponse.data
}