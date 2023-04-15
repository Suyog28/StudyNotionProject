import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { Link, useNavigate } from 'react-router-dom'

const LoginForm = (props) => {
    let setIsLoggedIn = props.setIsLoggedIn;
    const [formData, setDataForm] = useState({ email: "", password: "" })
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    function changeHandler(event) {
        setDataForm((prevData) => ({

            ...prevData,
            [event.target.name]: event.target.value

        }))
    }

    function submitHandler(event) {
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In Successfully");
        navigate("/dashboard");


    }

    return (
        <div >
            <form onSubmit={submitHandler} className='flex flex-col w-full gap-y-4 mt-6 '>
                <label className='w-full'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email Address<sup className='text-pink-200'>*</sup>
                    </p>

                    <input
                        type='email'
                        value={formData.email}
                        placeholder='Enter email id'
                        id='email'
                        required
                        onChange={changeHandler}
                        name="email"
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                    />
                </label>

                <label className='w-full relative'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Password<sup className='text-pink-200'>*</sup>
                    </p>
                    <input
                        type={showPassword ? ("text") : ("password")}
                        placeholder='Enter password'
                        id='password'
                        value={formData.password}
                        required
                        onChange={changeHandler}
                        name='password'
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                    />
                    <span className="absolute right-3 top-[38px] cursor-pointer" onClick={() => setShowPassword((prev) => !prev)}>
                        {showPassword ? (<AiOutlineEye fontSize={24} fill='#AFB2BF' />) : (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />)}
                    </span>
                    <Link to="#"><p className='text-xs mt-1 text-blue-100 flex justify-end'>Forgot Password</p></Link>
                </label>
                <div>
                    <button className='bg-yellow-50 w-full rounded-[0.5rem] font-medium text-richblack-900 py-[8px] mt-6 p-[12px]'>Sign In</button>
                </div>
            </form>
        </div>
    )
}

export default LoginForm