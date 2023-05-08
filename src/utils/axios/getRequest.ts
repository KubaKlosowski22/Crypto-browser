import axios from "axios"

export const getData =  async (url: string, queryParams?: object) => {
    return await axios.get(url, {params: queryParams})
    .then((response) => response.data)
    .catch((error) => console.log(error))
}