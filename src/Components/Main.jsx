import { useState } from "react";
import { Link } from "react-router-dom";
import ImageAnalysis from "./ImageAnalysis";
import VideoAnalysis from "./VideoAnalysis";
import Navbar from "./Navbar";


function Main() {
    const [showN, setNav] = useState(false);
    const [showP, setPop] = useState(false);

    return (
        <div
            className="relative overflow-hidden"
        >
            <div className="text-white bg-gradient-to-r from-blue-300 to-green-300 shadow-xl w-full h-[55px] sm:h-[70px] flex items-center sm:grid sm:grid-cols-3">
                <img src="https://i.ibb.co/yWLCdq7/icon.jpg" alt="icon" className="w-[60px] h-full sm:h-[70px] sm:w-[90px]" />
                <h1 className="drop-shadow-xl text-[23px] px-4 ml-[-10px] sm:text-4xl font-bold sm:px-4 sm:ml-[-420px]">
                    FauxReality Detector
                </h1>
                <div className="hidden md:block sm:ml-[-100px]">
                    <nav className="px-[100px] ml-[200px] text-xl font-semibold">
                        <ul className="grid grid-cols-3 gap-[80px]">
                            <li className="py-2 hover:text-[25px] hover:text-black">
                                <button onClick={() => { setPop(!showP) }}>Detect</button>
                            </li>
                            <li className="py-2 hover:text-[25px] hover:text-black">
                                <Link to="/signin">Login</Link>
                            </li>
                            <li className="bg-white rounded-md drop-shadow-lg text-blue-800 w-[95px] h-[45px] flex justify-center hover:bg-black hover:text-white">
                                <Link to="/signup" className="py-2">SignUp</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="sm:hidden flex justify-end">
                    <button
                        onClick={() => {
                            setNav(!showN);
                        }}
                        className="text-xl ml-3 font-semibold bg-white text-blue-400 rounded-lg drop-shadow-xl w-[75px] h-[40px] hover:bg-gray-600 hover:text-white"
                    >
                        SignUp
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2">
                <ImageAnalysis />
                <VideoAnalysis />
            </div>
            {showN && <Navbar />}
            {showP && <Arrowpop />}
        </div>
    );

    function Arrowpop() {
        return (
            <div className="fixed inset-0 flex items-center bg-opacity-75 bg-gray-500 z-50">
                <div className="grid grid-cols-1 gap-[120px]">
                    <div className="grid grid-cols-2 mt-[120px]">
                        <div className="px-[180px] mt-12 grid grid-cols-2">
                            <img src="https://i.ibb.co/S538Sm6/Arrow.png" alt="arrow" className="w-[100px] h-[100px]" />
                            <p className="flex items-center ml-[-80px] text-lg font-semibold">Upload Image Here <br></br> To Detect Fraudulent</p>
                        </div>
                        <div className="px-[180px] mt-12 grid grid-cols-2">
                            <img src="https://i.ibb.co/S538Sm6/Arrow.png" alt="arrow" className="w-[100px] h-[100px]" />
                            <p className="flex items-center ml-[-80px] text-lg font-semibold">Upload Video Here <br></br> To Detect Fraudulent</p>
                        </div>
                    </div>
                    <div className="flex justify-center w-screen">
                        <button onClick={() => { setPop(!showP) }} className="bg-white p-2 border-2 border-blue-600 rounded-lg hover:bg-blue-500 hover:text-white">Got it</button>
                    </div>
                </div>
            </div>
        );
    };

};

export default Main;
