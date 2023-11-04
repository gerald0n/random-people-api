import express, { json } from 'express'
import personRouter from '../src/routes/person-route'

const app = express()
app.use(json())
app.use(personRouter)

app.listen(5000, () => console.log('Servidor rodando!'))
