import axios from "axios";

const instance = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1',
    params: {
        key: 'AIzaSyCSzY1qslOT5CtsPFUD4FN_bVbh6fxKa6M'
    }
})

export default instance;