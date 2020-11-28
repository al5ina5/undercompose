import React from "react";
import PropTypes from "prop-types";

import "./Card.css";



const Primary = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden focus:outline-none border border-gray-300">
      <img className="w-full" src="https://bit.ly/3o265LD" alt="Sunset in the mountains" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Test Card</div>
        <p className="text-gray-700 text-base">This is a test card</p>
      </div>
    </div>
  )
}

const Secondary = () => {
  return (
      <div
          className="bg-white p-6 focus:outline-none border border-gray-300 rounded-lg flex justify-between items-center">
        <div className="flex">
          <div className="mr-4">
            <img className="shadow sm:w-12 sm:h-12 w-14 h-14 rounded-full" src="https://bit.ly/3ogcG5B" alt="Avatar"/>
          </div>
          <div>
            <h1 className="font-bold text-xl mb-2">Link</h1>
            <p className="text-gray-600">UX Designer at Hyrule</p>
          </div>
        </div>
        <button className="bg-blue-500 hover:opacity-75 text-white rounded-full px-8 py-2">
          Follow
        </button>
      </div>
  )
}

const Info = () => {
    return (
        <div className="bg-white focus:outline-none border border-gray-300 p-3 rounded lg:w-64">
            <div>
                <div style={{backgroundImage: "url('https://bit.ly/3o265LD')"}} className="bg-cover bg-center bg-gray-300 h-32 rounded">
                </div>
            </div>
            <div className="mt-6">
                <p className="text-lg text-bold tracking-wide text-gray-600 mb-2">
                    Title
                </p>
                <p className="text-sm text-gray-600 font-hairline">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </div>
            <div className="mt-6">
                <button
                    className="rounded shadow-md flex items-center shadow bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
                    Default
                </button>
            </div>
        </div>
    )
}
const ConfirmCard = () => {
    return (
        <div className="p-8">
            <div className="bg-white rounded-lg shadow-xl max-w-sm">
                <div className="h-64 bg-blue-500 flex justify-center items-center rounded-t-lg">
                    <div
                        className="h-24 w-24 bg-white rounded-full flex justify-center items-center"
                    >
                        <i className="material-icons text-blue-500">
                            done
                        </i>
                    </div>
                </div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                    className="fill-current"
                >
                    <path
                        fill="#4299E1"
                        fill-opacity="1"
                        d="M0,64L80,85.3C160,107,320,149,480,154.7C640,160,800,128,960,112C1120,96,1280,
                            96,1360,96L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,
                            640,0,480,0C320,0,160,0,80,0L0,0Z"
                    />
                </svg>
                <div className="p-8 -mt-12">
                    <p className="font-bold text-center text-4xl text-gray-700">Thank you</p>
                    <p className="text-gray-600 text-center mt-5">
                        Your order has been placed. We'll send you an email.
                    </p>
                    <div className="flex justify-center mt-6">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Card = ({ variant}) => {
    // eslint-disable-next-line default-case
  switch(variant){
    case("primary"):
        return <Primary />
    case("secondary"):
        return <Secondary />
    case("info"):
        return <Info />
    case("confirm"):
        return <ConfirmCard />
  }
};


export default Card;
