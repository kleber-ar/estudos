import { useState } from 'react'
import ValidEmail from './components/ValidEmail';
import './App.css'

function App() {
  const [email, setEmail] = useState('');
  const [saveEmail , setSaveEmail] = useState('');

  const sendEmail = () => {
    setSaveEmail(email.trim());
    setEmail('');
  };

  const keyPress = (event: { key: string; }) => {
    if (event.key === 'Enter') {
      sendEmail();
      
    }
  }
  

  return (
    <>
      <div className='app'>
        <label htmlFor="id-email">
          Email:
          <input 
            type="email" 
            id="id-email" 
            value={ email } 
            onChange={ (event) => setEmail(event.target.value) }
            onKeyDown={ keyPress } />
        </label>
        <input 
          data-testid="id-send" 
          type="button" 
          value="Enviar"
          onClick={ sendEmail }
           />
        <input 
          type="button" 
          value="Voltar" 
          onClick={ () => setSaveEmail('')}/>
          <ValidEmail email={ saveEmail } />
      </div>
    </>
  )
}

export default App
