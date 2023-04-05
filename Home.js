import React from 'react'
import About from './About'
import { Route,Routes ,Link} from 'react-router-dom'
import History from './History'
import Contact from './Contact'
import Register from './Register'
import Animals from './Animals'


export default function Home() {
  return (
    <div> 
   
    <div className='heading'>
    <h1><b>HMA <br></br>ZOOLOGICAL PARK</b></h1>
    <br></br>
   
    <Link to="/history"><button className='btn btn-danger'>History</button></Link>
    <Link to="/animals"><button className='btn btn-success'>Animals</button></Link>
    <Link to="/contact"><button className='btn btn-primary'>Contact</button></Link>
    <Link to="/about"><button className='btn  btn-warning'>About</button></Link>
    <Link to="/register"><button className='btn'>Register</button></Link>
    <br></br><br></br>
    <hr></hr>
   
    </div>
    <Routes>
   <Route path ='/history' element={<History/>} />
   <Route path ='/contact' element={<Contact/>} />
   <Route path ='/register' element={<Register/>} />
   <Route path ='/animals' element={<Animals/>} />
   <Route path ='/about' element={<About/>} />
    </Routes></div>
  
  )
}