import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from 'styled-theming';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { colors, metrics } from '../../styles';
import { Title, TextSubtitle, TextLabel } from '../thypography';

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

export const Card = styled.div`
  display: flex;
  padding: ${metrics.padding.md};
  border-radius: ${metrics.borderRadius.md};
  box-shadow: ${colors.shadow};
  ${cardStyle}
  ${({ onClick }) => onClick && 'cursor: pointer;'}
`;
export const cardProps = {
  variant: PropTypes.oneOf(['default', 'secondary']),
};
Card.propTypes = cardProps;
Card.defaultProps = { variant: 'default' };

export const CardContent = styled.div`
  flex: 1;
`;

export const CardImage = styled(LazyLoadImage)`
  margin-right: ${metrics.margin.md};
  border-radius: ${metrics.borderRadius.sm};
`;

export const CardTitle = styled(Title)`
  color: ${colors.dark_10};
`;

export const CardSubtitle = styled(TextSubtitle)`
  color: ${colors.light_30};
  margin-bottom: ${metrics.margin.sm};
`;

export const CardLabel = styled(TextLabel)`
  color: ${colors.light_30};
`;

export const CardRow = styled.div`
  display: flex;
  flex-direction: column;
  &:not(:last-child) {
    margin-bottom: ${metrics.margin.md};
  }

  ${Card} {
    &:not(:last-child) {
      margin-bottom: ${metrics.margin.md};
    }
  }

  @media ${metrics.media.md} {
    flex-direction: row;
    ${Card} {
      flex-basis: 32.6%;
      flex-grow: 0;
      margin-bottom: 0;
      &:not(:last-child) {
        margin-right: ${metrics.margin.md};
        margin-bottom: 0;
      }
    }
  }
`;

export const CardList = styled.div`
  margin-top: ${metrics.margin.lg};
`;
