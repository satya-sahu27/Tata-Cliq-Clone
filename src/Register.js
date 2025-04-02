import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./Register.css";


const Register = ( { toggleLoginForm, toggleOverlay }) => {
    const [showForm, setShowForm] = useState(true);
    const [id, idchange] = useState("");
    const [password, passwordchange] = useState("");
    const [email, emailchange] = useState("");
    const [phone, phonechange] = useState("");
    const usenavigate = useNavigate();
    const formRef = useRef(null);

    const handleValidationMessage = (message) => {
        toast.warning(message);
    };
    
    const handleSuccessMessage = (message) => {
        toast.success(message);
    };

    const handleCloseForm = () => {
        setShowForm(false);
        toggleOverlay();
    };
    
    const IsValidate = () => {
        let isproceed = true;
        let errormessage = 'Please enter the value in ';
        if (id === null || id === '') {
            isproceed = false;
            errormessage += ' Username';
        }

        if (password === null || password === '') {
            isproceed = false;
            errormessage += ' Password';
        }
        if (email === null || email === '') {
            isproceed = false;
            errormessage += ' Email';
        }

        if(!isproceed){
            toast.warning(errormessage)
        }else{
            if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)){

            }else{
                isproceed = false;
                toast.warning('Please enter the valid email')
            }
        }
        return isproceed;
    }


    const handlesubmit = (e) => {
        e.preventDefault();
        let regobj = { id, password, email, phone };
        if (IsValidate()) {
          fetch("http://localhost:8000/user", {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(regobj)
          }).then((res) => {
            handleSuccessMessage('Registered successfully.');
            sessionStorage.setItem("username", id);
            usenavigate('/'); 
            formRef.current.reset();
            toggleOverlay();
          }).catch((err) => {
            handleValidationMessage('Failed: ' + err.message);
          });
        }
      }
      
      
    return (
        <div className="registration-container">
            {showForm && (
            <div className=" col-lg-6">
                <form ref={formRef} onSubmit={handlesubmit} className="container registration-form">
                    <div className="card">
                        <div className="reg-form">
                            <div className="card-header">
                                <h1>Welcome to tata-cliq</h1>
                            </div>
                            <div className="card-body">

                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label>User Name <span className="errmsg">*</span></label>
                                         <input value={id} onChange={e => idchange(e.target.value)} placeholder="Please enter your user name"className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label>Password <span className="errmsg">*</span></label>
                                            <input value={password} onChange={e => passwordchange(e.target.value)}placeholder="Please enter your password" type="password" className="form-control"></input>
                                        </div>
                                    </div>
                              
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label>Email <span className="errmsg">*</span></label>
                                            <input value={email} onChange={e => emailchange(e.target.value)}placeholder="Please enter your email" className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label>Phone <span className="errmsg"></span></label>
                                            <input value={phone} onChange={e => phonechange(e.target.value)}placeholder="Please enter your phone number" className="form-control"></input>
                                        </div>
                                    </div>

                                 </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <div className="form-group">
                                Already have an account?<button className="btn btn-danger" onClick={toggleLoginForm}>Sign in</button>
                             </div>
                                
                            <div>
                            
                                By continuing, you agree to our <span style={{ color: "blue" }}>terms of use</span> and <span style={{ color: "blue" }}>privacy policy</span>.
                            </div>
                            <button type="submit" className="btn btn-primary">Sign up</button> |
                          
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

export default Register;