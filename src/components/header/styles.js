import styled from 'styled-components';
import { metrics } from '../../styles';

export const Logo = styled.img`
  max-width: 120px;

  @media ${metrics.media.md} {
    max-width: 200px;
  }
`;
