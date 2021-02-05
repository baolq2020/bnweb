require('dotenv').config();

let url = process.env.REACT_APP_WS_HOST + ":" + process.env.REACT_APP_WS_PORT

export const BASE_URL = url