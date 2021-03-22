import React, { useCallback, useContext, useEffect, useState } from 'react';

// Context
import { MovieContext } from '@core/context/MovieContext';

// Models
import Rating from '@shared/models/rating.interface';

// Styles
import { Article } from './styles';

interface MovieDescriptionProps {
  className?: string;
}

const MovieDescription: React.FC<MovieDescriptionProps> = ({ className }) => {
  const { movie, favorites, addFavorite, removeFavorite } = useContext(
    MovieContext,
  );

  const [actors, setActors] = useState<string[]>([]);
  const [directors, setDirectors] = useState<string[]>([]);
  const [genres, setGenres] = useState<string[]>([]);
  const [hovered, setHovered] = useState<boolean>(false);
  const [imdbRating, setImdbRating] = useState<Rating>({} as Rating);
  const [rottenTomatoesRating, setRottenTomatoesRating] = useState<Rating>(
    {} as Rating,
  );

  const getRating = useCallback(
    (source: string): Rating => {
      const rating = movie.Ratings.find(r => r.Source === source);

      return rating || ({} as Rating);
    },
    [movie.Ratings],
  );

  const isFavorite = (): boolean => {
    return favorites.includes(movie.imdbID);
  };

  const handleButtonClassName = (): string => {
    if (isFavorite()) return 'button-added';

    return hovered ? 'button-hovered' : '';
  };

  const handleButtonIconClassName = (): string => {
    if (isFavorite()) return 'icon__heart-full';

    return hovered ? 'icon__heart-white' : 'icon__heart-grey';
  };

  const handleButtonTextClassName = (): string => {
    if (isFavorite()) return 'button-text font__color-default';

    return `button-text ${
      hovered ? 'font__color-default' : 'font__color-secondary'
    }`;
  };

  const handleFavorite = (): void => {
    const favorite = isFavorite();

    if (favorite) {
      removeFavorite(movie.imdbID);
    } else {
      addFavorite(movie.imdbID);
    }
  };

  const splitString = (string: string, separator: string): string[] => {
    if (!string.length) return [];

    return string.split(separator);
  };

  const toggleHover = (): void => {
    setHovered(!hovered);
  };

  useEffect(() => {
    if (movie && Object.values(movie).length) {
      setActors(splitString(movie.Actors, ','));
      setDirectors(splitString(movie.Director, ','));
      setGenres(splitString(movie.Genre, ','));
      setImdbRating(getRating('Internet Movie Database'));
      setRottenTomatoesRating(getRating('Rotten Tomatoes'));
    }
  }, [movie, getRating]);

  return (
    <Article className={className}>
      <section className="movie-intro">
        <p className="font__color-secondary font__size-medium col-2">
          {movie.Runtime} &middot; {movie.Year} &middot;{' '}
          <small>{movie.Rated}</small>
        </p>
      </section>
      <section className="movie-title">
        <p className="font__size-xlarge">{movie.Title}</p>
      </section>
      <section className="ratings">
        <p>
          <span className="rating-icon icon-yellow">
            <i className="icon__imdb" />
          </span>
          <span className="rating-text">{imdbRating.Value}</span>
        </p>
        <p>
          <span className="rating-icon icon-red">
            <i className="icon__rotten" />
          </span>
          <span className="rating-text">{rottenTomatoesRating.Value}</span>
        </p>
        <button
          type="button"
          className={handleButtonClassName()}
          onMouseEnter={toggleHover}
          onMouseLeave={toggleHover}
          onClick={handleFavorite}
        >
          <i className={handleButtonIconClassName()} />
          <span className={handleButtonTextClassName()}>
            {isFavorite() ? 'Added' : 'Add to favourites'}
          </span>
        </button>
      </section>
      <section className="plot">
        <p className="font__size-regular  font__color-secondary">Plot</p>
        <p>{movie.Plot}</p>
      </section>

      <section className="general__info">
        <article className="cast">
          <p className="font__color-secondary">Cast</p>
          <ul>
            {actors.map(actor => (
              <li key={actor}>{actor}</li>
            ))}
          </ul>
        </article>
        <article className="genre">
          <p className="font__color-secondary">Genre</p>
          <ul>
            {genres.map(genre => (
              <li key={genre}>{genre}</li>
            ))}
          </ul>
        </article>
        <article className="director">
          <p className="font__color-secondary">Director</p>
          <ul>
            {directors.map(director => (
              <li key={director}>{director}</li>
            ))}
          </ul>
        </article>
      </section>
    </Article>
  );
};

export default MovieDescription;
