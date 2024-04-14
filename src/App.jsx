

import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserProviderContext'

function App() {
  

  return (
    <UserContextProvider>
      <h1>Simple Api context</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
