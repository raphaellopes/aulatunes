import styled from 'styled-components';
import { colors, metrics } from '../../styles';

export const Toolbar = styled.div`
  display: flex;
  background-color: ${colors.light};
  box-shadow: ${colors.shadow};
  padding: ${metrics.padding.md};

  @media ${metrics.media.md} {
    padding: ${metrics.padding.lg};
  }
`;
