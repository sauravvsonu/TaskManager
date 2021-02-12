import React from 'react'
import { NavLink } from 'react-router-dom'


const SignIn = (props) => {
    return(
     <ul className="right">
       {/* <li><NavLink to='/signin'>Log Out</NavLink></li> */}
       <li><NavLink to='/' className='btn btn-floating pink lighten-1'>
         PP
         </NavLink></li>
     </ul>
    )
    }
export default SignIn