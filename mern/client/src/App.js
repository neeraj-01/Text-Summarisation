import React, { createContext ,useReducer } from 'react'
import { Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Errorpg from './components/Errorpage'; 
import Logout from './components/Logout';
import { initialState ,reducer } from '../src/reducer/UseReducer';
//contextAPI

  export const UserContext = createContext();

const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <UserContext.Provider value={{ state ,dispatch }}>
      <Switch>

      <Route exact path='/'>
        <Navbar/>
        <Home />
      </Route>
      <Route exact path='/login'>
        <Login />
      </Route>
      <Route exact path='/signup'>
        <Signup/>
      </Route>
      <Route path='/logout'>
        <Logout />
      </Route>
      <Route>
        <Errorpg/>
      </Route>

      </Switch>
      </UserContext.Provider>
    </div>
  )
}

export default App
