// const API_Key = "6339227d47243e7f281d534e020398fd";
const API_Key = process.env.REACT_APP_API_KEY;
const requests = {
  fetchTranding: `/trending/all/week?api_key=${API_Key}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_Key}&with_network=213`,
  fetchTopRatedMoveis: `movie/top_rated?api_key=${API_Key}$language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_Key}$with_genres=28`,
  fetchCommedyMoveis: `/discover/movie?api_key=${API_Key}$with_genres=35`,
  fetchHorrerMovies: `/discover/movie?api_key=${API_Key}$with_genres=27`,
  fetchRomangicMovies: `/discover/movie?api_key=${API_Key}$with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_Key}$with_genres=99`,
  fetchTVShow:`/tv/popular?api_key=${API_Key}$language=en-US&page=1`,
}
export default requests;