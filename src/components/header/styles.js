import styled from 'styled-components';
import { metrics } from '../../styles';
import { Toolbar } from '../toolbar';

export const Container = styled(Toolbar)`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
`;

export const Content = styled.div`
  flex: 1;
  max-width: ${metrics.screenSizes.lg};
  margin: auto;
`;

export const Logo = styled.img`
  max-width: 120px;

  @media ${metrics.media.md} {
    max-width: 200px;
  }
`;
