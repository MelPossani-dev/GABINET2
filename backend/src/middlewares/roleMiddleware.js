function roleMiddleware(requiredLevel) {
    return (req, res, next) => {
      if (req.user && req.user.nivel_acesso >= requiredLevel) {
        next();
      } else {
        res.status(403).json({ message: 'Acesso negado. Nível de acesso insuficiente.' });
      }
    };
  }
  
  module.exports = roleMiddleware;