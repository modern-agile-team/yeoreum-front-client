
import {useState, useEffect} from 'react'
import {InputContainer, Text, Input} from '../../styles/InputList'
 
interface InputObj {
  [text: string ]: string
}

function InputList() {
  const inputList = ['Username', 'Name', 'University', 'Department', 'Introduce'];
  const [inputValue, setInputValue] = useState<InputObj>({
    Username: '',
    Name: '',
    University: '',
    Department: '',
    Introduce: ''
  })

  const changeHandler = (e: any) => {
    setInputValue({...inputValue, [e.target.name]: e.target.value})
  }

  useEffect(() => {
    console.log(inputValue)
  }, [inputValue])

  return (
    <>
        {inputList.map((input, idx) => (
          <InputItem key={`${idx}`} text={input} />
        ))}
    </>
  )

  function InputItem({text} : {text: string}) {
    return (
      <InputContainer>
        <Text>{text}</Text>
        <Input name={text} value={inputValue[text]} onChange={changeHandler} />
    </InputContainer>
    )
  }
}

export default InputList

