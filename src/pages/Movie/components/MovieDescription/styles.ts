import styled from 'styled-components';

// Colors
import * as Colors from '@core/styles/colors';

export const Article = styled.article`
  section {
    &.movie-intro {
      margin-bottom: 40px;

      > p {
        small {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          width: auto;
          height: 28px;
          padding: 0 5px;
          background-color: ${Colors.lightGrey};
          color: ${Colors.dark};
          border-radius: 5px;
        }
      }
    }

    &.movie-title {
      margin-bottom: 45px;
    }

    &.ratings {
      display: flex;
      margin-bottom: 50px;

      p {
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid ${Colors.midGrey};
        border-radius: 5px;
        overflow: hidden;

        & + p {
          margin-left: 16px;
        }

        .rating-icon {
          width: 100%;
          height: 100%;
          padding: 0 15px;
          margin-right: 15px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .rating-text {
          margin-right: 16px;
        }
      }

      button {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 16px;
        background-color: transparent;
        border: 1px solid ${Colors.midGrey};
        border-radius: 5px;

        &.button-hovered {
          border-color: ${Colors.red};
        }

        &.button-added {
          border-color: ${Colors.red};
          background-color: ${Colors.red};
        }

        .icon__heart-full,
        .icon__heart-grey,
        .icon__heart-white {
          width: 20px;
          height: 20px;
          margin: 0 12px;
        }

        .button-text {
          margin-right: 16px;
        }
      }
    }

    &.plot {
      margin-bottom: 50px;

      p:last-of-type {
        margin-top: 15px;
        line-height: 25px;
      }
    }

    &.general__info {
      display: flex;
      justify-content: space-between;

      article {
        ul {
          margin-top: 15px;
          list-style: none;

          li {
            margin-top: 5px;
          }
        }
      }
    }
  }
`;
