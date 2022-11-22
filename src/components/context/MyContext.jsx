import { useContext } from "react"
// Import it from where ever you have stored it
import MyContext from "context/MyContext";

function Example() {
    const context = useContext(MyContext)
    return (
        <div>
          <p>
            {/* Access it here as any other variable */}
            {context}
          </p>
        </div>
    );
}


export default MyContext;