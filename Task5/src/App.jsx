import { useState, useEffect } from 'react'
import personService from './services/persons'

// 1. مكون الإشعارات (لرسائل النجاح والخطأ) [cite: 22]
const Notification = ({ message, type }) => {
  if (!message) return null
  const style = {
    color: type === 'error' ? 'red' : 'green',
    background: '#f0f0f0',
    fontSize: '20px',
    border: `2px solid ${type === 'error' ? 'red' : 'green'}`,
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '15px',
    textAlign: 'center'
  }
  return <div style={style}>{message}</div>
}

// 2. مكون البحث (Filter) [cite: 31]
const Filter = ({ value, onChange }) => (
  <div style={{ marginBottom: '10px' }}>
    البحث عن اسم: <input value={value} onChange={onChange} />
  </div>
)

// 3. مكون النموذج (Form) [cite: 37]
const PersonForm = ({ onSubmit, name, number, onNameChange, onNumberChange }) => (
  <form onSubmit={onSubmit} style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px' }}>
    <div>الاسم: <input value={name} onChange={onNameChange} /></div>
    <br />
    <div>الرقم: <input value={number} onChange={onNumberChange} /></div>
    <br />
    <button type="submit">إضافة / تحديث</button>
  </form>
)

// 4. المكون الأساسي (App) [cite: 48]
const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [message, setMessage] = useState(null)
  const [msgType, setMsgType] = useState('success')

  // جلب البيانات من السيرفر عند تشغيل التطبيق [cite: 55]
  useEffect(() => {
    personService.getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  // دالة لإظهار الإشعارات [cite: 57]
  const notify = (text, type = 'success') => {
    setMessage(text)
    setMsgType(type)
    setTimeout(() => setMessage(null), 5000)
  }

  const addPerson = (event) => {
    event.preventDefault()
    const existingPerson = persons.find(p => p.name === newName)

    if (existingPerson) {
      // تحديث الرقم إذا كان الاسم موجوداً [cite: 67]
      if (window.confirm(`${newName} موجود بالفعل، هل تريد تحديث الرقم؟)`)) {
        const updatedPerson = { ...existingPerson, number: newNumber }
        personService.update(existingPerson.id, updatedPerson)
          .then(returnedPerson => {
            setPersons(persons.map(p => p.id !== existingPerson.id ? p : returnedPerson))
            notify(`م تحديث رقم ${newName} بنجاح`)
            setNewName('')
            setNewNumber('')
          })
          .catch(error => {
            notify(`أ: ${newName} قد حُذف بالفعل من السيرفر,`, 'error')
            setPersons(persons.filter(p => p.id !== existingPerson.id))
          })
      }
    } else {
      // إضافة اسم جديد [cite: 85]
      const personObject = { name: newName, number: newNumber }
      personService.create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          notify(`ت إضافة ${newName} بنجاح)`)
          setNewName('')
          setNewNumber('')
        })
    }
  }

  const deletePerson = (id, name) => {
    // حذف جهة اتصال [cite: 93]
    if (window.confirm(`ل أنت متأكد من حذف ${name}؟)`)) {
      personService.remove(id)
        .then(() => {
          setPersons(persons.filter(p => p.id !== id))
          notify(`م حذف ${name} بنجاح)`)
        })
    }
  }

  const personsToShow = persons.filter(p =>
    p.name.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div style={{ direction: 'rtl', padding: '20px' }}>
      <h2>دليل الهاتف - الوظيفة الخامسة</h2>
      
      <Notification message={message} type={msgType} />
      
      <Filter value={filter} onChange={(e) => setFilter(e.target.value)} />
      
      <h3>إضافة جهة اتصال</h3>
      <PersonForm 
        onSubmit={addPerson}
        name={newName}
        number={newNumber}
        onNameChange={(e) => setNewName(e.target.value)}
        onNumberChange={(e) => setNewNumber(e.target.value)}
      />
      <h3>قائمة الأرقام</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {personsToShow.map(p => (
          <li key={p.id} style={{ marginBottom: '10px' }}>
            {p.name} - {p.number} 
            <button onClick={() => deletePerson(p.id, p.name)} style={{ marginRight: '15px' }}>حذف</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App