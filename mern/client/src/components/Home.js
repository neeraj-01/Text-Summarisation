import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import vector from './images/vector21.png';

const Home = () => {

    return (
        <>
            <div className="searchbox" style={{
                backgroundImage:'url('+vector+')',backgroundSize:'35% 50%',backgroundRepeat:'no-repeat',backgroundPosition:'left Bottom',backgroundAttachment:'fixed'
                }}>
                <div className="searchbar">
                    <h1><span style={{backgroundColor: "aquamarine"}}> One place for all Articles ,</span><br></br>
                        <span style={{backgroundColor: "aquamarine"}}>Browse through trusted News Sources.</span><br></br>
                    </h1>

                        <form className="form-inline">
                                <input className="form-control" type="search" placeholder="Search article ">
                                </input> <a href="/" className="button-link">search</a> 
                        </form>
                            <nav className="Options">
                                <ul>
                                    <li><a href="/NewsSource">News</a></li>
                                    <li><a href="articles_list">Contact</a></li> 
                                    <li><a href="/About">About Us</a></li>
                                </ul>
                            </nav>
                </div>
            </div>
        </>
    )
}

export default Home
