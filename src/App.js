//import logo from './logo.svg'
import './App.css'
import {BrowserRouter as Router,Route,Link } from "react-router-dom";
import Activities from './components/Activites'
import UseContext from './components/UserContext'
import {Index} from "./components/";
import {About} from  "./components/about";

function AppRouter () {
  
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/Activities/">Activities</Link>
            </li>
          </ul>
        </nav>
      <UserContext.Provider value={{activities,setActivities}}>
        <Route path="/" exact component={Index}/>
        <Route path="/about" exact component={About}/>
        <Route path="/Activities" exact component={Activities}/>
      </UserContext.Provider>

         </div>
    </Router>

    
  )
}

export default AppRouter
