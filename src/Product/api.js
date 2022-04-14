const axios = require('axios');

export async function getAllProduct() {

    try {
        const response = await axios.get('/getProducts');
        console.log('response  ', response)
        return response.data;
    } catch (error) {
        return [];
    }
}

export async function createUser(data) {
    const response = await axios.post(`/createProducts`, { data: data });
    return response.data;
}