import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';

// Context
import { MovieContext } from '@core/context/MovieContext';

// Components
import Loading from '@shared/components/Loading';
import SearchNotFound from '@shared/components/SearchNotFound';
import Header from './components/Header';
import MovieDescription from './components/MovieDescription';
import MoviePoster from './components/MoviePoster';

// Styles
import { Main } from './styles';

interface Params {
  id: string;
}

const Movie: React.FC = () => {
  const { id } = useParams<Params>();
  const { getMovie, isLoading, notFound } = useContext(MovieContext);

  useEffect(() => {
    getMovie(id);
  }, [getMovie, id]);

  return (
    <Main className="container">
      <Header className="col-1" />
      <section className="col-1">
        {!isLoading && !notFound && (
          <>
            <MovieDescription className="col-2" />
            <MoviePoster className="col-2" />
          </>
        )}
        {!isLoading && notFound && <SearchNotFound />}
        {isLoading && <Loading />}
      </section>
    </Main>
  );
};

export default Movie;
