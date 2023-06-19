import { useState } from 'react'
import './style.css'
import equalsImg from '../assets/Equals.svg'


const Home = () => {

  const [number, setNumber] = useState(0);
  const [oldNumber, setOldNumber] = useState(0);
  const [operator, setOperator] = useState();
  const [history, setHistory] = useState()
  const inputNumber = (e) => {
    let input = e.target.value
    if (number === 0) {
      setNumber(input);
    } else {
      setNumber(number + input);
    }
  }


  const clear = () => {
    setNumber(0)
    setOldNumber(0)
    setHistory()
    setOperator()
  }


  const porcentagem = () => {
    setNumber(number / 100)
  }


  const mudarSinal = () => {
    if (number > 0) {
      setNumber(-number)
    } else {
      setNumber(Math.abs(number))
    }
  }



  const handleOperator = (e) => {
    let operatorInput = e.target.value
    setOperator(operatorInput)
    setOldNumber(number)
    setNumber(0)
  }

  const calculate = () => {
    setHistory(number)
    if (operator === "/") {
      setNumber(oldNumber / number)
    } else if (operator === "X") {
      setNumber(oldNumber * number)
    } else if (operator === "-") {
      setNumber(oldNumber - number)
    } else if (operator === "+") {
      setNumber(Number(oldNumber) + Number(number))
    }

  }
  return (
    <main className="homeSection">

      <section className='calculo'>
        <p>{oldNumber} {operator} {history}</p>
        <div>
          <img src={equalsImg} alt="equals img" />
          <h2>{number}</h2>
        </div>
      </section>
      <section className='secaoTeclado'>
        <button className='botaoLimpar' onClick={clear}>CE</button>
        <button>C</button>
        <button onClick={porcentagem}>%</button>
        <button className='operador' onClick={handleOperator} value={"/"}>/</button>

        <button onClick={inputNumber} value={7}>7</button>
        <button onClick={inputNumber} value={8} >8</button>
        <button onClick={inputNumber} value={9} >9</button>
        <button className='operador' onClick={handleOperator} value={"X"}>x</button>

        <button onClick={inputNumber} value={4} >4</button>
        <button onClick={inputNumber} value={5} >5</button>
        <button onClick={inputNumber} value={6} >6</button>
        <button className='operador' onClick={handleOperator} value={"-"}>-</button>

        <button onClick={inputNumber} value={1} >1</button>
        <button onClick={inputNumber} value={2} >2</button>
        <button onClick={inputNumber} value={3} >3</button>
        <button className='operador' onClick={handleOperator} value={"+"}>+</button>

        <button onClick={mudarSinal}>+/-</button>
        <button onClick={inputNumber} value={0} >0</button>
        <button onClick={inputNumber} value={"."}>,</button>
        <button className='equalButton' onClick={calculate}>=</button>

      </section >
    </main>
  )
}
export default Home