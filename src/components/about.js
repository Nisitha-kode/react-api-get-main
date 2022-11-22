import React ,{useContext} from "React";
//import Activities from "../Activites";
import MyContext from "./context/MyContext";
function About(){
    //const [activities, setActivities] = useContext([Activities,setActivities]);
    return(
        <div>
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