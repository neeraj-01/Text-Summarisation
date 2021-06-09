import React, { createContext ,useReducer } from 'react'
import { Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import {About} from './components/About';
import Errorpg from './components/Errorpage'; 
import Logout from './components/Logout';
import {NewsSource} from './components/NewsSource';

import { initialState ,reducer } from '../src/reducer/UseReducer';
import { Fav } from './components/Fav';
import { ReadLater } from './components/ReadLater';

//contextAPI

  export const UserContext = createContext();

const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <UserContext.Provider value={{ state ,dispatch }}>
      <Navbar />
      <Switch>

      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/readlater'>
        <ReadLater/>
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
      <Route path='/About'>
        <About/>
      </Route>
      <Route path='/NewsSource'>
        <NewsSource />
      </Route>
      <Route path='/fav'>
        <Fav/>
      </Route>
      {/* <Route path ''>
        <Errorpg/>
      </Route> */}
      </Switch>
      </UserContext.Provider>
    </div>
  )
}

export default App
