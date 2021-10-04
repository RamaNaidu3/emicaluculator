import React,{useState} from 'react'
import Caluculation from './Caluculation'
import "./form.css"

const Form = () => {
    let[state,setState]=useState({
        loanAmount:"",
        Months:"",
        intrest:""
    })
    let {loanAmount,Months,intrest}=state
    let handelChange=(e)=>{
        e.preventDefault()
    let { name, value } = e.target;
     
    setState({ ...state, [name]: value });
    }
    let handleSubmit =  e => {
        e.preventDefault();

    }
    let submit=()=>{
        let cal=document.getElementById("calc")
        cal.style.display="block"
        let btn=document.querySelector("button")
         if(btn.innerHTML==="Calculate"){
             btn.innerHTML="Reset"
         }
         else{
             btn.innerHTML="Calculate"
             document.getElementById("calc").style.display="none"
             setState({
                loanAmount:"",
                Months:"",
                intrest:""
             })
         }
    }
         
    return (
        <div>
            
             <form onSubmit={handleSubmit} >
             <h4>Loan EMI Calculator</h4>
            <label htmlFor="Amount">Loan Amount</label>
            <input
              type="text"
              id="Amount"
              placeholder="Enter the amount"
              required
              name="loanAmount"
                value={loanAmount}
              onChange={handelChange}
            /><span>INR</span><br></br>
            <label htmlFor="Tenure">Loan Tenure</label>
            <input
              type="text"
              id="Tenure"
              placeholder="Enter months"
              required
              name="Months"
              value={Months}
              onChange={handelChange}
            /><span>Months</span><br></br>
            <label htmlFor="intrest">Intrest Rate</label>
            <input type="text"   id="intrest"  name="intrest" 
            value={intrest} onChange={handelChange}  /><span>%</span><br></br>
            <button  onClick={submit}>Calculate</button>
            </form>
            
            <Caluculation props={state}/>
        </div>
        
    )
}

export default Form
