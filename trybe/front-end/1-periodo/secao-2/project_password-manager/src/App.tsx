import { useState } from "react";
import "./App.css";
import Form, { Service } from "./components/Form";
import Swal from "sweetalert2";

function App() {
  const [services, setServices] = useState<Service[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [hidePassword, setHidePassword] = useState(false);

  function handleAdd(service: Service) {
    setServices([...services, service]);
    setShowForm(false);

    // Alerta de sucesso
    Swal.fire({
      text: "Serviço cadastrado com sucesso",
      icon: "success",
      showConfirmButton: false,
      timer: 1500, // 1.5 segundos
    });
  }

  function remove(key: number) {
    const updateServices = services.filter((_, index) => index !== key);
    setServices(updateServices);
  }

  return (
    <div>
      Hello World
      <h1>Gerenciador de senhas</h1>
      {!showForm && (
        <button onClick={() => setShowForm(true)}>Cadastrar nova senha</button>
      )}
      {showForm && (
        <Form onCancel={() => setShowForm(false)} onSubmit={handleAdd} />
      )}
      {services.length === 0 && <p>Nenhuma senha cadastrada</p>}
      {services.length > 0 && (
        <>
          <label>
            <input
              type="checkbox"
              checked={hidePassword}
              onChange={(e) => setHidePassword(e.target.checked)}
            />
            Esconder senhas
          </label>
          <ul>
            {services.map((service, index) => (
              <li key={index}>
                <a href={service.url}>{service.service}</a>
                <p>{service.login}</p>
                <p>{hidePassword ? "******" : service.password}</p>
                <button data-testid="remove-btn" onClick={() => remove(index)}>
                  Remover
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default App;
