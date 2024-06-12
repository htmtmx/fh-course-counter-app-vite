import PropTypes from 'prop-types';
import { useState } from 'react';

export const CounterApp = ({ title = 'No se ha proporcionado un título', value = 0 }) => {

  const [counter, setCounter] = useState(value);

  const handleClick = (accionType) => {
    switch (accionType) {
      case 1:
        setCounter((c) => c + 1);
      break;
      case 2:
        setCounter(value);
      break;
      case 3:
        setCounter((c) => c - 1);
      break;
      default:
        break;
    }
  }

  return (
    <>
      <h1>{ title }</h1>
      <h2>{ counter }</h2>
      <button
        onClick={()=>handleClick(1)}
      >
        +1
      </button>
      <button
        onClick={()=>handleClick(2)}
      >
        Reset
      </button>
      <button
        onClick={()=>handleClick(3)}
      >
        -1
      </button>
    </>
  )
}

CounterApp.propTypes = {
  title: PropTypes.string,
  value: PropTypes.number.isRequired,
}