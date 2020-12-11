import express from 'express'

const app = express()

app.get('/', (_req, res) => {
  res.send('olá mundo')
})

app.listen(8080, () => {
  console.log('server online')
})
