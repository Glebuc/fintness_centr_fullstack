import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const createNews = async (type) => {
    const {data} = await $authHost.post('api/news', type)
    return data
}

export const fetchNews = async () => {
    const {data} = await $host.get('api/news')
    return data
}

export const fetchOneNew = async (id) => {
    const {data} = await $host.get('api/news/' + id)
    return data
}