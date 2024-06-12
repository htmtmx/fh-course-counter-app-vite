import PropTypes from 'prop-types';
import { useState } from 'react';

export const CounterApp = ({ title = 'No se ha proporcionado un título', value = 0 }) => {

  const [counter, setCounter] = useState(value);

  const handleClick = () => {
    //! dos opciones para cambiar el valor de 
    // setValueCount(valueCount + 1)
    setCounter((c) => c + 1);
  }

  return (
    <>
      <h1>{ title }</h1>
      <h2>{ counter }</h2>
      <button
        onClick={ handleClick}
      >
        +1
      </button>
    </>
  )
}

CounterApp.propTypes = {
  title: PropTypes.string,
  value: PropTypes.number.isRequired,
}