import axios from "axios";

export default {
    user: {
        login: (credentials) => axios.post("/auth/login",credentials).then(res => res.data.user),
        resetPasswordRequest: email => axios.post("/auth/reset_password_request",email).then(res => res.data),
        validateToken: token => axios.post("/auth/validate_token",{token}).then(res => res.data),
        changePassword: data => axios.post("/auth/change_password",data).then(res => res.data)
    },
    client: {
        add: (client) => axios.post("/client/create",client).then(res => res.data),
        update: (client) => axios.post("/client/update",client).then(res => res.data),
        getAll: () => axios.get("/client/getAll").then(res => res.data),
        search: (query) => axios.get(`/client/search?q=${query}`).then(res => res.data)
    }
}