import axios from "axios";

import {BASE_URL} from "../config/api";

export const LIST_URL = BASE_URL + "/api/v1/books";

export function listBook() {

    return axios.get(LIST_URL, {}, {
            headers: {
                "Content-Type": "application/json",
            }
        }
    );
}
