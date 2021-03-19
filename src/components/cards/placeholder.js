import React from 'react';
import styled from 'styled-components';
import { metrics } from '../../styles';
import { Placeholder } from '../placeholder';
import { Card, CardContent } from './base';

export const CardImagePlaceholder = styled(Placeholder)`
  margin-right: ${metrics.margin.md};
  width: ${metrics.avatar.md};
  height: ${metrics.avatar.md};
`;

export const CardTitlePlaceholder = styled(Placeholder)`
  height: 26px;
  width: 90%;
`;

export const CardSubtitlePlaceholder = styled(Placeholder)`
  height: 16px;
  width: 70%;
`;

export const CardPlaceholder = () => (
  <Card>
    <CardImagePlaceholder />
    <CardContent>
      <CardTitlePlaceholder />
      <CardSubtitlePlaceholder />
    </CardContent>
  </Card>
);
