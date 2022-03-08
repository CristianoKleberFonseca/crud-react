import { Container, Typography } from "@mui/material";
import React, { Component } from "react";
import "./App.css";
import FormularioCadastro from "./Components/FormularoCadastro/FormularioCadastro";
import "@fontsource/roboto";
import { validarCpf, validarSenha, validarNome } from "./Modelos/Cadastro";
import ValidacoesCadasro from "./Contextos/ValidacoesCadastro";

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">
          Formulário de Cadastro
        </Typography>
        <ValidacoesCadasro.Provider
          value={{
            cpf: validarCpf,
            senha: validarSenha,
            nome: validarNome,
          }}
        >
          <FormularioCadastro aoEnviar={enviar} />
        </ValidacoesCadasro.Provider>
      </Container>
    );
  }
}

function enviar(dados) {
  console.log(dados);
}

export default App;
