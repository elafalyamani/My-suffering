import { useState } from 'react'

const Phonebook = () => {
  const [persons, setPersons] = useState([
    { name: 'أحمد محمد', number: '0912345678', id: 1 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    if (persons.find(p => p.name === newName)) {
      alert('${newName} موجود مسبقاً')
      return
    }
    const personObject = { name: newName, number: newNumber, id: persons.length + 1 }
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  const personsToShow = persons.filter(p => 
    p.name.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div>
      <h2>دليل الهاتف</h2>
      <div>البحث: <input value={filter} onChange={(e) => setFilter(e.target.value)} /></div>
      <h3>إضافة جهة اتصال</h3>
      <form onSubmit={addPerson}>
        <div>الاسم: <input value={newName} onChange={(e) => setNewName(e.target.value)} /></div>
        <div>الرقم: <input value={newNumber} onChange={(e) => setNewNumber(e.target.value)} /></div>
        <button type="submit">إضافة</button>
      </form>
      <h3>الأرقام</h3>
      {personsToShow.map(p => <p key={p.id}>{p.name}: {p.number}</p>
      )}
    </div>
  )
}
export default Phonebook