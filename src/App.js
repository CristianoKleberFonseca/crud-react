import { Container, Typography } from "@mui/material";
import React, { Component } from "react";
import "./App.css";
import FormularioCadastro from "./Components/FormularoCadastro/FormularioCadastro";
import "@fontsource/roboto";
import { validarCpf, validarSenha, validarNome } from "./models/cadastro";

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">
          Formulário de Cadastro
        </Typography>
        <FormularioCadastro
          aoEnviar={enviar}
          validacoes={{ cpf: validarCpf, senha: validarSenha, nome:validarNome }}
        />
      </Container>
    );
  }
}

function enviar(dados) {
  console.log(dados);
}

export default App;
