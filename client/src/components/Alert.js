import React,{useContext} from 'react'
import { PriceContext } from '../contexts/appContext'



const Alert = () => {
const {alertType, alertText} = useContext(PriceContext)
  return (
      <div className={` style-alert alert-${alertType}`}>{alertText }</div>
  )
}

export default Alert;