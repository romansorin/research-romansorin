import React, { useState } from 'react'
import { Auth } from 'Firebase/'
import firebase from 'firebase/app'
import 'firebase/auth'

const email = 'roman@romansorin.com'
const pass = 'password'

const User = () => {
  const [loggedIn, setLoggedIn] = useState('false')

  const res = Auth.currentUser

  const createUser = async () => {
    const response = await Auth.signInWithEmailAndPassword(email, pass).catch(
      error => console.log(error)
    )
    // const response = await Auth.signOut()
    if (response.user) setLoggedIn('true')
    Auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(() =>
      console.log('set persistence to session')
    )
  }
  return (
    <div>
      Logged in? {loggedIn}
      <button onClick={createUser}>Create user</button>
    </div>
  )
}

export default User
