import PropTypes from 'prop-types'

const Button = (props) => {
  return ( 
  <button className="btn"
//   Reçois la function on click du parents et viens définir que au click le bouton doit faire la function onClick passer en props
  onClick={props.onClick}
   style={{backgroundColor:props.color}}>
       {props.text}
   </button>
  )
}

Button.defaultProps= {
    color:'steelblue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func.isRequired,
}

export default Button