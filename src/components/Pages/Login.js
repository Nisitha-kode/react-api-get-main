import { useContext } from "react"
//import Activities from "../Activites";
import MyContext from "../context/MyContext";
function Login(){
    //const [activities, setActivities] = useContext([Activities,setActivities]);
    const context = useContext(MyContext)
    return (
      <h1>{MyContext}</h1>
    )
  }
export default Login;