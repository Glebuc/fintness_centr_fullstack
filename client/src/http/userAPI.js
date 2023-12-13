import {$authHost, $host} from "./index";
import {jwtDecode} from "jwt-decode";


export const registration = async (email_user, password_user, phone_user, gender_user, fio_user, age_user) => {
    const {data} = await $host.post('api/user/registration', {email_user, password_user, phone_user, gender_user, fio_user, age_user })
    console.log(data)
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const login = async (email_user, password_user) => {
    const {data} = await $host.post('api/user/login', {email_user, password_user})
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const check = async () => {
    const {data} = await $authHost.get('api/user/auth' )
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}