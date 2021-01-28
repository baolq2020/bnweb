import axios from "axios";

import {BASE_URL} from "../config/api";

export const LOGIN_URL = BASE_URL + "/api/login";
export const REGISTER_URL = BASE_URL + "/api/auth/register";
export const REQUEST_PASSWORD_URL = BASE_URL + "/api/auth/forgot-password";

export const ME_URL = BASE_URL + "/api/check-auth";

export function login(email, password) {

    let sendApi = axios.post(LOGIN_URL, {username: email, password: password}, {
            headers: {
                "Content-Type": "application/json",
            }
        }
    );

    return sendApi
}

export function register(email, fullname, username, password) {
    return axios.post(REGISTER_URL, {email, fullname, username, password});
}

export function requestPassword(email) {
    return axios.post(REQUEST_PASSWORD_URL, {email});
}

export function getUserByToken() {
    // Authorization head should be fulfilled in interceptor.
    return axios.post(ME_URL);
}
