import { useContext } from "react"
// Import it from where ever you have stored it
//import MyContext from "context/MyContext";

function MyContext() {
    const MyContext = createContext("default value")
    return (
        <div>
          <p>
            {/* Access it here as any other variable */}
            {MyContext}
          </p>
        </div>
    );
}

export  default MyContext
