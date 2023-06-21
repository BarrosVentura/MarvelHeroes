import axios from "axios";

// https://gateway.marvel.com:443/v1/public/characters?apikey=

const api = axios.create({
  baseURL: "https://gateway.marvel.com:443/v1/public",
  params: {
    apikey: process.env.marvelPublicKey,
  },
});

export { api };
