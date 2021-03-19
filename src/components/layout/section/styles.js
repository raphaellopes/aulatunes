import styled from 'styled-components';
import { metrics, colors } from '../../../styles';
import { Title } from '../../thypography';

export const Container = styled.section`
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
