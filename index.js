const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

app.post('/webhook', (req, res) => {
  const events = req.body.events
  console.log('📩 Event from LINE:', events)
  res.status(200).send('OK')
})

app.get('/', (req, res) => {
  res.send('Hello from LINE Webhook!')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
