import { useCallback, useState, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed , setNumberAllowed] = useState(false)
  const [characterAllowed , setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) string += "0123456789";
    if(characterAllowed) string += "!@#$%^&*()_+{}[]<>?~-/" ;
    for (let i = 0; i < length; i++) {
      let char  = Math.floor(Math.random() * string.length + 1)

      pass = pass + string.charAt(char)
      
    }
    setPassword(pass)

  }, [length, numberAllowed, characterAllowed, setPassword])

  const copyPassWordtoClipboard = useCallback(() =>{
     window.navigator.clipboard.writeText(password)
  }, [password])
  useEffect(()=>{
    passwordGenerator()
  },[length, numberAllowed, characterAllowed, passwordGenerator])
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-600 bg-gray-700">
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text" 
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password here'
          readOnly
          ref={passwordRef}
          />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copyPassWordtoClipboard}>Copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
        <div className="flex item-center gap-x-2">
          <input type='range' name='' id=''
          min={6}  max={100} value={length} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}}/>
          <label htmlFor="">Length {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
        <input type="checkbox" defaultChecked={numberAllowed} id='numberInput' onChange={
          ()=>{
            setNumberAllowed((prev)=> !prev);
          }
        } />
        <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
        <input type="checkbox" defaultChecked={characterAllowed} id='characterinput' onChange={
          ()=>{
            setNumberAllowed((prev)=> !prev);
          }
        } />
        <label htmlFor="numberInput">characters</label>
        </div>
        </div>
      </div>
    </>
  )
}

export default App
