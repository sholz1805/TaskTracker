import Button from './Button'
import PropTypes from 'prop-types'

const Header = ({title}) => {
  const onClick = () => {
    console.log('Click')
  }
    
  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button color='green' text='Add' onClick={onClick}/>
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.prototypes = {
  title: PropTypes.string.isRequired,
}

export default Header
 