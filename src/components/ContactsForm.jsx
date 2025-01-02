import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';

function ContactsForm() {
    const user = useSelector(state => state.user.user);
    const formik = useFormik({
        initialValues: {
            email: user.email || '',
            message: '',
            fullName: user.firstName ? user.firstName +'' + user.lastName : ''
        },
        validationSchema: Yup.object({
            fullName: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
            message: Yup.string() 
                .max(200, 'Must be 200 characters or less')
                .required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
        }),
        onSubmit: (values) => {
            alert('We Get Your');
        },
    });
    return (
        <form
            onSubmit={formik.handleSubmit}
            className="w-5/6 md:w-1/2 lg:w-2/3 p-10 mx-auto align-middle bg-white rounded-lg shadow-lg"
        >
            {/* Full Name */}
            <div className="mb-4">
                <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                >
                    Full Name
                </label>
                <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.fullName}
                    className={`w-full px-4 py-2 border ${formik.touched.fullName && formik.errors.fullName
                        ? 'border-red-500'
                        : 'border-gray-300'
                        } rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none`}
                />
                {formik.touched.fullName && formik.errors.fullName && (
                    <div className="text-red-500 text-sm mt-1">
                        {formik.errors.fullName}
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

            {/* message */}
            <div className="mb-4">
                <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                >
                    Message
                </label>
                <textarea
                
                    id="message"
                    name="message"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.message}
                    className={`w-full px-4 py-2 border ${formik.touched.message && formik.errors.message
                        ? 'border-red-500'
                        : 'border-gray-300'
                        } rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none`}
                />
                {formik.touched.message && formik.errors.message && (
                    <div className="text-red-500 text-sm mt-1">
                        {formik.errors.message}
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
        </form>)
}

export default ContactsForm