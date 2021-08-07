import axios from "axios";


const instance = axios.create({
    baseURL: 'http://localhost:3004/',

})


export const ProductsAPI = {
    getProducts(startSlice, numberOfProducts) {
        return instance.get(`products?_start=${startSlice}&_end=${numberOfProducts}`)
    }
}

