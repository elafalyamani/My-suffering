import { useState } from 'react'

const Anecdotes = () => {
  const anecdotes = [
    "إذا كان تنقيح الأخطاء هو عملية إزالة الأخطاء، فإن البرمجة هي عملية وضعها.",
    "أفضل طريقة للبدء هي أن تتوقف عن الكلام وتبدأ بالعمل.",
    "أي أحمق يمكنه كتابة كود يفهمه الكمبيوتر. المبرمجون الجيدون يكتبون كوداً يفهمه البشر.",
    "التحسين المبكر هو أصل كل شر.",
    "قبل أن تعمل البرمجيات بشكل جيد، يجب أن تعمل أولاً.",
    "البساطة هي أقصى درجات التطور.",
    "أفضل رسالة خطأ هي تلك التي لا تظهر أبداً.",
    "أصعب جزء في البرمجة هو تسمية الأشياء."
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  const next = () => {
    const random = Math.floor(Math.random() * anecdotes.length)
    setSelected(random)
  }

  const vote = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
  }

  const maxVotes = Math.max(...votes)
  const mostVoted = votes.indexOf(maxVotes)

  return (
    <div>
      <h1>حكمة اليوم</h1>
      <p>"{anecdotes[selected]}"</p>
      <p>عدد الأصوات: {votes[selected]}</p>

      <button onClick={vote}>تصويت</button>
      <button onClick={next}>حكمة أخرى</button>

      <h2>الحكمة الأكثر شعبية</h2>
      {maxVotes > 0 ? (
        <div>
          <p>"{anecdotes[mostVoted]}"</p>
          <p>بـ {maxVotes} أصوات</p>
        </div>
      ) : (
        <p>لم يتم التصويت بعد</p>
      )}
    </div>
  )
}

export default Anecdotes