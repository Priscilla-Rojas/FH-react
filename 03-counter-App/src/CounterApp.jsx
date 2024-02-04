import { useState } from 'react';
import PropTypes from 'prop-types';
// import { getImagen } from './base--pruebas/11-async-await';


export const CounterApp = ({value}) => {

  const [ counter, setCounter] = useState( value );
  // console.log(getImagen)

  const handleAdd = () => setCounter( counter + 1 )
  const handleSustract = () => setCounter( counter - 1 )
  const handleReset = () => setCounter( value )


  return (
    <>
      <h1> CounterApp </h1>
      <h2> { counter } </h2>
      <button onClick={ handleAdd }> +1 </button>
      <button onClick={ handleSustract }> -1 </button>
      <button aria-label='btn-reset' onClick={ handleReset }> Reset </button>
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired
}