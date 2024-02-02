import React from 'react';
import PropTypes from 'prop-types';

const FirstApp = ( {name, title, subtitle} ) => {

  return (
    <>
      <h1> { title }</h1>
      {/* <code>{JSON.stringify( newMesage)}</code> */}
      <p>{ subtitle }</p>
      <p>{ name }</p>
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.º,
  subtitle: PropTypes.string.isRequired
}
FirstApp.defaultProps = {
  name: 'Priscilla Rojas',
  // title: 'no hay titulo',
  subtitle: 'no hay subtitulo'
}
export default FirstApp