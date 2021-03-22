import styled from 'styled-components';
import { Link } from 'react-router-dom';

import * as Colors from '@core/styles/colors';

export const Article = styled.article`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 20px;

  section {
    position: relative;
    border-radius: 5px;
    overflow: hidden;
    cursor: pointer;

    img {
      width: 100%;
    }

    &:hover {
      a {
        opacity: 0.9;
      }
    }
  }
`;

export const StyledLink = styled(Link)`
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 13px;
  background-color: ${Colors.dark};
  opacity: 0;
  transition: opacity 0.4s;
  text-decoration: none;

  i {
    position: absolute;
    top: 13px;
    right: 13px;
  }

  .font__size-medium {
    margin-bottom: 5px;
  }
`;
