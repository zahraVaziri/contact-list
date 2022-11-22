import React from 'react'
import { BiTrashAlt,BiUserCircle } from "react-icons/bi";
const Contact = ({name,email}) => {
  return (
    <>
    <div className='contactList'>
    <div className='data-user'>
        <span className='icon-user'><BiUserCircle/></span>
        <div>
            <div>{name}</div>
            <div>{email}</div>
        </div>
        
    </div>
      
      <span className='trash-icon'><BiTrashAlt/></span>
      
    </div>
    
    </>
  )
}

export default Contact
