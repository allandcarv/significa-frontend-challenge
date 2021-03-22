/* eslint-disable react/no-unescaped-entities */
import React, { useContext } from 'react';

// Context
import { MovieContext } from '@core/context/MovieContext';

// Components
import EmptySearch from './components/EmptySearch';
import Header from './components/Header';
import Loading from '../../shared/components/Loading';
import MovieCards from './components/MovieCard';
import SearchNotFound from '../../shared/components/SearchNotFound';

// Styles
import { Main } from './styles';

const Home: React.FC = () => {
  const { isLoading, movies, notFound } = useContext(MovieContext);

  return (
    <Main className="container">
      <Header className="col-1" />
      <section className="col-1">
        {!isLoading && !notFound && (!movies || !movies.length) && (
          <EmptySearch />
        )}

        {!isLoading && movies && !!movies.length && <MovieCards />}

        {!isLoading && notFound && <SearchNotFound />}

        {isLoading && <Loading />}
      </section>
    </Main>
  );
};

export default Home;
