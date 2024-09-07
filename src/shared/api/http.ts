
import axios from "axios";
import { baseURL } from "../config/path";

function httpClientBuilder() {
    const client = axios.create({ baseURL });

    return client;
}

const http = httpClientBuilder();

export { http };