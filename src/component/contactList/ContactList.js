import React from 'react'
import { BiTrashAlt,BiUserCircle } from "react-icons/bi";

const ContactList = ({contacts,onDelete}) => {
 
  return (
   <>
   
   {contacts.map((c)=>{
    return (
         <div className='contactList' key={c.id}>
            
    <div className='data-user'>
        <span className='icon-user'><BiUserCircle/></span>
        <div>
            <div>{c.name}</div>
            <div>{c.email}</div>
        </div>
        
    </div>
      
      <span onClick={()=>onDelete(c.id)} className='trash-icon'><BiTrashAlt/></span>
      
    </div>
    )
   
   })}
   </>
  )
}

export default ContactList
