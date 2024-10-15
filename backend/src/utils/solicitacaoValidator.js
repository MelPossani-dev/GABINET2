const validateSolicitacao = (solicitacao) => {
    const errors = [];
  
    if (!solicitacao.cidadao_id) {
      errors.push('ID do cidadão é obrigatório');
    }
  
    if (!solicitacao.assunto) {
      errors.push('Assunto é obrigatório');
    }
  
    if (!solicitacao.solicitacao) {
      errors.push('Descrição da solicitação é obrigatória');
    }
  
    if (!solicitacao.secretaria_id) {
      errors.push('ID da secretaria é obrigatório');
    }
  
    if (solicitacao.andamento && !['ABERTA', 'EM_ANALISE', 'CONCLUIDA', 'ARQUIVADA'].includes(solicitacao.andamento)) {
      errors.push('Andamento inválido');
    }
  
    return errors;
  };
  
  module.exports = {
    validateSolicitacao
  };