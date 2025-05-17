import { FormEvent, useState } from "react";
import countryStates from "./countryStates";

type formType = {
  nome: string;
  email: string;
  cpf: string;
  endereço: string;
  cidade: string;
  estado: string;
  tipo: string;
  resumo: string;
  cargo: string;
  descrição: string;
};

function App() {
  const [formData, setFormData] = useState<formType | null>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setFormData({
      nome: data.get("nome") as string,
      email: (data.get("email") as string) || "",
      cpf: (data.get("cpf") as string) || "",
      endereço: (data.get("endereço") as string) || "",
      cidade: (data.get("cidade") as string) || "",
      estado: (data.get("estado") as string) || "",
      tipo: (data.get("tipo") as string) || "",
      resumo: (data.get("resumo") as string) || "",
      cargo: (data.get("cargo") as string) || "",
      descrição: (data.get("descrição") as string) || "",
    });
  }

  return (
    <div>
      <h1>React Form</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Dados pessoais</legend>

          <label>
            Nome
            <input
              type="text"
              name="nome"
              maxLength={40}
              onChange={(e) => {
                e.target.value = e.target.value.toUpperCase();
              }}
            />
          </label>
          <label>
            Email
            <input
              name="email"
              type="email"
              maxLength={50}
              pattern="^[\w.-]+@[\w.-]+\.\w{2,}$"
              title="email is invalid"
              onBlur={(e) => e.target.reportValidity()}
            />
          </label>
          <label>
            CPF
            <input name="cpf" type="text" maxLength={11} />
          </label>
        </fieldset>

        <fieldset>
          <legend>Dados de endereço</legend>

          <label>
            Endereço
            <input
              name="endereço"
              type="text"
              maxLength={200}
              onChange={(e) => {
                e.target.value = e.target.value.replace(/[^\w\s]/gi, "");
              }}
            />
          </label>
          <label>
            Cidade
            <input
              name="cidade"
              type="text"
              maxLength={28}
              onBlur={(e) => {
                if (/^\d/.test(e.target.value)) {
                  e.target.value = "";
                }
              }}
            />
          </label>
          <br />
          <label>
            Estado
            <select name="estado">
              {countryStates.map((estado, index) => (
                <option key={index}>{estado}</option>
              ))}
            </select>
          </label>
          <label>
            <input type="radio" name="tipo" value="Casa" defaultChecked />
            Casa
          </label>
          <label>
            <input type="radio" name="tipo" value={"Apartamento"} />
            Apartamento
          </label>
        </fieldset>
        <fieldset>
          <legend>Dados do último emprego</legend>

          <label>
            Resumo do currículo
            <textarea name="resumo" maxLength={1000} />
          </label>
          <br />
          <label>
            Cargo
            <input
              name="cargo"
              type="text"
              maxLength={40}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                if (!el.dataset.alertShown) {
                  alert("Preencha com cuidado esta informação.");
                  el.dataset.alertShown = "true";
                }
              }}
            />
          </label>
          <label>
            Descrição do cargo
            <textarea name="descrição" maxLength={500} />
          </label>
        </fieldset>

        <button type="submit">Enviar</button>
        <button type="button" onClick={() => setFormData(null)}>
          Limpar
        </button>
      </form>

      {formData && (
        <div>
          <h2>Dados consolidados</h2>
          {Object.values(formData).map((value, index) => (
            <div key={index}>{value}</div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
