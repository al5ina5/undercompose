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
                    className="rounded flex items-center shadow bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
                    Default
                </button>
            </div>
        </div>
    )
}
const Confirm = () => {
    return (
        <div className="p-8">
            <div className="bg-white rounded-lg focus:outline-none border border-gray-300 max-w-sm">
                <div className="h-64 bg-blue-500 flex justify-center items-center rounded-t-lg">
                    <div
                        className="h-24 w-24 bg-white rounded-full flex justify-center items-center"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 0 24 24" width="28"><path d="M0 0h24v24H0z" fill="none"/><path fill="#4299E1" d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
                    </div>
                </div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                    className="fill-current">
                    <path
                        fill="#4299E1"
                        d="M0,64L80,85.3C160,107,320,149,480,154.7C640,160,800,128,960,112C1120,96,1280,
                            96,1360,96L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,
                            640,0,480,0C320,0,160,0,80,0L0,0Z"/>
                </svg>
                <div className="p-8 -mt-12">
                    <p className="font-bold text-center text-4xl text-gray-700">Thank you</p>
                    <p className="text-gray-600 text-center mt-5">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, dicta!
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
const Announcement = () => {
    return (
        <div className="p-8 w-15">
            <div className="bg-white rounded-lg focus:outline-none border border-gray-300">
                <div className="p-16">
                    <div className="flex justify-center items-center">
                        <svg id="a31e7729-94ce-4b70-883a-94bdaa3e886c" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 1000 800"><path d="M166.5995,372.68625c.90983,56.17389,21.9053,62.25537,47.68851,56.39652,29.45433-6.693,53.6295-27.67107,65.54457-55.4269l8.21721-19.14177a52.21662,52.21662,0,0,0-27.38436-68.5802l-.0001,0a52.21661,52.21661,0,0,0-68.58022,27.38436C165.64317,323.70531,160.42089,345.20938,166.5995,372.68625Z" transform="translate(-124.21457 -117.43611)" fill="#2f2e41"/><path d="M332.38876,259.62619l7.91365-13.39131a12.57983,12.57983,0,0,0-7.10867-18.41687h0a12.57983,12.57983,0,0,0-16.2947,12.423l.46505,14.39458-37.19064,101.9211,20.28071,4.23409Z" transform="translate(-124.21457 -117.43611)" fill="#9f616a"/><path d="M136.73039,510.87935l-9.74073,12.12728a12.57982,12.57982,0,0,0,4.41236,19.24175l0,0a12.57983,12.57983,0,0,0,17.89835-9.97482l1.59045-14.314,51.33163-95.583-19.47062-7.08022Z" transform="translate(-124.21457 -117.43611)" fill="#9f616a"/><path d="M196.91231,611.77256l1.43374,17.22261.33632,4.01806,95.3352-9.16888a21.02015,21.02015,0,0,0,16.83326-29.47148L280.105,528.36751l-10.62034-22.79833-46.02147-10.62034c-37.95,29.04658-3.80566,61.10227,39.15364,93.52972q2.52237,1.91174,5.09777,3.82338Z" transform="translate(-124.21457 -117.43611)" fill="#2f2e41"/><path d="M164.78854,671.41121h0a6.84954,6.84954,0,0,0,6.2494-2.41836l31.18452-37.74967-1.77006-17.70057-10.633-6.37978a6.987,6.987,0,0,0-10.09383,3.42593l-20.33954,51.52682A6.84955,6.84955,0,0,0,164.78854,671.41121Z" transform="translate(-124.21457 -117.43611)" fill="#2f2e41"/><path d="M191.60214,608.23245l1.77006,21.24067,4.97385-.47795,90.36135-8.69093a21.02015,21.02015,0,0,0,16.83326-29.47148L280.105,533.89008v-5.52257l-10.62034-22.79833-46.02147-10.62034c-37.95,29.04658-3.80566,61.10227,39.15364,93.52972l-.2124.28327Z" transform="translate(-124.21457 -117.43611)" opacity="0.2"/><path d="M155.93826,664.331h0a6.84951,6.84951,0,0,0,6.2494-2.41835L193.3722,624.163l-1.77006-17.70056-10.633-6.37978a6.987,6.987,0,0,0-10.09384,3.42593L150.5358,655.03536A6.84954,6.84954,0,0,0,155.93826,664.331Z" transform="translate(-124.21457 -117.43611)" fill="#2f2e41"/><path d="M188.062,604.69233l1.77,21.24068,95.33529-9.17139A21.0234,21.0234,0,0,0,302.008,587.29413L276.56484,530.35V498.489l-61.952-10.62033c-39.44328,30.18689-1.01208,63.62728,44.25141,97.35309Z" transform="translate(-124.21457 -117.43611)" fill="#2f2e41"/><circle cx="124.02937" cy="211.12744" r="26.55084" fill="#9f616a"/><path d="M212.84282,372.815,250.014,397.59574l31.861-7.08022L264.17445,372.815V346.26411l-28.3209-1.77005C235.25892,355.09662,229.18353,364.79887,212.84282,372.815Z" transform="translate(-124.21457 -117.43611)" fill="#9f616a"/><path d="M207.53265,496.7189l69.03219,8.85028,15.93051-74.34237c7.40077-19.73352,3.15453-37.16842-10.54741-52.737a11.8239,11.8239,0,0,0-11.23618-9.49965l-6.53731.28464c.7395,23.47551-16.55636,17.82135-42.48135-1.77l-3.13044.93913a17.58322,17.58322,0,0,0-12.34088,19.41846l2.8545,19.26788a131.83032,131.83032,0,0,0,5.61911,22.46529C221.77291,450.74766,219.24374,473.14036,207.53265,496.7189Z" transform="translate(-124.21457 -117.43611)" fill="#6c63ff"/><path d="M175.67163,417.06636l31.861,10.62034,14.16045-51.33163-4.79727-2.18058a17.20447,17.20447,0,0,0-22.28465,7.538Z" transform="translate(-124.21457 -117.43611)" fill="#6c63ff"/><polygon points="145.27 251.839 162.971 271.309 184.211 237.678 157.66 223.518 145.27 251.839" fill="#6c63ff"/><path d="M217.268,320.5983c16.68448,6.2914,34.49038,5.63913,53.10169,0V299.35762H217.268Z" transform="translate(-124.21457 -117.43611)" fill="#2f2e41"/><polygon points="921.132 567.779 902.827 575.406 780.798 409.141 692.327 578.457 669.447 573.881 736.563 340.5 814.356 340.5 921.132 567.779" fill="#2f2e41"/><path d="M1069.90341,724.00146h0a7.976,7.976,0,0,1-6.07834-.78277l-38.60279-22.22585a7.83329,7.83329,0,0,1-1.63043-12.32748l3.45008-3.45006,18.30436-1.52536,27.98213,26.86284A7.976,7.976,0,0,1,1069.90341,724.00146Z" transform="translate(-124.21457 -117.43611)" fill="#2f2e41"/><path d="M770.62955,730.10291h0a7.976,7.976,0,0,0,6.07834-.78278l38.60279-22.22585a7.83329,7.83329,0,0,0,1.63043-12.32748l-3.45008-3.45006-18.30436-1.52536-27.98213,26.86284A7.976,7.976,0,0,0,770.62955,730.10291Z" transform="translate(-124.21457 -117.43611)" fill="#2f2e41"/><path d="M808.915,215.40339l-7.62682,4.57609-15.80509-25.68327a11.5509,11.5509,0,0,1,7.45781-17.35692h0a11.55089,11.55089,0,0,1,13.89894,10.44984Z" transform="translate(-124.21457 -117.43611)" fill="#ffb9b9"/><path d="M1020.18781,415.36054l3.16427-8.31241,28.30256,10.41136a11.55089,11.55089,0,0,1,4.87162,18.25236l0,0a11.55089,11.55089,0,0,1-17.38487.38192Z" transform="translate(-124.21457 -117.43611)" fill="#ffb9b9"/><circle cx="776.22219" cy="166.60864" r="22.88045" fill="#ffb9b9"/><polygon points="796.052 215.42 764.019 215.42 764.019 180.337 791.476 177.286 796.052 215.42" fill="#ffb9b9"/><path d="M943.14693,467.08834H856.20122c3.06581-48.51189,5.4936-95.39321,0-122.02906l5.05559-24.26683a13.6723,13.6723,0,0,1,15.08076-10.7782l11.89628,1.487c8.05639,14.16347,17.79287,14.02685,28.98191,1.52537h14.32935a14.36528,14.36528,0,0,1,14.36246,14.64968v0a181.4649,181.4649,0,0,1,3.68663,52.08078Z" transform="translate(-124.21457 -117.43611)" fill="#3f3d56"/><polygon points="672.497 97.967 684.7 91.866 750.291 200.167 731.987 227.623 672.497 97.967" fill="#3f3d56"/><path d="M1020.361,419.7006l10.42855-8.79682-55.413-77.64818a49.111,49.111,0,0,0-48.84414-19.77546l-1.74815.321,20.95313,36.66813,27.59739,20.89445Z" transform="translate(-124.21457 -117.43611)" fill="#3f3d56"/><path d="M926.898,270.538s4.27546-9.406-6.84076-13.6815c0,0-9.406-15.39169-28.21809-5.13056,0,0-12.82641,5.13056-12.82641,18.81206s-4.27547,16.24678-4.27547,16.24678,6.36692-6.53187,8.07711-11.66243,15.01043-6.29454,20.141-1.164,17.957,4.27546,17.957,4.27546l-.8551,18.81207s4.27547-11.11622,5.98566-11.11622S929.46329,270.538,926.898,270.538Z" transform="translate(-124.21457 -117.43611)" fill="#2f2e41"/><ellipse cx="800.57086" cy="657.83612" rx="140" ry="7.29167" fill="#e6e6e6"/><ellipse cx="101.57086" cy="657.83612" rx="74" ry="3.85417" fill="#e6e6e6"/><path d="M791.16889,245.72478,341.30038,286.04364a8.37412,8.37412,0,0,1-9.07753-7.58424L322.22146,166.86625a8.37413,8.37413,0,0,1,7.58424-9.07753l449.86852-40.31887a8.37412,8.37412,0,0,1,9.07752,7.58424l10.00139,111.59316A8.37412,8.37412,0,0,1,791.16889,245.72478Z" transform="translate(-124.21457 -117.43611)" fill="#6c63ff"/><circle cx="269.65462" cy="99.25313" r="35.12995" fill="#fff"/><path d="M472.58815,186.12032a5.855,5.855,0,0,0,1.04531,11.66323L748.5526,173.14429a5.855,5.855,0,1,0-1.0453-11.66324Z" transform="translate(-124.21457 -117.43611)" fill="#fff"/><path d="M475.72406,221.11a5.855,5.855,0,1,0,1.0453,11.66323L751.68851,208.134a5.855,5.855,0,1,0-1.0453-11.66324Z" transform="translate(-124.21457 -117.43611)" fill="#fff"/></svg>
                    </div>
                    <div className="mt-8 text-center">
                        <h1 className="font-bold text-lg text-gray-700 mb-1">Customer support 24/7</h1>
                        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <button
                            className="mt-6 bg-blue-500 hover:bg-blue-400 text-white rounded-full px-12 py-3 shadow-xl focus:outline-none">
                            Get started
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}
const Dashboard = () => {
    return (
        <div className=" max-w-sm rounded h-full flex  ">
            <div className="rounded bg-white  h-48 w-48 p-6 flex flex-col justify-around focus:outline-none border border-gray-300">
                <div>
                    <p className="text-base text-gray-600">Revenue</p>
                </div>
                <div>
                    <p className="text-2xl text-gray-700 font-bold">$56,734</p>
                </div>
                <div className="text-sm">
                    <p className="text-green-500 mb-1 flex item-center">
                        <i className="material-icons">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path fill="#48BB77" d="M7 14l5-5 5 5z"/></svg>
                        </i> 5.77%

                    </p>
                    <p className="text-gray-600">Since last month</p>
                </div>
            </div>
        </div>

        )
}
const Banhammer = () => {
    return (
        <div className="p-16">
            <div className="bg-white py-16 rounded-lg relative max-w-sm focus:outline-none border border-gray-300">
                <p className="text-center text-gray-700 font-bold text-3xl">You have been banned</p>
                <p className="text-gray-600 text-lg text-center">
                    Unusual activity detected.
                </p>
                <div className="flex justify-center items-center mt-6">
                    <button className="bg-red-500 text-white font-bold px-8 py-2 rounded-lg hover:opacity-75">
                        close
                    </button>
                </div>
                <div className="absolute w-full">
                    <svg
                        className="fill-current text-red-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 320"
                    >
                        <path
                            d="M0,64L120,90.7C240,117,480,171,720,176C960,181,1200,139,1320,117.3L1440,
                        96L1440,320L1320,320C1200,320,960,320,720,
                        320C480,320,240,320,120,320L0,320Z"
                        />
                    </svg>
                    <div className="h-6 w-full bg-red-500 rounded-b-lg">

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
        return <Confirm />
    case ("announcement"):
        return <Announcement />
    case ("dashboard"):
        return <Dashboard />
    case ("ban"):
        return <Banhammer />
  }
};


export default Card;
