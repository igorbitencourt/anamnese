import React from "react";
import Button from "./Forms/Button";
import Input from "./Forms/Input";

const FisioOrtopedia = () => {
  const [form, setForm] = React.useState({
    nome: "",
    idade: "",
    sexo: "",
    estadoCivil: "",
    profissao: "",
    endereco: "",
    telefone: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div>
      <h1>Anamnese - Fisioterapia Ortopédica</h1>
      <form onSubmit={handleSubmit}>
        <h2>Dados Pessoais</h2>
      </form>
    </div>
  );
};

export default FisioOrtopedia;
