import axios from 'axios';

const api = axios.create({
  baseURL: "https://api.deezer.com/search?q=",
});

const options = {
  method: "GET",
  url: "https://deezerdevs-deezer.p.rapidapi.com/search",
  params: { q: "eminem" },
  headers: {
    "X-RapidAPI-Key": "4c89e69059msh383d22649a4bd62p11e3b0jsneb27f6551bd1",
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
};

export const getSearchResults = (): {} => {
  return axios.request(options).then(response => console.log(response.data))
}