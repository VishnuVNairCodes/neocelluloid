const API_KEY = "d9d704d789d6f9bc5c9d631e3e71a851";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&lan=en-us`,
  fetchNetflixOriginals: `/discover/tv?api_keys=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top-rated?api_key=${API_KEY}&language=en-us`,
  fetchActionMovies: `/discover/tv?api_keys=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/tv?api_keys=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/tv?api_keys=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/tv?api_keys=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/tv?api_keys=${API_KEY}&with_genres=99`,
};

export default requests;
