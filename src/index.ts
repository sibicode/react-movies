import express from 'express'
import path from 'path'
import config from '../config'
import top from './routes/top'
import discover from './routes/discover'
import upcoming from './routes/upcoming'
import popular from './routes/popular'
import details from './routes/details'
import search from './routes/search'

const app = express()

app.use(express.json())
app.use(express.static(path.join(__dirname, '../', 'client', 'build')))

app.use('/api/movies/top', top)
app.use('/api/movies/discover', discover)
app.use('/api/movies/upcoming', upcoming)
app.use('/api/movies/popular', popular)
app.use('/api/movies/:id', details)
app.use('/api/search', search)

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'client', 'build', 'index.html'))
})

app.listen(config.port, () =>
  console.log(`Server started on port ${config.port}`)
)
