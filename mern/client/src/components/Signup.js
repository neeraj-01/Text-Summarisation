import React ,{useState}from 'react';
import { useHistory } from 'react-router-dom';
const Signup = () => {

    const history =useHistory();

    const [user, setUser] = useState({ name: "",email: "",password: "",cpassword: "" });

    let name,value;

    const handleInputs =(e) => {

        console.log(e);
        name =e.target.name;
        value =e.target.value;

        setUser({...user, [name]:value});
    }

    const PostData = async(e) =>{
        e.preventDefault();

        const{ name,email,phone,password,cpassword } = user ;

        const res = await fetch("/register" , { 
            method : "POST" ,
            headers :{
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                name,email,phone,password,cpassword
            })
        });
        const data = await res.json();

        if( data.status === 422 || !data ){
            window.alert("Invalid Registration");
            console.log("Invalid");
        }else{
            window.alert("Registration successful");
            console.log("Valid");
            history.push("/login");
        }
    }


    return (
        <div>
                <div className="content">
                    <div className="login-card">
                        <div className="form">
                            <form className="Registerform" id="Registerform" method="post" name="post">
                            <div className="form-group">
                                <input type="text" name="name"  className="form-control my-input" id="name" 
                                value={user.name}  
                                onChange ={handleInputs}
                                placeholder="Name"></input>
                            </div><br></br>
                            <div className="form-group">
                                <input type="email" name="email"  className="form-control my-input" id="email" 
                                    value={user.email}  
                                    onChange ={handleInputs}
                                    placeholder="Email"></input>
                            </div><br></br>
                            <div className="form-group">
                                <input type="phone" name="phone"  className="form-control my-input" id="phone" 
                                    value={user.phone}  
                                    onChange ={handleInputs}
                                    placeholder="Phone"></input>
                            </div><br></br>
                            <div className="form-group">
                                <input type="password" name="password"  className="form-control my-input" id="password" 
                                    value={user.password}  
                                    onChange ={handleInputs}
                                    placeholder="Password"></input>
                            </div>
                            <br></br>
                            <div className="form-group">
                                <input type="password" name="cpassword"  className="form-control my-input" id="cpassword" 
                                    value={user.cpassword}  
                                    onChange ={handleInputs}
                                    placeholder="Confirm-Password"></input>
                            </div>
                            <br></br>
                            <div className="text-center ">
                                <a className="button-link" href="Signup" name="signup" id="signup" value="register" onClick={PostData} >
                                    <i className="fa fa-google"></i> Register
                                </a>
                            </div>
                            </form>
                        </div>
                    </div>
                    <nav className="Options">
                                <ul>
                                    <li><a href="/">Home</a></li>
                                    <li><a href="articles_list">Contact</a></li> 
                                    <li><a href="articles_list">About Us</a></li>
                                </ul>
                    </nav>
                </div>
            
        </div>
    )
}

export default Signup
