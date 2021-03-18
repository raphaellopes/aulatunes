import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from 'styled-theming';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { colors, metrics } from '../../styles';
import { Placeholder } from '../placeholder';
import { Title, TextLabel } from '../thypography';

const cardStyle = theme.variants('mode', 'variant', {
  default: {
    light: `
      background-color: ${colors.light};
    `,
  },
  secondary: {
    light: `
      background-color: ${colors.secondary};
      p {
        color: ${colors.dark};
      }
    `,
  },
});

export const cardProps = {
  variant: PropTypes.oneOf(['default', 'secondary']),
};
export const cardDefaultProps = { variant: 'default' };
export const Card = styled.div`
  display: flex;
  padding: ${metrics.padding.md};
  border-radius: ${metrics.borderRadius.md};
  box-shadow: ${colors.shadow};
  ${cardStyle}
  ${({ onClick }) => onClick && 'cursor: pointer;'}
`;
Card.propTypes = cardProps;
Card.defaultProps = cardDefaultProps;

export const CardContent = styled.div`
  flex: 1;
`;

export const CardImage = styled(LazyLoadImage)`
  margin-right: ${metrics.margin.md};
  border-radius: ${metrics.borderRadius.sm};
`;

export const CardTitle = styled(Title)`
  margin-bottom: ${metrics.margin.sm};
  color: ${colors.dark_10};
`;

export const CardSubtitle = styled(TextLabel)`
  color: ${colors.light_30};
`;

export const CardList = styled.div`
  margin-top: ${metrics.margin.lg};

  ${Card} {
    &:not(:last-child) {
      margin-bottom: ${metrics.margin.md};
    }
  }
`;

// @TODO: add size prop
export const CardImagePlaceholder = styled(Placeholder)`
  margin-right: ${metrics.margin.md};
  width: 60px;
  height: 60px;
`;

export const CardTitlePlaceholder = styled(Placeholder)`
  height: 26px;
  width: 90%;
`;

export const CardSubtitlePlaceholder = styled(Placeholder)`
  height: 16px;
  width: 70%;
`;
