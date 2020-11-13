import React, { useState } from 'react';
import styled from 'styled-components';
import { Char } from './Char/Char';
import { Validation } from './Validation/Validation';

const StyledDiv = styled.div`
  display: inline-block;
  padding: 16px;
  margin: 16px;
  border: 1px solid black;
  textalign: center;
`;

const App: React.FC = () => {
  const [textLen, setTextLen] = useState<number>(0);
  const [textInput, setTextInput] = useState<string[]>([]);

  const handlelen = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextLen(event.target.value.split('').length);
    setTextInput(event.target.value.split(''));
  };

  let valiComponent: null | React.ReactElement = null;
  if (textLen > 1) {
    valiComponent = <Validation textLen={textLen} />;
  }

  const deleteLetter = (index: number) => {
    const updatedList = [...textInput];
    updatedList.splice(index, 1);
    setTextInput(updatedList);
    setTextLen(updatedList.length);
  };

  return (
    <StyledDiv>
      <input type='text' onChange={handlelen} />
      <h3>Text Length : {textLen}</h3>
      {valiComponent}
      {textInput.map((letter, index) => {
        return <Char text={letter} delete={() => deleteLetter(index)} key={index} />;
      })}
    </StyledDiv>
  );
};

export default App;
