const screenSizes = {
  sm: '360px',
  md: '768px',
  lg: '960px',
};

export const metrics = {
  padding: {
    md: '10px',
    lg: '16px',
  },
  margin: {
    sm: '5px',
    md: '10px',
    lg: '16px',
  },
  screenSizes,
  media: {
    sm: `(min-width: ${screenSizes.sm})`,
    md: `(min-width: ${screenSizes.md})`,
  },
  borderRadius: {
    sm: '5px',
    md: '10px',
    lg: '20px',
  },
  font: {
    sm: '14px',
    md: '16px',
    lg: '22px',
  },
};
