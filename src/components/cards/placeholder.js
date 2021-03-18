import React from 'react';
import {
  Card, CardContent, CardImagePlaceholder, CardTitlePlaceholder, CardSubtitlePlaceholder,
} from './base';

export const CardPlaceholder = () => (
  <Card>
    <CardImagePlaceholder />
    <CardContent>
      <CardTitlePlaceholder />
      <CardSubtitlePlaceholder />
    </CardContent>
  </Card>
);
