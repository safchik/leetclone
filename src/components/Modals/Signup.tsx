
import React, { useState, useEffect, use } from 'react';


type SignupProps = {};

const Signup: React.FC<SignupProps> = () => {


    return (<form className="space-y-6 px-6 pb-4" >
        <h3 className="text-xl font-medium text-white">Register to LeetClone</h3>
        <div>
            <label htmlFor="email" className="text-sm font-medium block mb-2 text-gray-300">
                Email
            </label>
            <input type="email" name="email" id="email" className='
            border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
            bg-gray-600 border-gray-400 placeholder-gray-400 text-white'
                placeholder='name@company.com' />
        </div>

        <div>
            <label htmlFor="email" className="text-sm font-medium block mb-2 text-gray-300">
                Display Name
            </label>
            <input type="displayName" name="displayName" id="displayName" className='
            border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
            bg-gray-600 border-gray-400 placeholder-gray-400 text-white'
                placeholder='Alan Walker' />
        </div>

        <div>
            <label htmlFor="password" className="text-sm font-medium block mb-2 text-gray-300">
                Password
            </label>
            <input type="password" name="password" id="password" className='
            border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
            bg-gray-600 border-gray-400 placeholder-gray-400 text-white'
                placeholder='********' />
        </div>

        <button type='submit' className='w-full text-white focus:ring-blue-300 font-medium rounded-lg
            text-sm px-5 py-2.5 text-center bg-brand-orange hover:bg-brand-orange-s
        '>
            Register
        </button>

        <div className='text-sm font-medium text-gray-400'>
            Already have an account?{" "}
            <a href='#' className='text-blue-700 hover:underline' >
                Log In
            </a>
        </div>
    </form>)
};
export default Signup;