import { useState } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { authenticateUser } from "../Services/security-service";

const Login = () => {
    const [authErrorMessage, setAuthErrorMessage] = useState('');
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,//Will take your function as parameter where you call your REST API which can do CUD operations
        formState: { errors }
    } = useForm();
    //The data parameter is Html form data=all input fields data
    const onSubmit = async (user) => {
        const authenticationResult = (await authenticateUser(user));
        console.log(authenticationResult);
        if (authenticationResult.success === true) {
            sessionStorage.setItem("token", authenticationResult.token);
            sessionStorage.setItem("role", authenticationResult.role);
            navigate('/home');
        } else {
            setAuthErrorMessage(authenticationResult.message);
            setTimeout(() => {
                setAuthErrorMessage('');
            }, 5000);
        }
    };

    return (
        <div className="ml-48 mr-48">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                    <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Email</label>
                    <input
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="text"
                        name="email"
                        {...register("email", {
                            required: true,
                            pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/
                        })}
                    />
                    {errors.email && errors.email.type === "required" && (
                        <p className="text-red-500">Email is required.</p>
                    )}
                    {errors.email && errors.email.type === "pattern" && (
                        <p className="text-red-500">Email is not valid.</p>
                    )}
                </div>
                <div className="form-control">
                    <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Password</label>
                    <input
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="password"
                        name="password"
                        {...register("password", {
                            required: true,
                            minLength: 6
                        })}
                    />
                    {errors.password && errors.password.type === "required" && (
                        <p className="text-red-500">Password is required.</p>
                    )}
                    {errors.password && errors.password.type === "minLength" && (
                        <p className="text-red-500">
                            Password should be at-least 6 characters.
                        </p>
                    )}
                </div>
                <div className="form-control">
                    <label></label>
                    <button type="submit" className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Login</button>
                </div>
            </form>
            <p className='text-xl text-red-500'>{authErrorMessage}</p>
        </div>
    );
}

export default Login