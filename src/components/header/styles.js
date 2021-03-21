import styled from 'styled-components';
import { metrics } from '../../styles';
import { Toolbar } from '../toolbar';

export const Container = styled(Toolbar)`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
`;

export const Content = styled.div`
  flex: 1;
  max-width: ${metrics.screenSizes.lg};
  margin: auto;
  padding: ${metrics.padding.md};

  @media ${metrics.media.md} {
    padding: ${metrics.padding.lg};
  }
`;

export const Logo = styled.img`
  max-width: 120px;

  @media ${metrics.media.md} {
    max-width: 200px;
  }
`;
