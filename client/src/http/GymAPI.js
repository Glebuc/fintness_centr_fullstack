import {$authHost, $host} from "./index";
import jwtDecode from "jwt-decode";

export const createNews = async (news) => {
    const {data} = await $authHost.post('api/news', news)
    return data
}

export const fetchNews = async (page, limit= 5) => {
    const {data} = await $host.get('api/news', {params: {
         page, limit
    }})
    return data
}

export const createTrainers = async (trainers) => {
    const {data} = await $authHost.post('api/trainers', trainers)
    return data
}

export const fetchTrainers = async () => {
    const {data} = await $host.get('api/trainers', )
    return data
}

export const createDevice = async (device) => {
    const {data} = await $authHost.post('api/device', device)
    return data
}

export const fetchTimeTable = async (typeId, brandId, page, limit= 5) => {
    const {data} = await $host.get('api/time', {params: {
            typeId, brandId, page, limit
        }})
    return data
}

export const fetchOneDevice = async (id) => {
    const {data} = await $host.get('api/device/' + id)
    return data
}