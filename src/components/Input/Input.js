import React from 'react'
import './Input.css'

const Primary = () => {
    return (
        <div className="lg:max-w-sm ">
            <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
            </label>
            <input
                className="bg-white focus:outline-none border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                type="email" placeholder="jane@example.com" />
        </div>
    )
}

const Symbol = () => {
    return (
        <div className="lg:max-w-sm ">
            <label className="block text-gray-700 text-sm font-bold mb-2">
                Amount
            </label>
            <div className="relative flex w-full flex-wrap items-stretch mb-3">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 sm:text-sm">
                    $
                  </span>
                </div>

                <input type="text" placeholder="Amount" className="bg-white px-2 focus:outline-none border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none pl-8" />
            </div>
        </div>
    )
}

const Shadow = () => {
    return (
        <div className="lg:max-w-sm ">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Username
            </label>
            <input
                className="shadow-md border-2 border-gray-100 border-opacity-0.5 appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none " type="text" placeholder="Username" />
                
        </div>

    )
}

const Error = () => {
    return (
        <div className="lg:max-w-sm ">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
            </label>
            <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none "
                id="password" type="password" placeholder="**" />
                <p className="text-red-500 text-xs bold">Please enter a password.</p>
        </div>
    )
}



export const Input = ({type}) => {
    switch (type){
        case("primary"):
            return <Primary />

        case("symbol"):
            return <Symbol />

        case("shadow"):
            return <Shadow />

        case("error"):
            return <Error />






        default:
            return <Primary />


    }
}
