import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import "./LoginRegister.css"
import { FcGoogle } from "react-icons/fc"
import { AuthContext } from '../../ContextProvider/AuthProvider';

const Login = () => {
    const { loginWithEmailAndPassword, setUser, loginWithGoogle } = useContext(AuthContext)
    const handleUserLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        loginWithEmailAndPassword(email, password)
            .then(result => {
                setUser(result.user)
                const user = result.user;
                console.log(user)
                form.reset()
            })
            .catch(err => console.error(err))
    }
    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then(result => {
                const user = result.user
                console.log(user)
            })
            .catch(err => console.error(err))
    }
    return (
        <form onSubmit={handleUserLogin}>
            <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
                <div className="relative py-3 sm:max-w-xl sm:mx-auto w-[96%] md:w-1/3 mx-auto">
                    <div
                        className="absolute inset-0 bg-gradient-to-r from-green-300 to-green-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                    </div>
                    <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-16">
                        <div className="max-w-md mx-auto">
                            <div>
                                <h1 className="text-2xl font-semibold">Please Login</h1>
                            </div>
                            <div className="divide-y divide-gray-200">
                                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                    <div className="relative mb-6">
                                        <input id="email" name="email" type="email" className="peer py-2 w-full border border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600 rounded" placeholder="Email address" />
                                    </div>
                                    <div className="relative">
                                        <input id="password" name="password" type="password" className="peer py-2 w-full border border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600 rounded" placeholder="Password" />
                                    </div>
                                    <div className="relative">
                                        <button className="bg-green-400 text-white rounded-md py-2 w-full my-4">Login</button>
                                    </div>
                                    <p className='text-center text-base font-semibold'>
                                        <small>
                                            Don't Have an Account?
                                            <Link to="/register" className='text-green-500 ml-1'>Click Here to Register</Link>
                                        </small>
                                    </p>
                                    <p className='horizontal-line mt-2 text-base font-semibold'>Or</p>
                                    <div className="relative">
                                        <button
                                            onClick={handleGoogleLogin}
                                            className="font-semibold text-base rounded-md py-2 w-full border border-gray-300 flex justify-center items-center">
                                            <FcGoogle className='mr-2 text-2xl' />
                                            Continue With Google
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Login;