import axios from "axios";

const api = axios.create({
  baseURL: "https://gateway.marvel.com:443/v1/public",
  params: {
    apikey: process.env.marvelPublicKey,
  },
});

export { api };
