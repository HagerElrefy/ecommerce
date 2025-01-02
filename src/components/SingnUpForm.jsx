import React, { memo, useCallback, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/slices/userSlice';
import { useNavigate } from 'react-router-dom';

const SignUpForm = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
            lastName: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string()
                .min(8, 'Must be at least 8 characters')
                .required('Required'),
        }),
        onSubmit: (values) => {
            console.log(values);
            dispatch(addUser(values));
            navigate('/');        },
    });
    const handleSignIn = useCallback(()=>{
        navigate('/signIn')
    },[navigate])
    return (
        <>
        <form
            onSubmit={formik.handleSubmit}
            className="w-5/6 md:w-1/2 lg:w-2/3 p-10 mx-auto align-middle bg-white rounded-lg shadow-lg"
        >
            <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
                Sign Up
            </h1>

            {/* First Name */}
            <div className="mb-4">
                <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                >
                    First Name
                </label>
                <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                    className={`w-full px-4 py-2 border ${formik.touched.firstName && formik.errors.firstName
                            ? 'border-red-500'
                            : 'border-gray-300'
                        } rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none`}
                />
                {formik.touched.firstName && formik.errors.firstName && (
                    <div className="text-red-500 text-sm mt-1">
                        {formik.errors.firstName}
                    </div>
                )}
            </div>

            {/* Last Name */}
            <div className="mb-4">
                <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                >
                    Last Name
                </label>
                <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName}
                    className={`w-full px-4 py-2 border ${formik.touched.lastName && formik.errors.lastName
                            ? 'border-red-500'
                            : 'border-gray-300'
                        } rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none`}
                />
                {formik.touched.lastName && formik.errors.lastName && (
                    <div className="text-red-500 text-sm mt-1">
                        {formik.errors.lastName}
                    </div>
                )}
            </div>

            {/* Email */}
            <div className="mb-4">
                <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                >
                    Email Address
                </label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    className={`w-full px-4 py-2 border ${formik.touched.email && formik.errors.email
                            ? 'border-red-500'
                            : 'border-gray-300'
                        } rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none`}
                />
                {formik.touched.email && formik.errors.email && (
                    <div className="text-red-500 text-sm mt-1">
                        {formik.errors.email}
                    </div>
                )}
            </div>

            {/* Password */}
            <div className="mb-4">
                <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700 mb-1"
                >
                    Password
                </label>
                <div className="relative">
                    <input
                        id="password"
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                        className={`w-full px-4 py-2 border ${formik.touched.password && formik.errors.password
                                ? 'border-red-500'
                                : 'border-gray-300'
                            } rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none`}
                    />
                    <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute inset-y-0 right-2 flex items-center text-gray-500 hover:text-gray-700 focus:outline-none"
                    >
                        {showPassword ? <FaEye/> : <FaEyeSlash/>}
                    </button>
                </div>
                {formik.touched.password && formik.errors.password && (
                    <div className="text-red-500 text-sm mt-1">
                        {formik.errors.password}
                    </div>
                )}
            </div>

            {/* Submit Button */}
            <div className="mt-6">
                <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                >
                    Submit
                </button>
            </div>
        </form>
        <div className='flex justify-center items-center gap-3'>
                <p>Have An Account ?</p>
                <button onClick={handleSignIn} className='text-PrimaryBlue font-bold'>Sign in</button>
        </div>
        </>
    );
};

export default memo(SignUpForm);
