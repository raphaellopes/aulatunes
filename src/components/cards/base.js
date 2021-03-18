import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { colors, metrics } from '../../styles';
import { Placeholder } from '../placeholder';
import { Title, TextLabel } from '../thypography';

export const Card = styled.div`
  display: flex;
  background-color: ${colors.light};
  padding: ${metrics.padding.md};
  border-radius: ${metrics.borderRadius.md};
  box-shadow: ${colors.shadow};
  ${({ onClick }) => onClick && 'cursor: pointer;'}
`;

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
