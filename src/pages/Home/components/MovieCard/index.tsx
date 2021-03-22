import React, { SyntheticEvent, useContext, useState } from 'react';

// Context
import { MovieContext } from '@core/context/MovieContext';

// Interfaces
import Movie from '@shared/models/movie.interface';

// Styles
import { Article, StyledLink } from './styles';

const MovieCards: React.FC = () => {
  const [hovered, setHovered] = useState('');

  const { movies, favorites, addFavorite, removeFavorite } = useContext(
    MovieContext,
  );

  const handleClassName = (movieId: string): string => {
    if (favorites.includes(movieId)) {
      return 'icon__heart-full';
    }

    return hovered === movieId ? 'icon__heart-white' : 'icon__heart-grey';
  };

  const handleFavorite = (movieId: string, event: SyntheticEvent) => {
    event.preventDefault();
    event.stopPropagation();

    if (favorites.includes(movieId)) {
      removeFavorite(movieId);
    } else {
      addFavorite(movieId);
    }
  };

  const toggleHover = (movieId: string): void =>
    movieId === hovered ? setHovered('') : setHovered(movieId);

  return (
    <Article>
      {movies.map((movie: Movie) => (
        <section key={movie.imdbID}>
          <img src={movie.Poster} alt={movie.Title} />
          <StyledLink to={`/movie/${movie.imdbID}`}>
            <i
              aria-hidden="true"
              className={handleClassName(movie.imdbID)}
              onMouseEnter={() => toggleHover(movie.imdbID)}
              onMouseLeave={() => toggleHover(movie.imdbID)}
              onClick={event => handleFavorite(movie.imdbID, event)}
            />
            <p className="font__color-default font__size-medium">
              {movie.Title}
            </p>
            <p className="font__color-default font__size-regular">
              {movie.Year}
            </p>
          </StyledLink>
        </section>
      ))}
    </Article>
  );
};

export default MovieCards;
