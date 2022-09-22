import React from "react";
import Input from "./Forms/Input";

const FisioOrtopedia = () => {
  const [nome, setNome] = React.useState("");
  return (
    <div>
      <h1>Anamnese - Fisioterapia Ortopédica</h1>
      <form>
        <Input label="Nome" type="text" name="nome" />
      </form>
    </div>
  );
};

export default FisioOrtopedia;
