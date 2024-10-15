
const validateSecretaria = (secretaria) => {
    const errors = [];
  
    if (!secretaria.nome_secretaria) {
      errors.push('Nome da secretaria é obrigatório');
    }
  
    if (!secretaria.secretario) {
      errors.push('Nome do secretário é obrigatório');
    }
  
    if (!secretaria.cpf) {
      errors.push('CPF é obrigatório');
    } else if (!/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(secretaria.cpf)) {
      errors.push('Formato de CPF inválido');
    }
  
    if (!secretaria.cep) {
      errors.push('CEP é obrigatório');
    } else if (!/^\d{5}-\d{3}$/.test(secretaria.cep)) {
      errors.push('Formato de CEP inválido');
    }
  
    if (!secretaria.endereco) {
      errors.push('Endereço é obrigatório');
    }
  
    if (!secretaria.numero) {
      errors.push('Número é obrigatório');
    }
  
    if (!secretaria.bairro) {
      errors.push('Bairro é obrigatório');
    }
  
    if (!secretaria.cidade) {
      errors.push('Cidade é obrigatória');
    }
  
    if (!secretaria.estado) {
      errors.push('Estado é obrigatório');
    } else if (!/^[A-Z]{2}$/.test(secretaria.estado)) {
      errors.push('Estado deve ser uma sigla de duas letras maiúsculas');
    }
  
    if (!secretaria.email) {
      errors.push('Email é obrigatório');
    } else if (!/\S+@\S+\.\S+/.test(secretaria.email)) {
      errors.push('Formato de email inválido');
    }
  
    if (!secretaria.telefone) {
      errors.push('Telefone é obrigatório');
    } else if (!/^\(\d{2}\)\s\d{4,5}-\d{4}$/.test(secretaria.telefone)) {
      errors.push('Formato de telefone inválido');
    }
  
    return errors;
  };
  
  module.exports = {
    validateSecretaria
  };