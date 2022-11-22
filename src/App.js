import './App.css';
import React, { useEffect, useState } from 'react'
import AddContactForm from './component/AddContactForm/AddContactForm'
import ContactList from './component/contactList/ContactList'
function App() {
  const [contacts,setContacts] = useState([])
  const postData = (comment)=>{
    setContacts([...contacts,{id:Math.floor(Math.random()*100),...comment}])
    
  }
  const deleteHandler=(id)=>{
    const index = contacts.filter(i => i.id !== id)
    setContacts(index)
  }
   useEffect(()=>{
   const getData = JSON.parse( localStorage.getItem('contact'))
    if(getData) setContacts(getData)
  },[])
  useEffect(()=>{
    localStorage.setItem('contact',JSON.stringify(contacts))
  },[contacts])
  return (
    <div className='App'>
        <h1> Add Contact Form</h1>
      <AddContactForm postData={postData}/>
      <ContactList contacts={contacts} onDelete={deleteHandler}/>
    </div>
  )
}

export default App;
