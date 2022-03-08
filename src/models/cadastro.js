function validarCpf(cpf) {
  let validacao = { valido: true, texto: "" };
  if (cpf.length !== 11) {
    validacao = { valido: false, texto: "CPF deve ter 11 caracteres!" };
  }

  return validacao;
}

function validarSenha(senha) {
  let validacao = { valido: true, texto: "" };
  if (senha.length < 4 || senha.length > 72) {
    validacao = {
      valido: false,
      texto: "Senha deve ter entre 4 e 72 caracteres!",
    };
  }

  return validacao;
}
function validarNome(nome) {
  let validacao = { valido: true, texto: "" };
  if (nome.length < 4) {
    validacao = {
      valido: false,
      texto: "Nome deve ter pelo menos 4 caracteres!",
    };
  }

  return validacao;
}
export { validarCpf, validarSenha, validarNome };
