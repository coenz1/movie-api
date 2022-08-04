const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "fe9432332bd9965a6c29228cd87559c6",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
