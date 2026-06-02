import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5000/api"
});

// ===== API LOGIN =====
export const login = (data) => {
    return api.post("/auth/login", data);
};

// ===== API REGISTER =====
export const register = (data) => {
    return api.post("/auth/register", data);
};