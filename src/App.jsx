import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import {MESSAGE_LIST} from './index.constants'

function App() {
  const messageList=MESSAGE_LIST;
  const [step, setStep] = useState(1);

  function incrementStep(){
    if (step<3) setStep((step)=>step+1);
  }
  function decrementStep(){
    if(step>1) setStep((step)=>step-1)
  }
  return (
    <>
        <div className="card-container">
          <div className='steps'>
            <div className={step>=1 ?'active':''}> 1</div>
            <div className={step>=2 ?'active':''}>2</div>
            <div className={step>=3 ?'active':''}>3</div>
          </div>
          <div className="message-container">{messageList[step-1]}</div>
          <div className='button-container'>
            <button onClick={()=>decrementStep()}>Previous</button>
            <button onClick={()=>incrementStep()}>Next</button>

          </div>

        </div>
    </>
  )
}

export default App
