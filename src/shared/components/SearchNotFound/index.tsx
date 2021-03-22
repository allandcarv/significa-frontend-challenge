/* eslint-disable react/no-unescaped-entities */
import React from 'react';

// Styles
import { Article } from './styles';

const SearchNotFound: React.FC = () => {
  return (
    <Article className="loading">
      <p className="font__size-large font__color-secondary">
        Ooops.. Sorry but I cannot find what you're looking for
      </p>
    </Article>
  );
};

export default SearchNotFound;
