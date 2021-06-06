import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import vector from './images/vector21.png';

const Home = () => {

//     const [ userName ,setUserName ] = useState('');
//     const [ show ,setShow ] = useState(false);
//     const userHomePage = async() => {

//         try{
//             const res =await fetch ('/getdata', {
//                 method : 'GET',
//                 headers : {
//                     Accept : "application/json",
//                     "Content-Type" : "application/json"
//                 },
//                 credentials : "include" 
//             });

//             const data = await res.json();
//             console.log(data);
//             setUserName(data.name);
//             setShow(true);
//         }catch(err){
//             console.log(err);
//         }
//     }

//     useEffect(() => {
//         userHomePage();
//     }, []);

    return (
        <>
            <div className="searchbox" style={{
                backgroundImage:'url('+vector+')',backgroundSize:'35% 50%',backgroundRepeat:'no-repeat',backgroundPosition:'left Bottom',backgroundAttachment:'fixed'
                }}>
                <div className="searchbar">
                    <h1><span style={{backgroundColor: "aquamarine"}}> One place for all Articles ,</span><br></br>
                        <span style={{backgroundColor: "aquamarine"}}>Browse through trusted News Sources.</span><br></br>
                    </h1>
                    {/* <h1>{userName}</h1>
                    { show ? <h2>Register to Get Updated with world </h2>:
                        <form className="form-inline">
                                <input className="form-control" type="search" placeholder="Search article ">
                                </input> <a href="/" className="button-link">search</a> 
                        </form> } */}

                        <form className="form-inline">
                                <input className="form-control" type="search" placeholder="Search article ">
                                </input> <a href="/" className="button-link">search</a> 
                        </form>
                            <nav className="Options">
                                <ul>
                                    {/* <li><a href="articles_list">Home</a></li> */}
                                    <li><a href="articles_list">News</a></li>
                                    <li><a href="articles_list">Contact</a></li> 
                                    <li><a href="articles_list">About Us</a></li>
                                </ul>
                            </nav>
                </div>
            </div>
        </>
    )
}

export default Home
