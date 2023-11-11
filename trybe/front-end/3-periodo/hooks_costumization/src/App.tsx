import './App.css'
import Form from './components/Form'
import useToggle from './hooks/useToggle'

function App() {
  const toggle = useToggle(false)

  return (
    <>

      <div>
        {toggle.value ? (
          <Form toggle={toggle.toggleValue} />
        ) : (
          <button onClick={ toggle.toggleValue }> Cadastre-se</button>
        )}
      </div>
      
    </>
  );
}

export default App
