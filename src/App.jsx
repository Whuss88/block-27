import { useState } from 'react'
import SignUpForm from './components/SignUpForm'
import Authenticate from './components/Authenticate'



const App = () => {
const [token, setToken] = useState(null)
  return (
    <>
      <h1>Block-27</h1>
      <SignUpForm token={token} setToken={setToken}/>
      <Authenticate token={token} setToken={setToken} />
    </>
  )
}

export default App
