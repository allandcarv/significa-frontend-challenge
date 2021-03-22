import styled from 'styled-components';

export const Main = styled.main`
  height: 100%;

  > section {
    display: flex;
    max-height: 100%;

    article {
      max-height: 100%;

      &.search-empty,
      &.loading,
      &.search-notfound {
        margin-top: 210px;
      }
    }
  }
`;
