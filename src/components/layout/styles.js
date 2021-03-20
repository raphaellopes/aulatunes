import styled from 'styled-components';
import { metrics, colors } from '../../styles';
import { Title } from '../thypography';

export const Container = styled.div`
  max-width: ${metrics.screenSizes.lg};
  margin: 60px auto 0;
  padding: ${metrics.padding.md};

  @media ${metrics.media.md} {
    margin-top: 100px;
    padding: ${metrics.padding.lg};
  }
`;

export const SectionContainer = styled.section`
  padding-bottom: ${metrics.padding.xl};
  &:not(:last-child) {
    border-bottom: 1px solid ${colors.light_20};
    margin-bottom: ${metrics.margin.lg};
  }
`;

export const SectionTitle = styled(Title)`
  color: ${colors.secondary};
  margin-bottom: ${metrics.margin.lg};
`;
