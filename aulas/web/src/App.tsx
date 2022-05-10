import { useState } from 'react'

interface ButtonProps{
  text?: string;
}

function Button(props: ButtonProps){
  return <button className="bg-violet-500 p-2 rounded">{props.text ?? 'Default'}</button>
}

function App() {
  return(
    <div className="flex gap-2">
      <Button text='Enviar'/>
      <Button text='Ok'/>
    </div>
  )
}

export default App
