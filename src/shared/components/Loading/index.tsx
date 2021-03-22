import React from 'react';

// Styles
import { Article } from './styles';

const Loading: React.FC = () => {
  return (
    <Article className="loading">
      <p className="font__size-large">Searching...</p>
    </Article>
  );
};

export default Loading;
