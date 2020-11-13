import React from 'react';

interface CharProps {
  text: string;
  delete: () => void;
}

export const Char: React.FC<CharProps> = props => {
  const style: React.CSSProperties = {
    display: 'inline-block',
    padding: '16px',
    margin: '16px',
    border: '1px solid black',
    textAlign: 'center',
  };

  return (
    <div style={style} onClick={props.delete}>
      {props.text}
    </div>
  );
};
