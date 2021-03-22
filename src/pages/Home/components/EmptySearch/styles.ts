import styled from 'styled-components';

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    text-align: center;

    &:first-of-type {
      margin-bottom: 10px;
    }
  }
`;
