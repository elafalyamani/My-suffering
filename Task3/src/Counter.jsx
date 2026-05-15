import { useState } from 'react'

const Display = ({ counter }) => <h2>القيمة: {counter}</h2>

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>{text}</button>
)

const Counter = () => {
  const [counter, setCounter] = useState(0)

  const increase = () => setCounter(counter + 1)
  const decrease = () => setCounter(counter - 1)
  const reset = () => setCounter(0)

  return (
    <div>
      <h1>تطبيق العداد</h1>
      <Display counter={counter} />
      <Button onClick={increase} text="زيادة +1" />
      <Button onClick={decrease} text="نقصان -1" />
      <Button onClick={reset} text="تصفير" />
    </div>
  )
}

export default Counter