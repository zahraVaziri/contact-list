import React, { useState } from 'react'

const AddContactForm = ({postData}) => {
    const [comment,setComment]= useState({
    name:'',
    email:''
  })
  const changeHandler=(e)=>{
    setComment({...comment,[e.target.name]:e.target.value})
  }
  const submitHandler = (e)=>{
    e.preventDefault()
    postData(comment)
    setComment({name:'',email:''})
    
    
  }
  return (
    <form onSubmit={submitHandler} className='form-add'>
      <div>
         <label>name :</label><br/>
      <input type={'text'} onChange={changeHandler} name="name" placeholder='name' value={comment.name} />
       </div>
      <div>
        <label>email :</label><br/>
      <input type={'email'} onChange={changeHandler} name="email" placeholder='email' value={comment.email}/>
      </div>
      <button type='submit' >Add</button>
    </form>
  )
}

export default AddContactForm
