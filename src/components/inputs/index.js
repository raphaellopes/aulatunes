import styled from 'styled-components';
import { metrics, colors } from '../../styles';

export const Input = styled.input`
  border: 2px solid ${colors.light_20};
  padding: ${metrics.padding.md};
  border-radius: ${metrics.borderRadius.sm};
  color: ${colors.dark_10};
  width: 100%;

  &:focus {
    border-color: ${colors.primary};
  }
`;
