import express from 'express'
import config from '../config'
import movies from './routes/movies'

const app = express();

app.use(express.json());

app.use('/api/movies', movies);

app.listen(config.port, () =>
  console.log(`Server started on port ${config.port}`)
);
