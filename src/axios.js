import axios from "axios";

const instance = axios.create({
    baseURL: 'https://kurs-react-2326a-default-rtdb.europe-west1.firebasedatabase.app'
})

export default instance;