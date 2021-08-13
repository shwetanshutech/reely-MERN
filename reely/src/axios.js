import axios from "axios";

const instance = axios.create({
  baseURL: "https://reely-backend.herokuapp.com/",
});

export default instance;
