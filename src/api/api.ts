import axios from 'axios';

const getSearchResults = (input: string): {} => {
  console.log(input);
  
  const options = {
    method: "GET",
    url: "https://deezerdevs-deezer.p.rapidapi.com/search",
    params: { q: input },
    headers: {
      "X-RapidAPI-Key": "4c89e69059msh383d22649a4bd62p11e3b0jsneb27f6551bd1",
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    },
  };


  return axios.request(options).then(response => console.log(response.data))
}

export { getSearchResults }