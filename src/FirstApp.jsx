import PropTypes from 'prop-types';

export const FirstApp = ({ name='Cesar Pineda', title='Sin título', subtitle='Sin subtítulo' }) => {

  return (
    <>
      <h1 data-testid='test-title'>{ title }</h1>
      <span>{ name }</span>
      <p>{ subtitle }</p>
      <p>{ subtitle }</p>
    </>
  )
}

FirstApp.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
}

//! defaultProps will be deprecated in the future
//! It's better to use the default values in the parameters

// FirstApp.defaultProps = {
//   name: 'Cesar Pineda',
//   subtitle: 'Sin subtitulo',
//   title: 'Sin titulo',
// }