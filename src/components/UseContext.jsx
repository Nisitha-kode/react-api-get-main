import { useState, createContext, useContext } from 'react'
//import ReactDOM from 'react-dom/client'

const UserContext = createContext()

function UserContext () {
  //const [user, setUser] = useState("Jesse Hall");
  const [activities, setActivities] = useState([])
  return (
    // <UserContext.Provider value={user}>
    <UserContext.Provider value={{ activities, setActivities }}>
      <h1>{`Hello ${activities}!`}</h1>
    </UserContext.Provider>
  )
}

function Activities () {
  return (
    <>
      <h1>Component 2</h1>
      <h1>{`Hello ${activities}!`}</h1>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Component1 />)

export default UserContext
