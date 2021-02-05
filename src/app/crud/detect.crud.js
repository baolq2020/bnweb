import axios from "axios";

import {BASE_URL} from "../config/api";

export const LIST_URL = BASE_URL + "/api/v1/detect/image";

export function sendImage(formData) {

    return axios.post(LIST_URL, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        }
    );
}
