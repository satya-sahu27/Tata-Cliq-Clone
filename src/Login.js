import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import './login.css';
const Login = ( { toggleRegisterForm, onLoginSuccess, toggleOverlay } ) => {
    const [showForm, setShowForm] = useState(true);
    const [username, usernameupdate] = useState('');
    const [password, passwordupdate] = useState('');

    const usenavigate=useNavigate();

    useEffect(()=>{
sessionStorage.clear();
    },[]);

    const handleValidationMessage = (message) => {
        toast.warning(message);
    };
    
    const handleSuccessMessage = (message) => {
        toast.success(message);
    };

    const ProceedLogin = (e) => {
        e.preventDefault();
        if (validate()) {
      
            fetch("http://localhost:8000/user/" + username).then((res) => {
                return res.json();
            }).then((resp) => {
                
                if (Object.keys(resp).length === 0) {
                    handleValidationMessage('Please Enter valid username');
                } else {
                    if (resp.password === password) {
                        handleSuccessMessage('Success');
                        sessionStorage.setItem('username',username);
                        onLoginSuccess();
                    }else{
                        handleValidationMessage('Please Enter valid credentials');
                    }
                }
            }).catch((err) => {
                handleValidationMessage('Login Failed due to: ' + err.message);
            });
        }
    }
    const validate = () => {
        let result = true;
        if (username === '' || username === null) {
            result = false;
            toast.warning('Please Enter Username');
        }
        if (password === '' || password === null) {
            result = false;
            toast.warning('Please Enter Password');
        }
        return result;
    }
    const handleCloseForm = () => {
        setShowForm(false);
        toggleOverlay();
      };
      
    return (
        <div className="login-container">
             {showForm && ( 
                <div className="col-lg-6" >
                    <form onSubmit={ProceedLogin} className="container login-form">
                        <div className="card">
                            <div className="card-header">
                                <h2>Welcome to tata-cliq</h2>
                            </div>
                            <div className="card-body">
                                <div className="form-group">
                                    <label>User Name <span className="errmsg">*</span></label>
                                    <input value={username} onChange={e => usernameupdate(e.target.value)} placeholder="Please enter your username"className="form-control"></input>
                                </div>
                                <div className="form-group">
                                    <label>Password <span className="errmsg">*</span></label>
                                    <input type="password" value={password} onChange={e => passwordupdate(e.target.value)}placeholder="Please enter your password" className="form-control"></input>
                                </div>
                            </div>
                            <div className="card-footer">
                                <button type="submit" className="btn btn-primary">Sign in</button> 
                            |   <div className="form-group">
                                 Don't have an account?<button className="btn btn-success" onClick={toggleRegisterForm}>Sign up</button>
                                </div>
                            </div>
                            <button type="button" className="close-btn" onClick={handleCloseForm}>
                                <span>&times;</span>
                        </button>
                        </div>
                    </form>
                </div>
             )}
        </div>
    );
}

export default Login;