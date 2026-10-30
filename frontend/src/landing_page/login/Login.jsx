import {Link} from "react-router-dom";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

function Login() {

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

    const [inputValue, setInputValue] = useState({
        email: "",
        password: "",
    });

    const { email, password } = inputValue;
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
        position: "bottom-left",
        });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(
                "https://tradesync-ikxa.onrender.com/users/login",
                {
                ...inputValue,
                },
                { withCredentials: true }
            );
            // console.log(data);
            const { success, message } = data;
            if (success) {
                handleSuccess(message);
                setTimeout(() => {
                    window.location.replace("https://tradesync-dashboard.vercel.app");
                }, 1000);
            } else {
                handleError(message);
            }
        } catch (error) {
            console.log(error);
        };
    };

  return (
    <div className="container mt-5">
        <h3 className="mt-3 mb-5 text-center text-muted">Welcome back!</h3>
        <div className="row">
            <div className="col-1"></div>
            <div className="col-6 pt-3 p-5">
                <img src="/images/account_open.svg" alt="open account Img"/>
            </div>
            <div className="col-4 mt-3">
                <p><Link to="/">-Back To Home</Link></p>
                <h2 className="mt-3">Login</h2>

                <form onSubmit={handleSubmit} noValidate className="needs-validation">
                    <div className="mb-3 mt-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input name="email" id="email" type="email" className="form-control" value={email} onChange={handleOnChange} required/>
                        <div className="invalid-feedback">email required</div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input name="password" id="password" type="password" className="form-control" value={password} onChange={handleOnChange} required/>
                        <div className="invalid-feedback">password required</div>
                    </div>

                    <div className="mt-3 text-center">
                        <button className="btn btn-primary mt-3 w-50">Login</button>
                    </div>
                </form>

                <p className="mt-3 text-center">don't have an account? <Link to="/signup">SignUp</Link></p>

                <ToastContainer/>
            </div>
        </div>
    </div>
  )
}

export default Login;
