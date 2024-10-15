const validateFuncionario = (funcionario) => {
    const errors = [];
  
    if (!funcionario.nome) {
      errors.push('Nome é obrigatório');
    }
  
    if (!funcionario.data_nasc) {
      errors.push('Data de nascimento é obrigatória');
    }
  
    if (!funcionario.cpf) {
      errors.push('CPF é obrigatório');
    } else if (!/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(funcionario.cpf)) {
      errors.push('CPF inválido');
    }
  
    if (!funcionario.cep) {
      errors.push('CEP é obrigatório');
    } else if (!/^\d{5}-\d{3}$/.test(funcionario.cep)) {
      errors.push('CEP inválido');
    }
  
    if (!funcionario.endereco) {
      errors.push('Endereço é obrigatório');
    }
  
    if (!funcionario.numero) {
      errors.push('Número é obrigatório');
    }
  
    if (!funcionario.bairro) {
      errors.push('Bairro é obrigatório');
    }
  
    if (!funcionario.cidade) {
      errors.push('Cidade é obrigatória');
    }
  
    if (!funcionario.estado) {
      errors.push('Estado é obrigatório');
    }
  
    if (!funcionario.email) {
      errors.push('Email é obrigatório');
    } else if (!/\S+@\S+\.\S+/.test(funcionario.email)) {
      errors.push('Email inválido');
    }
  
    if (!funcionario.telefone) {
      errors.push('Telefone é obrigatório');
    } else if (!/^\(\d{2}\)\s\d{4,5}-\d{4}$/.test(funcionario.telefone)) {
      errors.push('Telefone inválido');
    }
  
    return errors;
  };
  
  module.exports = {
    validateFuncionario
  };