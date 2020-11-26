import React from 'react'
import './Input.css'

const classNames = {
    container:"lg:max-w-sm py-10 px-10",
    primary:{
        label:"block text-gray-700 text-sm font-bold mb-2",
        input:"bg-white focus:outline-none border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
    },
    icon:{
        label:"block text-gray-700 text-sm font-bold mb-2",
        input:"bg-white px-2 focus:outline-none border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none pl-8",
        inputContainer:"relative flex w-full flex-wrap items-stretch mb-3",
        iconContainer:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",
        icon:"text-gray-500 sm:text-sm"
    },
    shadow:{
        label:"block text-gray-700 text-sm font-bold mb-2",
        input:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none "
    },
    error: {
        label:"block text-gray-700 text-sm font-bold mb-2",
        input:"shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none ",
        errorText:"text-red-500 text-xs bold"
    }

}

const Primary = () => {
    return (
        <div className={classNames.container}>
            <label className={classNames.primary.label}>
                Email
            </label>
            <input
                className={classNames.primary.input}
                type="email" placeholder="jane@example.com" />
        </div>
    )
}

const Symbol = () => {
    return (
        <div className={classNames.container}>
            <label className={classNames.primary.label}>
                Amount
            </label>
            <div className={classNames.icon.inputContainer}>
                <div className={classNames.icon.iconContainer}>
                  <span className={classNames.icon.icon}>
                    $
                  </span>
                </div>

                <input type="text" placeholder="Amount" className={classNames.icon.input} />
            </div>
        </div>
    )
}

const Shadow = () => {
    return (
        <div className={classNames.container}>
            <label className={classNames.shadow.label} htmlFor="username">
                Username
            </label>
            <input
                className={classNames.shadow.input} type="text" placeholder="Username" />
        </div>
    )
}

const Error = () => {
    return (
        <div className={classNames.container}>
            <label className={classNames.error.label} htmlFor="password">
                Password
            </label>
            <input
                className={classNames.error.input}
                id="password" type="password" placeholder="**" />
                <p className={classNames.error.errorText}>Please enter a password.</p>
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
