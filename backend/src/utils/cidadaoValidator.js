const validateCidadao = (cidadao) => {
    const errors = [];
  
    if (!cidadao.nome) {
      errors.push('Nome é obrigatório');
    }
  
    if (!cidadao.data_nasc) {
      errors.push('Data de nascimento é obrigatória');
    }
  
    if (!cidadao.rg) {
      errors.push('RG é obrigatório');
    } else if (!/^\d{2}\.\d{3}\.\d{3}-\d{1}$/.test(cidadao.rg)) {
      errors.push('Formato de RG inválido');
    }
  
    if (!cidadao.cpf) {
      errors.push('CPF é obrigatório');
    } else if (!/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cidadao.cpf)) {
      errors.push('Formato de CPF inválido');
    }
  
    if (!cidadao.cep) {
      errors.push('CEP é obrigatório');
    } else if (!/^\d{5}-\d{3}$/.test(cidadao.cep)) {
      errors.push('Formato de CEP inválido');
    }
  
    if (!cidadao.endereco) {
      errors.push('Endereço é obrigatório');
    }
  
    if (!cidadao.numero) {
      errors.push('Número é obrigatório');
    }
  
    if (!cidadao.bairro) {
      errors.push('Bairro é obrigatório');
    }
  
    if (!cidadao.cidade) {
      errors.push('Cidade é obrigatória');
    }
  
    if (!cidadao.estado) {
      errors.push('Estado é obrigatório');
    } else if (!/^[A-Z]{2}$/.test(cidadao.estado)) {
      errors.push('Estado deve ser uma sigla de duas letras maiúsculas');
    }
  
    if (!cidadao.email) {
      errors.push('Email é obrigatório');
    } else if (!/\S+@\S+\.\S+/.test(cidadao.email)) {
      errors.push('Formato de email inválido');
    }
  
    if (!cidadao.telefone) {
      errors.push('Telefone é obrigatório');
    } else if (!/^\(\d{2}\)\s\d{4,5}-\d{4}$/.test(cidadao.telefone)) {
      errors.push('Formato de telefone inválido');
    }
  
    return errors;
  };
  
  module.exports = {
    validateCidadao
  };