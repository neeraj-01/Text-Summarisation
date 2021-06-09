import React , { useContext} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import logo from './images/saransh.JPG';
import { UserContext } from '../App';

const Navbar = () => {

    const {state, dispatch} = useContext(UserContext);

    const RenderNav = () => {

        if(state){
            return (
                <>
                    <div className="content">
                                    <div className="bs-example" >
                                        <nav className="navbar navbar-expand-md navbar-light bg-light border" >
                                            <a href="/" className="navbar-brand">
                                                <img src={logo} height="40" alt="Saransh"></img>
                                            </a>
                                            <div className="collapse navbar-collapse" id="navbarCollapse">
                                                <div className="navbar-nav mr-auto">
                                                    <a href="/fav " className="btn btn-dark" >Favorite</a>
                                                    <a href="/readlater" className="button-link">Readlater</a>
                                                    <a href="/logout" className="button-link" >Logout</a>
                                                </div>
                                            </div>
                                        </nav>
                                    </div>
                    </div>
                </>
            )
        }else{
            return(
                <>
                    <div className="content">
                                    <div className="bs-example" >
                                        <nav className="navbar navbar-expand-md navbar-light bg-light border" >
                                            <a href="/" className="navbar-brand">
                                                <img src={logo} height="40" alt="Saransh"></img>
                                            </a>
                                            <div className="collapse navbar-collapse" id="navbarCollapse">
                                                <div className="navbar-nav mr-auto">
                                                    <a href="/login" className="button-link" >Login</a>
                                                </div>
                                            </div>
                                        </nav>
                                    </div>
                    </div>
                </>
            )
        }
    }

    return (
        <div>
           <RenderNav />
        </div>
    )
}

export default Navbar
