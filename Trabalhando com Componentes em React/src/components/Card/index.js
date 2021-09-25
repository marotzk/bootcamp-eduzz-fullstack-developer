import { useState } from 'react';
import Button from '../Button'

const Card = () => {
  var [valor, setValor] = useState(0)

  function increment(){
    setValor(valor + 1);
  }

  function decrement(){
    setValor(valor - 1);
  }

  return(
    <div className="card">
      <div className="card-header">
        <h2>Incremento / Decremento</h2>
      </div>
      <div className="card-body">
        <Button className="btn btn-success" onClick={increment}> + </Button>
        <Button className="btn btn-danger" onClick={decrement}> - </Button>
        <span>{valor}</span>
      </div>
    </div>
  )
}

export default Card;