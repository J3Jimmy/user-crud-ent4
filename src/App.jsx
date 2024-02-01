import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import UserCard from './components/UserCard'
import FormUser from './components/FormUser'


function App() {

  const [userUpdate, setUserUpdate] = useState()
  const [isFormClose, setisFormClose] = useState(true)

  const baseUrl = 'https://users-crud.academlo.tech'
  const [ users, getUsers, createUser, deleteUser, updateUser ] = useFetch(baseUrl)

  useEffect(() => {
    getUsers()
  }, [])

  const handleOpenForm  = () => {
    setisFormClose(false)
  }

  return (
    <div>
      <h1>User Crud</h1>
      <button onClick={handleOpenForm}>Open Form</button>
      <div className={`form__container ${isFormClose ? 'form__close' : ''}`}>


    <FormUser 
      createUser={createUser}   
      userUpdate={userUpdate}
      updateUser={updateUser}
      setUserUpdate={setUserUpdate}
      setIsFormClose={setisFormClose}
   />
   </div>
   <div>
    {
      users?.map(user => (
       <UserCard
       key={user.id}
       user={user}
       deleteUser={deleteUser}
       setUserUpdate={setUserUpdate}
       setIsFormClose={setisFormClose}
       /> 
      ))
    }
   </div></div>
  )
}

export default App
