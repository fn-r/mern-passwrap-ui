import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from '../context/ThemeContext';

import logo from '../img/logo.svg'
import logoDark from '../img/logo-dark.svg'

const Login = () => {
    const { colorTheme } = useContext(ThemeContext);
    const [credentials, setCredentials] = useState({
        "username": "demo_user",
        "password": "XQYgVcmOlyIXcQ"
    });

    const { loading, error, dispatch } = useContext(AuthContext);

    const navigate = useNavigate()

    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
            const res = await axios.post(`${process.env.REACT_APP_API}/auth/login`, credentials)
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });

            await axios.get(`${process.env.REACT_APP_API}/users/checkauthentication`)
            navigate("/")
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
        }
    };

    return (
        <section className="py-24 md:py-32 bg-body dark:bg-gray-900 w-screen h-screen transition duration-500">
            <div className="container px-4 mx-auto">
                <div className="max-w-sm mx-auto">
                    <div className="mb-6 text-center">
                        <Link to="/login" className="inline-block mb-6">
                            <img className="h-16" src={(colorTheme === 'dark') ? logoDark : logo} alt="logo" />
                        </Link>
                        <h3 className="mb-4 text-2xl md:text-3xl dark:text-white font-bold">Sign in</h3>
                        <p className="text-lg text-coolGray-500 dark:text-lightGray-500 font-medium">Start your demo version</p>
                    </div>
                    <form action="">
                        <div className="mb-6">
                            <label className="block mb-2 text-coolGray-800 dark:text-lightGray-700 font-medium" htmlFor="username">Username</label>
                            <input id="username" className="appearance-none block w-full p-3 leading-5 dark:bg-gray-800 dark:text-white text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" type="text" placeholder="demo_user" value={credentials.username} onChange={handleChange} />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 text-coolGray-800 dark:text-lightGray-700 font-medium" htmlFor="password">Password</label>
                            <input id="password" className="appearance-none block w-full p-3 leading-5 dark:bg-gray-800 dark:text-white text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" type="password" placeholder="***************" value={credentials.password} onChange={handleChange} />
                        </div>
                        <button className="inline-block py-3 px-7 mb-6 w-full text-base text-blue-50 font-medium text-center leading-6 bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md shadow-sm" disabled={loading} onClick={handleClick}>Sign In</button>
                        {error && <span>{error.message}</span>}
                    </form>
                </div>
            </div>
        </section>
    )
};

export default Login;