import React from 'react';

import Classes from './classes';
import Fonts from './fonts';
import Icons from './icons';
import Styles from './global';

const GlobalStyles: React.FC = () => {
  return (
    <>
      <Classes />
      <Fonts />
      <Icons />
      <Styles />
    </>
  );
};

export default GlobalStyles;
