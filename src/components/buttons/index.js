import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from 'styled-theming';
import { colors, metrics } from '../../styles';

const buttonStyle = theme.variants('mode', 'variant', {
  default: {
    light: `
      border: 1px solid ${colors.dark_10};
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
  font-weight: 600;
  ${buttonStyle}
`;

Button.propTypes = {
  variant: PropTypes.oneOf(['default', 'primary']),
};

Button.defaultProps = {
  variant: 'default',
};
