import React from 'react'

// 1. مكون العنوان
const Header = (props) => {
  return <h1>{props.course}</h1>
}

// 2. مكون الجزء الواحد
const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  )
}

// 3. مكون المحتوى (بيجمع الأجزاء)
const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} exercises={props.exercises1} />
      <Part part={props.part2} exercises={props.exercises2} />
      <Part part={props.part3} exercises={props.exercises3} />
    </div>
  )
}

// 4. مكون المجموع
const Total = (props) => {
  return (
    <p>
      <b>مجموع التمارين: {props.exercises1 + props.exercises2 + props.exercises3}</b>
    </p>
  )
}

// 5. تمرين بطاقة الطالب (لتحقيق متطلبات التسليم كاملة)
const StudentCard = (props) => {
  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px 0' }}>
      <h3>بطاقة طالب: {props.name}</h3>
      <p>التخصص: {props.major}</p>
      <p>المعدل: {props.gpa}</p>
    </div>
  )
}

// المكون الأساسي
const App = () => {
  const course = 'تطوير تطبيقات Half Stack'
  const part1 = 'أساسيات React'
  const exercises1 = 10
  const part2 = 'استخدام props لتمرير البيانات'
  const exercises2 = 7
  const part3 = 'حالة المكون'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content 
        part1={part1} exercises1={exercises1}
        part2={part2} exercises2={exercises2}
        part3={part3} exercises3={exercises3}
      />
      <Total 
        exercises1={exercises1} 
        exercises2={exercises2} 
        exercises3={exercises3} 
      />
      
      <hr />
      <h2>بيانات الطلاب:</h2>
      <StudentCard name="إيلاف" major="CS" gpa={3.9} />
      <StudentCard name="ليليان" major="IT" gpa={3.5} />
      <StudentCard name="فاطمة" major="css" gpa={8} />
    </div>
  )
}

export default App