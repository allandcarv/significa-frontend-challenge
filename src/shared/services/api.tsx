import axios from 'axios';

// Models
import ApiData from '../models/apiData.interface';
import FullMovie from '../models/fullMovie.interface';
import Movie from '../models/movie.interface';

const baseUrl = 'http://www.omdbapi.com/';

export const apiDataRequest = async (search: string): Promise<Movie[]> => {
  const params = {
    apiKey: process.env.REACT_APP_API_KEY,
    s: search,
  };

  const response = await axios.get<ApiData>(baseUrl, { params });

  const data: Movie[] = response.data.Search;

  return data;
};

export const apiRequestById = async (movieId: string): Promise<FullMovie> => {
  const params = {
    apiKey: process.env.REACT_APP_API_KEY,
    i: movieId,
  };

  const response = await axios.get(baseUrl, { params });

  const { data } = response;

  return data;
};
