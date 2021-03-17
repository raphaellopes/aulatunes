import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { colors, metrics } from '../../styles';

export const Card = styled.div`
  display: flex;
  background-color: ${colors.light};
  padding: ${metrics.padding.md};
  border-radius: ${metrics.borderRadius.md};
`;

export const CardContent = styled.div`
  flex: 1;
`;

export const CardImage = styled(LazyLoadImage)`
  margin-right: ${metrics.margin.md};
  border-radius: ${metrics.borderRadius.sm};
`;

// @TODO: add size prop
export const CardImagePlaceholder = styled.span`
  display: inline-block;
  background-color: ${colors.light_20};
  border-radius: ${metrics.borderRadius.md};
  margin-right: ${metrics.margin.md};
  width: 60px;
  height: 60px;
`;

export const CardList = styled.div`
  margin-top: ${metrics.margin.lg};
  ${Card} {
    &:not(:last-child) {
      margin-bottom: ${metrics.margin.md};
    }
  }
`;
