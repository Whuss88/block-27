import { useState } from "react"

const SignUpForm = ({setToken}) => {
  const [username, setUsername] = useState(``)
  const [password, setPassword] = useState(``)
  const [error, setError] = useState(null)
  

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const response = await fetch (`https://fsa-jwt-practice.herokuapp.com/signup`, {
         method: `POST`,
        headers: {
         "Content-Type": "application/json"
        },
        body: JSON.stringify({
        username: username,
        password: password 
        })
      })
       
      const result = await response.json()
      const token = result.token
      // console.log(token)
      setToken(token)

       
    } catch (err) {
        setError(error.message)
    }
    
  }

  return (
    <div id="signup">
      <h2>Sign Up Here</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Username: <input value={username} onChange={(e) => setUsername(e.target.value)}/>
        </label>
        <label>
          Password: <input value={password} onChange={(e) => setPassword(e.target.value)}/>
        </label>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default SignUpForm