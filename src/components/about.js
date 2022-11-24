import { useContext } from "react"
//import Activities from "../Activites";
import MyContext from "./context/MyContext";
function About(){
    //const [activities, setActivities] = useContext([Activities,setActivities]);
    const { activities } = useContext(MyContext)
    return (
      <h1>{activities}</h1>
    
    )

}
export default About;