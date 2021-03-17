import styled from 'styled-components';
import { metrics } from '../../styles';
import { Button } from '../buttons';

export const Container = styled.nav`
  display: flex;
`;

export const MenuItem = styled(Button)`
  &:not(:last-child) {
    margin-right: ${metrics.margin.md};
  }
`;
