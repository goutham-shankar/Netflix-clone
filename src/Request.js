const API_KEY = "c8e0ed4f4332a4187f76513d0e1225c4";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}Swith_genres=28`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}& with_genres=10749)`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}
export default requests;