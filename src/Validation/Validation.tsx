import React from 'react';

export interface ValidationProps {
  textLen: number;
}

export const Validation: React.FC<ValidationProps> = ({ textLen }) => {
  return <div>{textLen > 5 ? <h3>Text is too large</h3> : <h3>Text is too small</h3>}</div>;
};
