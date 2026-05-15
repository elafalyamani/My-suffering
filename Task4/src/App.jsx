import Course from './Course'
import Phonebook from './Phonebook'
import Countries from './Countries'

const App = () => {
  const course = {
    id: 1,
    name: 'تطوير تطبيقات Half Stack',
    parts: [
      { name: 'Fundamentals of React', exercises: 10, id: 1 },
      { name: 'Using props to pass data', exercises: 7, id: 2 },
      { name: 'State of a component', exercises: 14, id: 3 }
    ]
  }

  return (
    <div style={{ direction: 'rtl', padding: '20px', fontFamily: 'Arial' }}>
      <h1 style={{ textAlign: 'center' }}>الوظيفة الرابعة الله ياخدها جننتني - إيلاف</h1>
      <Course course={course} />
      <hr />
      <Phonebook />
      <hr />
      <Countries />
    </div>
  )
}

export default App