import axios from "axios";

export const API = axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/https://api.nytimes.com/svc/",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});
