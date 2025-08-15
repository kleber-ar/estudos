import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

function Home() {
  const navigate = useNavigate();

  return (
    <section>
      <Button
        label="Preencher Formulário"
        moreClasses="text-center is-info is-large is-fullwidth"
        type="button"
        onClick={() => navigate("/personal-form")}
      />
    </section>
  );
}

export default Home;
