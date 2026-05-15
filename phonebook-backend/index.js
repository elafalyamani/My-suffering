const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())

let persons = [
  { id: "1", name: "أحمد محمد", number: "0912345678" },
  { id: "2", name: "سارة علي", number: "0923456789" },
  { id: "3", name: "خالد حسن", number: "0934567890" }
]

// جلب جميع الأرقام
app.get('/api/persons', (req, res) => {
  res.json(persons)
})

// إضافة رقم جديد
app.post('/api/persons', (req, res) => {
  const body = req.body
  const person = {
    id: String(Math.floor(Math.random() * 1000000)),
    name: body.name,
    number: body.number
  }
  persons = persons.concat(person)
  res.json(person)
})

// حذف رقم
app.delete('/api/persons/:id', (req, res) => {
  persons = persons.filter(p => p.id !== req.params.id)
  res.status(204).end()
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})