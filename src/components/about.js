import { useContext } from "react"
//import Activities from "../Activites";
import MyContext from "./context/MyContext";
function About(){
    //const [activities, setActivities] = useContext([Activities,setActivities]);
    const context = useContext(MyContext)
    return(
        <div>
             <h1>{MyContext}</h1>
            style={{
                color:"green",
                borderWidth:1,
                borderColor:"black",
                borderStyle:"solid",
            }}
            This i About Page <button>Click Here to know about me</button>
        (activities ? <h1> Read about me</h1> : <h1>Not know about me</h1>)
        </div>
    )

}
export default About;