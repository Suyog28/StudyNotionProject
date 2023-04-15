import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useNavigate } from 'react-router-dom';

const SignupForm = ({ setIsLoggedIn }) => {
    const navigate = useNavigate();
    const [formData, setDataForm] = useState({
        firstName: "", lastName: "", email: "", createpassword: "", confirmpassword: ""
    })
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [accountType, setAccountType] = useState("student");
    function chnageHandler(event) {
        setDataForm((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value
        }))
    }

    function submitHandler(event) {
        event.preventDefault();
        if (formData.createpassword !== formData.confirmpassword) {
            toast.error("Password do not match")
            return;

        }
        setIsLoggedIn(true)
        toast.success("Account Created Successfully");
        navigate("/dashboard");
    }
    return (
        <div>
            <div className='flex bg-richblack-800 p-2 gap-x-2 my-6 rounded-full max-w-max'>

                <button
                    className={`${accountType === "student" ? "bg-richblack-900 text-richblack-5 p-2 rounded-full"
                        : "bg-transparent text-richblack-200 py-2 px-5 rounded-full transition-all duration-200"}`}
                    onClick={() => setAccountType("student")}
                >Student</button>
                <button
                    className={`${accountType === "Instructor" ? "bg-richblack-900 text-richblack-5 p-2 rounded-full"
                        : "bg-transparent text-richblack-200 py-2 px-5 rounded-full transition-all duration-200"}`}
                    onClick={() => setAccountType("Instructor")}
                >Instructor</button>

            </div>

            <form onSubmit={submitHandler}>
                <div className='flex gap-x-4 '>
                    <label>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>First Name<sup className='text-pink-200'>*</sup></p>
                        <input
                            type='text'
                            placeholder='Enter First Name'
                            value={formData.value}
                            name='firstName'
                            id='firstName'
                            onChange={chnageHandler}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                        />
                    </label>
                    <label>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Last Name<sup className='text-pink-200'>*</sup></p>
                        <input
                            type='text'
                            placeholder='Enter Last Name'
                            value={formData.value}
                            name='lastName'
                            id='lastName'
                            onChange={chnageHandler}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                        />
                    </label>
                </div>
                <div className='mt-[20px]'>
                    <label>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email<sup className='text-pink-200'>*</sup></p>
                        <input
                            type='email'
                            placeholder='Enter your email address'
                            value={formData.value}
                            name='email'
                            id='email'
                            onChange={chnageHandler}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                        />
                    </label>
                </div>
                <div className='flex gap-x-4 mt-[20px]'>
                    <label className="w-full relative">
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Create Password<sup className='text-pink-200'>*</sup></p>
                        <input
                            type={showPassword ? ("text") : ("password")}
                            placeholder='Enter password'
                            value={formData.value}
                            name='createpassword'
                            id='createpassword'
                            onChange={chnageHandler}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                        />
                        <span className="absolute right-3 top-[38px] cursor-pointer" onClick={() => setShowPassword((prev) => !prev)}>
                            {showPassword ? (<AiOutlineEye fontSize={24} fill='#AFB2BF' />) : (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />)}
                        </span>
                    </label>
                    <label className='w-full relative'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Confirm Password<sup className='text-pink-200'>*</sup></p>
                        <input
                            type={showConfirmPassword ? ("text") : ("password")}
                            placeholder='Confirm Password'
                            value={formData.value}
                            name='confirmpassword'
                            id='confirmpassword'
                            onChange={chnageHandler}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                        />
                        <span className="absolute right-3 top-[38px] cursor-pointer" onClick={() => setShowConfirmPassword((prev) => !prev)}>
                            {showConfirmPassword ? (<AiOutlineEye fontSize={24} fill='#AFB2BF' />) : (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />)}
                        </span>
                    </label>
                </div>
                <button className='bg-yellow-50 w-full rounded-[0.5rem] font-medium text-richblack-900 py-[8px] mt-6 p-[12px]'>Create Account</button>
            </form>
        </div >
    )
}

export default SignupForm