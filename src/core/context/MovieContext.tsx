import React, { createContext, useCallback, useEffect, useState } from 'react';

// Interfaces
import Movie from '@shared/models/movie.interface';
import FullMovie from '@shared/models/fullMovie.interface';

// Services
import * as api from '@shared/services/api';

interface MovieContextData {
  isLoading: boolean;
  favorites: string[];
  notFound: boolean;
  movie: FullMovie;
  movies: Movie[];
  addFavorite(movieId: string): void;
  getMovie(movieId: string): void;
  getMovies(search: string): Promise<void>;
  removeFavorite(movieId: string): void;
  resetMovies(): void;
}

export const MovieContext = createContext<MovieContextData>(
  {} as MovieContextData,
);

export const MovieProvider: React.FC = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [notFound, setIsNotFound] = useState<boolean>(false);

  const [favorites, setFavorites] = useState<string[]>(() => {
    const storedFavorites = localStorage.getItem('@MyFavorites');

    if (storedFavorites) {
      return JSON.parse(storedFavorites);
    }

    return [];
  });

  const [movies, setMovies] = useState<Movie[]>([]);

  const [movie, setMovie] = useState<FullMovie>({} as FullMovie);

  const getMovie = useCallback(async (movieId: string): Promise<void> => {
    setIsLoading(true);

    const response = await api.apiRequestById(movieId);

    if (response) {
      setMovie(response);
    } else {
      setIsNotFound(true);
    }

    setIsLoading(false);
  }, []);

  const getMovies = useCallback(async (search: string): Promise<void> => {
    setIsLoading(true);

    const response = await api.apiDataRequest(search);

    if (response) {
      setMovies([...response]);

      setIsNotFound(false);
    } else {
      setIsNotFound(true);
    }

    setIsLoading(false);
  }, []);

  const resetMovies = (): void => {
    setIsNotFound(false);
    setMovies([]);
  };

  const addFavorite = (movieId: string): void => {
    setFavorites([...favorites, movieId]);
  };

  const removeFavorite = (movieId: string): void => {
    const newFavorites = favorites.filter(
      (favorite: string) => favorite !== movieId,
    );

    setFavorites([...newFavorites]);
  };

  useEffect(() => {
    localStorage.setItem('@MyFavorites', JSON.stringify(favorites));
  }, [favorites]);

  return (
    <MovieContext.Provider
      value={{
        isLoading,
        favorites,
        movie,
        movies,
        notFound,
        addFavorite,
        getMovie,
        getMovies,
        removeFavorite,
        resetMovies,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
