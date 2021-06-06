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
                    {/* <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav mr-auto">
                            <a href="/login" className="button-link" >Login</a>
                        </div>
                    </div> */}
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav mr-auto">
                            <a href="/logout" className="button-link" >Logout</a>
                        </div>
                    </div>
                </>
            )
        }else{
            return(
                <>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav mr-auto">
                            <a href="/login" className="button-link" >Login</a>
                        </div>
                    </div>
                    {/* <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav mr-auto">
                            <a href="/logout" className="button-link" >LogOut</a>
                        </div>
                    </div> */}
                </>
            )
        }
    }

    return (
        <div>
            <div className="content">
                <div className="bs-example" >
                    <nav className="navbar navbar-expand-md navbar-light bg-light border" >
                        <a href="/" className="navbar-brand">
                            <img src={logo} height="40" alt="Saransh"></img>
                        </a>
                        <RenderNav></RenderNav>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Navbar
