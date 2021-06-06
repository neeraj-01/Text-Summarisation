import React from 'react'
import error from './images/error.jpg';


const Errorpage = () => {
    return (
        <div>
            <div className="error">
                <img src={error} alt="Error" style={{height:"100%",backgroundBlendMode:"-moz-initial",position:"absolute"}}></img>
                <div className="errormsg">
                    <h1>Error - 404</h1>
                    <h2>Page Not found at the requested location.</h2>
                    <a class="button-link" href="/">
                        <i class="fa fa-google"></i> Home
                    </a>
                </div>

            </div>
        </div>
    )
}

export default Errorpage
