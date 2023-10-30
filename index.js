import express from 'express';

const app = express()
app.use(express.json()) // for parsing application/json

app.get('/', (req, res) => {
  res.json({message: 'Hello, this is get response'})
})

app.post('/', (req, res) => {
  res.json({message: 'Hello, this is post response'})
})

app.put('/', (req, res) => {
  res.json({message: 'Hello, this is put response'})
})

app.patch('/', (req, res) => {
  res.json({message: 'Hello, this is patch response'})
})

app.delete('/', (req, res) => {
  res.json({message: 'Hello, this is delete response'})
})

//port 5000 on apple OS is not available because it is used by the system
app.listen(8080, () => {
  console.log('Connect 8080 port')
})