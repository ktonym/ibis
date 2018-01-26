import axios from "axios";

export default {
    client: {
        add: (client) => axios.post("/client/create",client).then(res => res.data),
        update: (client) => axios.post("/client/update",client).then(res => res.data),
        getAll: () => axios.get("/client/getAll").then(res => res.data),
        search: (query) => axios.get(`/client/search?q=${query}`).then(res => res.data)
    }
}