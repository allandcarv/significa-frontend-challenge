import Movie from './movie.interface';

export default interface ApiData {
  Response: string;
  Search: Movie[];
  totalResults: string;
}
