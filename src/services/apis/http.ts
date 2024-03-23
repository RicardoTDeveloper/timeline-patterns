import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3022",
});

export default instance;
