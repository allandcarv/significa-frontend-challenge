import React, { useContext } from 'react';

// Context
import { MovieContext } from '@core/context/MovieContext';

// Styles
import { Article } from './styles';

interface MoviePosterProps {
  className?: string;
}

const MoviePoster: React.FC<MoviePosterProps> = ({ className }) => {
  const { movie } = useContext(MovieContext);

  return (
    <Article className={className}>
      <img src={movie.Poster} alt={movie.Title} />
    </Article>
  );
};

export default MoviePoster;
