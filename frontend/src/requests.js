import axios from "axios";
import { BACKEND_PORT, BACKEND_URL } from "./constants";

const url = process.env.HOST_URL ? process.env.HOST_URL : `http://${BACKEND_URL}:${BACKEND_PORT}/`;
const url = "https://deployservertest.herokuapp.com/";
console.log(process.env.HOST_URL)
export default axios.create({
  baseURL: url,
  headers: {
    Authorization: localStorage.getItem('token')
    ? 'JWT ' + localStorage.getItem('access_token') : null,
    'Content-Type': 'application/json',
    accept: 'application/json',
  },
});