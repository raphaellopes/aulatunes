import styled from 'styled-components';
import { metrics } from '../../styles/metrics';

export const Container = styled.div`
  max-width: ${metrics.screenSizes.lg};
  margin: 60px auto 0;
  padding: ${metrics.padding.md};

  @media ${metrics.media.md} {
    margin-top: 100px;
    padding: ${metrics.padding.lg};
  }
`;
