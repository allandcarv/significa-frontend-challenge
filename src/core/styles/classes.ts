import { createGlobalStyle, css } from 'styled-components';

/*
 * (T - (G * (C - 1))) / C
 * T: Total Width
 * G: Gap Width
 * C: Total Columns
 */

const MAX_WIDTH = 100;

const columnsWidth: { [key: number]: number } = {
  1: 1180,
  2: 580,
  3: 380,
  4: 280,
  5: 220,
  6: 180,
  7: 151.4285,
  8: 130,
  9: 113.3333,
  10: 100,
  11: 89.0909,
  12: 80,
};

const createGridCss = () => {
  let columns = '';

  for (let i = 1; i < 13; i += 1) {
    columns += `
      .col-${i} {
        flex: 0 0 ${MAX_WIDTH / i}%;
        max-width: ${columnsWidth[i]}px;
      }
    `;
  }

  return css`
    @media only screen and (min-width: 1200px) {
      ${columns}
    }
  `;
};

export default createGlobalStyle`
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  max-width: 1180px;
  margin: 0 130px;
}

 ${createGridCss()};
`;
