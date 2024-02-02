import React from 'react';
import PropTypes from 'prop-types';

const FirstApp = ( {name, title, subtitle} ) => {

  return (
    <>
      <h1 data-testid='test-title'>{ title }</h1>
      <p>{ subtitle }</p>
      <p>{ name }</p>
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
}
FirstApp.defaultProps = {
  name: 'Priscilla Rojas',
  title: 'no hay titulo',
  subtitle: 'no hay subtitulo'
}
export default FirstApp