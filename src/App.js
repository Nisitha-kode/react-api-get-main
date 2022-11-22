import { useEffect, useState } from "react";
import MyContext from "./components/context/MyContext";
import './App.css'
//import {BrowserRouter as Router,Route,Link } from "react-router-dom";
import Activities from './components/Activites'
//import UseContext from './components/UserContext'
//import {Index} from "./components/";
import About from  "./components/About";
import Login from "./components/Pages/Login";

function AppRouter () {
  //const [activities, setActivities] = useState(false);

  return (
          
      <MyContext.Provider value="can override default value here">
        <Activities/>
        <Login/>
        <About/>
      </MyContext.Provider>

           
  )
}

export default AppRouter
