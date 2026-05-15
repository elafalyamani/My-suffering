import { useState } from "react";

const Unicafe = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;
  const average = total ? (good - bad) / total : 0;
  const positive = total ? (good / total) * 100 : 0;

  return (
    <div>
      <h1>أعطنا رأيك</h1>

      <button onClick={() => setGood(good + 1)}>جيد</button>
      <button onClick={() => setNeutral(neutral + 1)}>عادي</button>
      <button onClick={() => setBad(bad + 1)}>سيء</button>

      <h2>الإحصائيات</h2>

      {total === 0 ? (
        <p>لم يتم جمع أي آراء بعد</p>
      ) : (
        <table>
          <tbody>
            <tr><td>جيد</td><td>{good}</td></tr>
            <tr><td>عادي</td><td>{neutral}</td></tr>
            <tr><td>سيء</td><td>{bad}</td></tr>
            <tr><td>المجموع</td><td>{total}</td></tr>
            <tr><td>المتوسط</td><td>{average.toFixed(2)}</td></tr>
            <tr><td>الإيجابي</td><td>{positive.toFixed(1)}%</td></tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Unicafe;