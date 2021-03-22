import { createGlobalStyle } from 'styled-components';

import RobotoBold from '@assets/fonts/Roboto/Roboto-Bold.ttf';
import RobotoBoldItalic from '@assets/fonts/Roboto/Roboto-BoldItalic.ttf';
import RobotoRegularItalic from '@assets/fonts/Roboto/Roboto-Italic.ttf';
import RobotoMedium from '@assets/fonts/Roboto/Roboto-Medium.ttf';
import RobotoMediumItalic from '@assets/fonts/Roboto/Roboto-MediumItalic.ttf';
import RobotoRegular from '@assets/fonts/Roboto/Roboto-Regular.ttf';

import * as Colors from './colors';

export default createGlobalStyle`
 @font-face {
    font-family: 'Roboto';
    src: local('Roboto'),
         url(${RobotoRegular}) format('truetype');
    font-style: normal;
    font-weight: 400;
  }

  @font-face {
    font-family: 'Roboto';
    src: local('Roboto'),
         url(${RobotoRegularItalic}) format('truetype');
    font-style: italic;
    font-weight: 400;
  }

  @font-face {
    font-family: 'Roboto';
    src: local('Roboto'),
         url(${RobotoMedium}) format('truetype');
    font-style: normal;
    font-weight: 500;
  }

  @font-face {
    font-family: 'Roboto';
    src: local('Roboto'),
         url(${RobotoMediumItalic}) format('truetype');
    font-style: italic;
    font-weight: 500;
  }

  @font-face {
    font-family: 'Roboto';
    src: local('Roboto'),
         url(${RobotoMediumItalic}) format('truetype');
    font-style: italic;
    font-weight: 500;
  }

  @font-face {
    font-family: 'Roboto';
    src: local('Roboto'),
         url(${RobotoBold}) format('truetype');
    font-style: normal;
    font-weight: 700;
  }

  @font-face {
    font-family: 'Roboto';
    src: local('Roboto'),
         url(${RobotoBoldItalic}) format('truetype');
    font-style: italic;
    font-weight: 700;
  }

  .font__color-default {
    color: ${Colors.white};
  }

  .font__color-secondary {
    color: ${Colors.lightGrey};
  }

  .font__color-active {
    color: ${Colors.green};
  }

  .font__color-negative {
    color: ${Colors.red};
  }

  .font__color-highlight {
    color: ${Colors.yellow};
  }

  .font__color-disabled {
    color: ${Colors.midGrey}
  }

  .font__size-regular {
    font-size: 16px;
    letter-spacing: .2px;
    line-height: 14px;
  }

  .font__size-medium {
    font-size: 20px;
    font-weight: 500;
    letter-spacing: .2px;
    line-height: 28px;
  }

  .font__size-large {
    font-size: 24px;
    font-weight: 500;
    letter-spacing: .2px;
    line-height: 30px;
  }

  .font__size-xlarge {
    font-size: 80px;
    font-weight: 700;
    letter-spacing: .8px;
    line-height: 88px;
  }
`;
