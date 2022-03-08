import { Button, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import ValidacoesCadasro from "../../Contextos/ValidacoesCadastro";

function DadosUsuario({ aoEnviar }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erros, setErros] = useState({ senha: { valido: true, texto: "" } });
  const validacoes = useContext(ValidacoesCadasro);

  function validarCampos(e) {
    const { name, value } = e.target;
    const novoEstado = { ...erros };
    novoEstado[name] = validacoes[name](value);
    setErros(novoEstado);
  }

  function possoEnviar() {
    for (let campo in erros) {
      if (!erros[campo].valido) {
        return false;
      }
    }
    return true;
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (possoEnviar()) {
          aoEnviar({ email, senha });
        }
      }}
    >
      <TextField
        id="email"
        label="Email"
        type="email"
        variant="outlined"
        margin="normal"
        value={email}
        fullWidth
        required
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <TextField
        id="senha"
        name="senha"
        label="Senha"
        type="password"
        variant="outlined"
        margin="normal"
        value={senha}
        error={!erros.senha.valido}
        helperText={erros.senha.texto}
        fullWidth
        required
        onChange={(e) => {
          setSenha(e.target.value);
        }}
        onBlur={validarCampos}
      />

      <Button type="submit" variant="contained" color="primary">
        Próximo
      </Button>
    </form>
  );
}

export default DadosUsuario;
