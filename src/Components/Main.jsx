import { useState } from "react";
import { Link } from "react-router-dom";
import ImageAnalysis from "./ImageAnalysis";
import VideoAnalysis from "./VideoAnalysis";
import Navbar from "./Navbar";
import LoginContainer from "./LoginContainer";


function Main() {
    const [showN, setNav] = useState(false);
    const [showP, setPop] = useState(false);
    const [showB, setBg] = useState(true);
    const [showS, setSup] = useState(false);
    const [showI, setImg] = useState(false);
    const [showV, setVid] = useState(false);

    return (
        <div
            className="relative"
        >
            <div className="text-white flex items-center bg-gradient-to-r from-gray-900 to-gray-600 w-full h-[55px] sm:h-[70px] shadow-2xl sm:flex sm:flex-row sm:gap-[100px]">
                <div className="basis-1/2 flex flex-row">
                    <img src="https://i.ibb.co/yWLCdq7/icon.jpg" alt="icon" className="w-[60px] h-full sm:h-[70px] sm:w-[80px]" />
                    <p className="drop-shadow-xl text-[23px] flex items-center px-4 ml-[-10px] sm:text-4xl font-bold sm:px-0 sm:ml-2">
                        <h1 className="whitespace-nowrap">FauxReality Detector</h1>
                    </p>
                </div>
                <div className="hidden md:block">
                    <nav className="ml-[110px]">
                        <ul className="flex flex-row gap-[50px] text-xl font-semibold">
                            <li className="py-2 whitespace-nowrap hover:text-black">
                                <button onClick={() => {
                                    setBg(true)
                                    setSup(false)
                                    setVid(false)
                                    setImg(false)
                                }}>Home</button>
                            </li>
                            <li className="py-2 whitespace-nowrap hover:text-black">
                                <button onClick={() => {
                                    setImg(true)
                                    setSup(false)
                                    setBg(false)
                                    setVid(false)
                                }}>Detect Image</button>
                            </li>
                            <li className="py-2 whitespace-nowrap hover:text-black">
                                <button onClick={() => {
                                    setVid(true)
                                    setSup(false)
                                    setBg(false)
                                    setImg(false)
                                }}>Detect Video</button>
                            </li>
                            <li className="bg-white rounded-md drop-shadow-lg text-black w-[95px] h-[45px] flex justify-center hover:bg-black hover:text-white">
                                <button onClick={() => {
                                    setSup(true)
                                    setImg(false)
                                    setVid(false)
                                    setBg(false)
                                }}>SignUp</button>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="sm:hidden flex justify-end">
                    <button
                        onClick={() => {
                            setNav(!showN);
                        }}
                        className="text-xl ml-[60px] font-semibold bg-white text-black rounded-lg drop-shadow-xl w-[75px] h-[40px] hover:bg-gray-600 hover:text-white"
                    >
                        SignUp
                    </button>
                </div>
            </div>
            <div>
                {showB && <div className="relative bg-cover bg-center h-screen"
                    style={{
                        backgroundImage: "url('https://i.ibb.co/7yTYF7N/bg.jpg')",
                    }}>
                </div>}
            </div>
            <div>
                {showN && <Navbar></Navbar>}
            </div>
            <div>
                {showP && <Arrowpop></Arrowpop>}
            </div>
            <div>
                {showS && <LoginContainer></LoginContainer>}
            </div>
            <div>
                {showI && <ImageAnalysis></ImageAnalysis>}
            </div>
            <div>
                {showV && <VideoAnalysis></VideoAnalysis>}
            </div>
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
