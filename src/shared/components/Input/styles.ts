import styled from 'styled-components';

import * as Colors from '@core/styles/colors';

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${Colors.white};
  border-radius: 4px;
  padding: 12px 16px 12px 12px;

  input {
    width: 100%;
    border: 0;
    margin-left: 15px;
    color: ${Colors.dark};

    &::placeholder {
      color: ${Colors.lightGrey};
    }
  }
`;
