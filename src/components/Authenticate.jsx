import { useState } from "react"

const Authenticate = ({token}) => {

const [successMessage, setSuccessMessage] = useState(null)
const [error, setError] = useState(null)
const [enteredUsername, setEnteredUsername] = useState(null)

  const handleClick = async () => {
    try {
      const response = await fetch('https://fsa-jwt-practice.herokuapp.com/authenticate', 
        { 
          method: "GET", 
          headers: { 
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}` 
          }
        })
        const result = await response.json()
        // console.log(result)
        const data = result.data
        const userNameData = data.username
        console.log(result.message)
        setSuccessMessage(result.message)
        setEnteredUsername(userNameData)
    }catch(err) {
      console.log(console.error);
    

    }
  
  }
  return (
    <div id="authenticate">
      <h2>Authenticate Here</h2>
      {successMessage && <p>{successMessage}</p>}
      {error && <p>{error}</p>}
      {enteredUsername && <p>{enteredUsername}</p>}
      <button onClick={(e) => handleClick()}>Authenticate</button>
      
    </div>
  )
}

export default Authenticate