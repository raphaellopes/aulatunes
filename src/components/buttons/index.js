import styled from 'styled-components';
import { colors, metrics } from '../../styles';

// @TODO: Add variant with styled-theming
export const Button = styled.button`
  background-color: transparent;
  border: 1px solid ${colors.dark_10};
  padding: ${metrics.padding.md};
  border-radius: ${metrics.borderRadius.lg};
  text-transform: uppercase;
`;
