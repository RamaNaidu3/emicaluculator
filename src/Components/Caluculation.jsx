import React from 'react'
import "./form.css"

const Caluculation = (props) => {
   
     let caluculate=()=>{
         let r=props.props.intrest/12/100;
          let p=props.props.loanAmount;
          let n=props.props.Months;
          let x=Math.pow((1+r),n)
           return p*r*(x/(x-1))
     }
     
    
    return (
        <div id="calc">
            <h2>EMI={caluculate().toFixed(2)}</h2>
            <h2>intrest payble={(caluculate()*48-props.props.loanAmount).toFixed(2)}</h2>
            <h2>total payble ={(caluculate()*48).toFixed(2)}</h2>
        </div>
    )
}

export default Caluculation
