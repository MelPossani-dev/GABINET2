const validateUsuario = (usuario, isUpdate = false) => {
    const errors = [];
  
    if (!usuario.nome) {
      errors.push('Nome é obrigatório');
    }
  
    if (!usuario.email) {
      errors.push('Email é obrigatório');
    } else if (!/\S+@\S+\.\S+/.test(usuario.email)) {
      errors.push('Email inválido');
    }
  
    if (!isUpdate && !usuario.senha) {
      errors.push('Senha é obrigatória');
    } else if (!isUpdate && usuario.senha.length < 6) {
      errors.push('A senha deve ter pelo menos 6 caracteres');
    }
  
    if (!usuario.nivel_acesso) {
      errors.push('Nível de acesso é obrigatório');
    } else if (![1, 2, 3].includes(Number(usuario.nivel_acesso))) {
      errors.push('Nível de acesso inválido');
    }
  
    return errors;
  };
  
  module.exports = {
    validateUsuario
  };