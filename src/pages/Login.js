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
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
        }
        navigate("/")
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
                    <form onSubmit={handleClick}>
                        <div className="mb-6">
                            <label className="block mb-2 text-coolGray-800 dark:text-lightGray-700 font-medium" htmlFor="username">Username</label>
                            <input id="username" className="appearance-none block w-full p-3 leading-5 dark:bg-gray-800 dark:text-white text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" type="text" placeholder="demo_user" value={credentials.username} onChange={handleChange} />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 text-coolGray-800 dark:text-lightGray-700 font-medium" htmlFor="password">Password</label>
                            <input id="password" className="appearance-none block w-full p-3 leading-5 dark:bg-gray-800 dark:text-white text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" type="password" placeholder="***************" value={credentials.password} onChange={handleChange} />
                        </div>
                        <button className="flex items-center gap-2 justify-center py-3 px-7 mb-6 w-full text-base text-blue-50 font-medium text-center leading-6 bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md shadow-sm" disabled={loading}>
                            {loading && <svg className="animate-spin h-5 w-5 mr-3" fill="#fff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="26.349px" height="26.35px" viewBox="0 0 26.349 26.35">
                                <g><g>
                                    <circle cx="13.792" cy="3.082" r="3.082" />
                                    <circle cx="13.792" cy="24.501" r="1.849" />
                                    <circle cx="6.219" cy="6.218" r="2.774" />
                                    <circle cx="21.365" cy="21.363" r="1.541" />
                                    <circle cx="3.082" cy="13.792" r="2.465" />
                                    <circle cx="24.501" cy="13.791" r="1.232" />
                                    <path d="M4.694,19.84c-0.843,0.843-0.843,2.207,0,3.05c0.842,0.843,2.208,0.843,3.05,0c0.843-0.843,0.843-2.207,0-3.05
C6.902,18.996,5.537,18.988,4.694,19.84z"/>
                                    <circle cx="21.364" cy="6.218" r="0.924" />
                                </g></g>
                                <g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                                <g></g><g></g><g></g>
                            </svg>}
                            Sign In
                        </button>
                        {error && <span className="text-white">{error.message}</span>}
                    </form>
                </div>
            </div>
        </section>
    )
};

export default Login;