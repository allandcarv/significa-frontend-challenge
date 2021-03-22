/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import EmptyState from '@assets/illustrations/illustration-empty-state.png';
import EmptyState2x from '@assets/illustrations/illustration-empty-state@2x.png';

// Styles
import { Article } from './styles';

const EmptySearch: React.FC = () => {
  return (
    <Article className="search-empty">
      <picture>
        <source srcSet={`${EmptyState}, ${EmptyState2x} 2x`} />
        <img
          srcSet={`${EmptyState}, ${EmptyState2x} 2x`}
          alt="Empty Search State"
        />
        <p className="font__size-large">Don't know what to search?</p>
        <p className="font__color-secondary">
          Here's an offer you can´t refuse
        </p>
      </picture>
    </Article>
  );
};

export default EmptySearch;
