import React, {useState, useEffect} from 'react'
import {NewsList} from './NewsList'
import {Fav} from './Fav'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import {ButtonGroup, Button} from '@material-ui/core'
import Navbar from './Navbar'

export  const NewsSource = (props) => {
    let articles = ['theHindu','theWire','HindustanTimes', 'TheQuint']
    // let active = 0
    const [state, setstate] = useState(0)
    
    let isActive = (index)=> {
        if (index === state){
            // console.log(index)
            return "active";
        }else{
            return 'inactive'
        }
    }
    
    let styles ={
        display: 'flex',
        justifyContent: 'space-around'
    }
    return (

        <Router>
            <div>
                <ButtonGroup className={'m-2'} >
                    {articles.map((article,i) =>{
                        return <Button variant="contained" color='secondary' ><Link style={{ textDecoration: 'none', color:'white' }} onClick={()=>setstate(i)}  key={i} to={article}>{article}</Link></Button>
                    })}
                </ButtonGroup>
            </div>
            <Switch>
                <Route  key='2' path='/theWire'>
                    <NewsList source='theWire'/>
                </Route>

                <Route key='1' path='/theHindu' >
                    <NewsList source='theHindu'/>
                </Route>

                <Route key='3' path='/HindustanTimes'>
                    <NewsList source='hindustanTimes'/>
                </Route>
                <Route key ='4' path='/TheQuint'>
                    <NewsList source='theQuint'/>
                </Route>
            </Switch>
        </Router>
        
    )
}


