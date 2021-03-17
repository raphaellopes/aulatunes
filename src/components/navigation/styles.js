import styled from 'styled-components';
import { metrics } from '../../styles';
import { Button } from '../buttons';

export const Container = styled.nav`
  display: flex;
  padding: ${metrics.padding.lg} 0;
`;

export const MenuItem = styled(Button)`
  &:not(:last-child) {
    margin-right: ${metrics.margin.md};
  }
`;
