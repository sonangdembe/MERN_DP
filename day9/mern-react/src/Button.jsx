
import PropTypes from 'prop-types'
// this is one components
const Button =(props) =>{
   // 
   console.log(props)
   return (
      // reusing the code i.e buttonVitraKoContent to display the Login,logout and register that are present in Button.jsx
      <>
      <button>{props.buttonVitraKoContent}</button>
      <button>{props.arkoContent}</button>
      </>
      )
   }
   // if we forget to give the values in buttonVitraKoContent in app.jsx then it wil display
   // Button.defaultProps = {
   //    buttonVitraKoContent : "Yo_default_huda_aauxa",
   //    arkoContent : "Yo_pani_default_huda_aauxa"
   // }
   
// To check if string is present or not in arkoContent and must contains string only
   Button.PropTypes ={
      arkoContent : PropTypes.string.isRequired

   }

export default Button