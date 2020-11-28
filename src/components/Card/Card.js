import React from "react";
import PropTypes from "prop-types";

import "./Card.css";

const classNames = {
  primary: {
    container:"max-w-sm rounded overflow-hidden shadow-lg",
    img:"w-full",
    textContainer:"px-6 py-4",
    titleText:"font-bold text-xl mb-2",
    description:"text-gray-700 text-base"
  },
  secondary: {
    container:"max-w-sm rounded overflow-hidden shadow-lg p-2",
    img:"w-full",
    textContainer:"px-6 py-4",
    titleText:"font-bold text-xl mb-2",
    description:"text-gray-700 text-base"
  }
}

const Primary = () => {
  return (
    <div className={classNames.primary.container}>
      <img className={classNames.primary.img} src="https://bit.ly/3o265LD" alt="Sunset in the mountains" />
      <div className={classNames.primary.textContainer}>
        <div className={classNames.primary.titleText}>Test Card</div>
        <p className={classNames.primary.description}>This is a test card</p>
      </div>
    </div>
  )
}

const Secondary = () => {
  return (
    <div class="bg-white p-6 focus:outline-none border border-gray-300 rounded-lg flex justify-between items-center">
      <div class="flex">
        <div class="mr-4">
          <img class="shadow sm:w-12 sm:h-12 w-14 h-14 rounded-full" src="https://bit.ly/3ogcG5B" alt="Avatar" />
        </div>
        <div>
          <h1 class="text-xl font-medium text-gray-700">Link</h1>
          <p class="text-gray-600">UX Designer at Hyrule</p>
        </div>
      </div>
      <button class="bg-blue-500 hover:opacity-75 text-white rounded-full px-8 py-2">
        Follow
      </button>
    </div>
  )
}

const Card = ({ variant}) => {
  switch(variant){
    case("primary"):
      return <Primary />
    case("secondary"):
      return <Secondary />  
  }
};


export default Card;
