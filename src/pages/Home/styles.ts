import styled from 'styled-components';

export const Main = styled.main`
  width: 95%;
  height: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;

  section {
    height: 100%;

    article {
      &.search-empty,
      &.loading,
      &.search-notfound {
        margin-top: 210px;
      }
    }
  }
`;
