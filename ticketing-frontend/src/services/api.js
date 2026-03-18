import axios from "axios";

const API = axios.create({
  baseURL: "https://xmly1u71td.execute-api.ap-south-1.amazonaws.com/default"
});

export default API;