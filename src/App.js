import React, {useState} from 'react'
import Char from './Char/Char'
import Validation from './Validation/Validation'


export default function App() {

  const [textLen, setTextLen] = useState(0)
  const [textInput, setTextInput] = useState([])

  const handleLen = (event) => {
    setTextLen(event.target.value.split('').length)
    setTextInput(event.target.value.split(''))
  } 

  let valiComponent = null
  if (textLen > 1){
    valiComponent = <Validation textLen={textLen}/>;
  }

  const deleteLetter = (index) => {
    const updatedList = [...textInput]
    updatedList.splice(index,1)
    setTextInput(updatedList)
    setTextLen(updatedList.length)
  }

  const style = {
    display: "inline-block",
    padding: '16px',
    margin: '16px',
    border: '1px solid black',
    textAlign: 'center'
  }

  return (
    <div style={style}>
      <input type="text" onChange={handleLen}/>
      <h3>Text Lenght : {textLen}</h3>
      {valiComponent}
      {textInput.map((letter,index) => 
      {
        return <Char key={index} text={letter} delete={() => deleteLetter(index)}/>
      }
      )}
    </div>
  )
}