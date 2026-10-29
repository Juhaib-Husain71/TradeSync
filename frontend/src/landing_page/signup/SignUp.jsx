import {Link, useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

function SignUp() {

    useEffect(() => {
        const forms = document.querySelectorAll(".needs-validation");
    
        Array.from(forms).forEach((form) => {
            form.addEventListener("submit", (event) => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
    
            form.classList.add("was-validated");
            });
        });
    }, []);

    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState({
        email: "",
        password: "",
        username: "",
    });
    const { email, password, username } = inputValue;
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setInputValue({
            ...inputValue,
            [name]: value,
        });
    };

    const handleError = (err) =>
        toast.error(err, {
            position: "bottom-left",
        });
    const handleSuccess = (msg) =>
        toast.success(msg, {
            position: "bottom-right",
        });

    const handleSubmit =  async (e) => {
        e.preventDefault();
        // console.log("username: ", inputValue.username, "pass: ", inputValue.password, "email: ", inputValue.email);
        
        try {
            const { data } = await axios.post(
                "http://localhost:3001/users/signup",
                {
                ...inputValue,
                },
                { withCredentials: true }
            );
            const { success, message } = data;
            if (success) {
                handleSuccess(message);
                setTimeout(() => {
                    window.location.replace("http://localhost:5174");
                }, 1500);
            } else {
                handleError(message);
            }
        } catch (error) {
            console.log(error);
        }
        setInputValue({
            ...inputValue,
            email: "",
            password: "",
            username: "",
        });
    };

  return (
    <div className="container mt-5">
        <div className="row">
            <div className="col-1"></div>
            <div className="col-6 p-5">
                <img src="/images/account_open.svg" alt="open account Img"/>
            </div>
            <div className="col-4">
                <p><Link to="/">-Back To Home</Link></p>
                <h2 className="mt-3">Signup now</h2>
                {/* <p>Or track your existing application.</p> */}

                <form onSubmit={handleSubmit} noValidate className="needs-validation">
                    <div className="mb-3 mt-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input name="username" id="username" type="text" className="form-control" value={username} onChange={handleOnChange} required/>
                        <div className="valid-feedback">username looks good</div>
                        <div className="invalid-feedback">username required</div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input name="email" id="email" type="email" className="form-control" value={email} onChange={handleOnChange} required/>
                        <div className="valid-feedback">email looks good</div>
                        <div className="invalid-feedback">email required</div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input name="password" id="password" type="password" className="form-control" value={password} onChange={handleOnChange} required/>
                        <div className="valid-feedback">password looks good</div>
                        <div className="invalid-feedback">password required</div>
                    </div>

                    <div className="mt-3 text-center">
                        <button className="btn btn-primary mt-3 w-50">Signup</button>
                    </div>
                </form>

                <p className="mt-3 text-center">already have an account? <Link to="/login">Login</Link></p>

                <ToastContainer/>
            </div>
        </div>
    </div>
  )
}

export default SignUp;
