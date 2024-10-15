const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const bodyParser = require('body-parser');

const app = express();

// Middlewares
app.use(cors());
app.use(helmet());
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100 // limite de 100 requisições por janela
});
app.use(limiter);

// Rotas
const cidadaoRoutes = require('./routes/cidadaoRoutes');
const funcionarioRoutes = require('./routes/funcionarioRoutes');
const secretariaRoutes = require('./routes/secretariaRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');
const solicitacaoRoutes = require('./routes/solicitacaoRoutes');
const auditoriaRoutes = require('./routes/auditoriaRoutes');

app.use('/api/cidadaos', cidadaoRoutes);
app.use('/api/funcionarios', funcionarioRoutes);
app.use('/api/secretarias', secretariaRoutes);
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/solicitacoes', solicitacaoRoutes);
app.use('/api/auditoria', auditoriaRoutes);

// Tratamento de erros
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo deu errado!');
});

module.exports = app;