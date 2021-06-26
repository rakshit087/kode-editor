import axios from "axios";

export default function() {
  return axios.create({
    baseURL: 'http://localhost:8000/'
  });
}