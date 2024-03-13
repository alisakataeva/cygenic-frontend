import axios from "axios";

export const axiosInstance = async (url, params) => {
    // const baseUrl = 'https://strapi-cygenic.onrender.com/'

    const baseUrl = 'https://admin.cygenic.tech'

    const query = `/api/${url}?${params}`

    const result = await axios.get(baseUrl + query, {
        headers: {
            Authorization: "bearer " + import.meta.env.VITE_APP_STRAPI_TOKEN
        }
    })

    return result.data
}
