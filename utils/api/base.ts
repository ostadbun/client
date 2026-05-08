import axios from "axios";

export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_APIADDR
})

// قبل از هر request، header اضافه می‌کنیم
api.interceptors.request.use((config) => {
    const tkn = typeof window !== "undefined" ? localStorage.getItem("authCode") : null;
    console.log("this is token ",tkn,process.env.APIADDR)
    const token = `Bearer ${tkn}`
    if (token) {
        config.headers.setAuthorization(token)
    }
    console.log(config)
    return config;
})