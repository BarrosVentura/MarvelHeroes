import axios from "axios";

const api = axios.create({
  baseURL: "https://gateway.marvel.com:443/v1/public",
  params: {
    apikey: process.env.NEXT_PUBLIC_MARVEL_API_PUBLIC_KEY,
  },
});

export { api };
