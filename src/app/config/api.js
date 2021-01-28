require('dotenv').config();

let url = process.env.REACT_APP_API_HOST + ":" + process.env.REACT_APP_API_PORT

export const BASE_URL = url