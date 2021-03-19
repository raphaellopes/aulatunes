import styled from 'styled-components';
import { metrics } from '../../../styles';
import { Card } from '../base';

export const List = styled.div`
  margin-top: ${metrics.margin.lg};

  ${Card} {
    &:not(:last-child) {
      margin-bottom: ${metrics.margin.md};
    }
  }
`;
