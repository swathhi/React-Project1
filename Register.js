import React from 'react'

export default function Register() {
  return (
    <div >
    <h1 className='title'><b>REGISTRATION :</b></h1>
    <br></br>
    <form>
     <b>Name:</b><input type='text'></input><br></br>
     <b>Age:</b>{" "}{"  "}<input type='number'></input><br></br>
    <b>Date:</b>{" "}{" "}{" "}<input type='date'></input><br></br>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
     <b>Safari:</b>Yes<input type='radio' className='radioInput'></input> No<input className='inputRadio' type='radio'></input> <br></br><br></br>
     <button>SUBMIT</button>
    </form>
    </div>
  )
}