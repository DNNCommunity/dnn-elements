import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { DnnButton, DnnInput, DnnCheckbox, defineCustomElements } from '@dnncommunity/dnn-elements-react'

function App() {
  const [count, setCount] = useState(0)
  const [inputValue, setInputValue] = useState('')
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    defineCustomElements();
  }, []);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + DNN Elements</h1>
      
      <div className="card">
        <h2>DNN Elements Test</h2>
        
        <div style={{ margin: '20px 0' }}>
          <h3>DNN Button</h3>
          <div className="test-buttons">
            <DnnButton 
              onClick={() => setCount((count) => count + 1)}
            >
              Count is {count}
            </DnnButton>
            <DnnButton
              confirm
              appearance="secondary"
            >
              Confirm Me
            </DnnButton>
          </div>
        </div>

        <div style={{ margin: '20px 0' }}>
          <h3>DNN Input</h3>
          <DnnInput 
            label="Test Input"
            helpText="This is a test input"
            value={inputValue}
            onValueChange={(e: any) => setInputValue(e.detail)}
          />
          <p>Input value: {inputValue}</p>
        </div>

        <div style={{ margin: '20px 0' }}>
          <h3>DNN Checkbox</h3>
          <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            Agree
            <DnnCheckbox
              onCheckedchange={(e: any) => setChecked(e.detail)}
            />
          </label>
          <p>Checkbox checked: {checked ? 'Yes' : 'No'}</p>
        </div>

        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
