const API_KEY= "2ecb9900e8c87105fe105ed2c52b59ae";

const userrequests = {
    fetchTrending :`/trending/all/week?api_key=${API_KEY}&languages=en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_network=213`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&languages=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=110749`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`
}

export default userrequests