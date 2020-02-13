import axios from 'axios';

const url = process.env.REACT_APP_API_URL;

export async function getTest() {
    return axios.get(`${url}5185415ba171ea3a00704eed`);
}
