import { useState, useRef } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  const countUp = () => {
    const newCount = count + 1
    setCount(newCount)
  }

  const countDown = () => {
    const newCount = count - 1
    setCount(newCount)
  }

  const countReset = () => {
    const newCount = 0
    setCount(newCount)
  }

  const countNumRef = useRef()

  const countNumAdd = () => {
    const addNum = parseInt(countNumRef.current.value)
    const newCount = count + addNum
    setCount(newCount)
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>カウンター</h1>
      <p>現在のカウント：{count}</p>
      <button onClick={countUp}>+1</button>
      <button onClick={countDown}>-1</button>
      <button onClick={countReset}>リセット</button>
      <input type="number" ref={countNumRef} />
      <button onClick={countNumAdd}>値を足す</button>
    </div>
  )
}

export default Counter