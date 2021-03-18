import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from 'styled-theming';
import { colors, metrics, font } from '../../styles';

const buttonStyle = theme.variants('mode', 'variant', {
  default: {
    light: `
      border: 1px solid ${colors.light_20};
      color: ${colors.dark_10};
    `,
  },
  primary: {
    light: `
      border: 1px solid ${colors.primary};
      background-color: ${colors.primary};
      color: ${colors.light};
    `,
  },
});

export const Button = styled.button`
  background-color: transparent;
  padding: ${metrics.padding.md};
  border-radius: ${metrics.borderRadius.lg};
  text-transform: uppercase;
  font-weight: ${font.weight.bold};
  font-size: ${font.size.sm};
  ${({ onClick }) => onClick && 'cursor: pointer;'}
  ${buttonStyle}
`;

Button.propTypes = {
  variant: PropTypes.oneOf(['default', 'primary']),
};

Button.defaultProps = {
  variant: 'default',
};
