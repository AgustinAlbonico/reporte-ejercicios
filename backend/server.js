const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// database connection
const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
try {
  mongoose.connect(process.env.DB, connectionParams);
  console.log("Conectado correctamente a la base de datos");
} catch (error) {
  console.log(error);
  console.log("No se pudo conectar con la base de datos");
}

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/api/exercises', exercisesRouter);
app.use('/api/users', usersRouter);

app.listen(port, () => {
    console.log(`Server corriendo en el puerto: ${port}`);
});
