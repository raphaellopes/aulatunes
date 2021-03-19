import styled from 'styled-components';
import { metrics, colors, font } from '../../../styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media ${metrics.media.md} {
    flex-direction: row;
    align-items: center;

    > nav {
      margin-right: ${metrics.margin.lg};
    }
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  flex: 1;
`;

export const ClearButton = styled.button`
  background-color: ${colors.light_20};
  color: ${colors.dark};
  width: 24px;
  height: 24px;
  border-radius: 100%;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 0;
  bottom: 0;
  right: ${metrics.margin.md};
  margin: auto;
  font-weight: ${font.weight.bold};
  line-height: 10px;
`;
