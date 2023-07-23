import icon from "./icon.jpg";
import { useState } from "react";
import Uploadicon from "./upload icon.png";
import Google from "./google-icon.png";


function Main() {

    const [show, setShow] = useState(false);
    const [inn, setIn] = useState(false);
    const [up, setUp] = useState(false);

    return (
        <div>
            <div className="text-white bg-blue-500 shadow-xl w-full h-[55px] sm:h-[70px] flex items-center sm:grid sm:grid-cols-3">
                <img src={icon} alt="icon" className="w-[60px] h-full sm:h-[70px] sm:w-[90px]" />
                <h1 className="drop-shadow-xl text-[23px] px-4 ml-[-10px] sm:text-4xl font-bold sm:px-4 sm:ml-[-420px]">
                    FauxReality Detector
                </h1>
                <div className="hidden md:block sm:ml-[-100px]">
                    <nav className="px-[100px] ml-[200px] text-xl font-semibold">
                        <ul className="grid grid-cols-3 gap-[80px]">
                            <li className="py-2 hover:text-[25px]">
                                <a href="/">
                                    <button onClick={() => { setShow(!show) }}>
                                        Detect
                                    </button>
                                </a>
                            </li>
                            <li className="py-2 hover:text-[25px]">
                                <a>
                                    <button onClick={() => { setIn(!inn) }}>
                                        Login
                                    </button>
                                </a>
                            </li>
                            <li className="bg-white rounded-md drop-shadow-lg text-blue-500 w-[95px] h-[45px] flex justify-center hover:bg-blue-900 hover:text-white">
                                <a className="py-2">
                                    <button onClick={() => { setUp(!up) }}>
                                        SignUp
                                    </button>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="sm:hidden flex justify-end">
                    <button
                        onClick={() => {
                            setShow(!show);
                        }}
                        className="text-xl ml-3 font-semibold bg-white text-blue-400 rounded-lg drop-shadow-xl w-[75px] h-[40px] hover:bg-gray-600 hover:text-white"
                    >
                        SignUp
                    </button>
                </div>
            </div>
            <div className="flex justify-center py-[100px] sm:py-[90px]">
                <div className="h-[450px] w-[350px] sm:h-[500px] sm:w-[700px] bg-blue-300 shadow-xl rounded-xl">
                    <div className="border-dashed border-2 border-white mt-4 sm:mt-4 ml-4 w-[320px] h-[418px] sm:h-[470px] sm:w-[670px]">
                        <div className="grid grid-cols-1">
                            <div className="py-[60px] grid grid-cols-1">
                                <div className="flex justify-center mt-[-40px] sm:mt-[-30px]">
                                    <img src={Uploadicon} alt="upload" className="h-[200px]" />
                                </div>
                                <div className="flex justify-center font-medium text-xl mt-[-15px] text-white">
                                    <h1>Drop Files here</h1>
                                </div>
                                <div className="flex justify-center font-medium text-xl py-3 text-white">
                                    <h1>OR</h1>
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <input type="file" className="px-12 mt-[-55px] w-[300px]" />
                            </div>
                            <div className="flex justify-center py-2 sm:py-8">
                                <button className="bg-white shadow-2xl rounded-md w-[240px] h-[45px] hover:bg-blue-800">
                                    <p className="text-[26px] text-blue-700 drop-shadow-xl font-semibold hover:text-white">Detect Fraudulent</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {show && <Navbar />}
            {inn && <Login />}
            {up && <Signup />}
        </div>
    );

    function Navbar() {
        return (
            <div className="sm:hidden py-[55px] text-black fixed inset-0 flex items-start justify-end z-20">
                <div className="bg-white rounded-lg h-[165px] w-[130px] text-xl mr-2">
                    <nav>
                        <ul className="mt-0 grid grid-cols-1 gap-2 font-semibold">
                            <li className="flex justify-center h-[50px] hover:bg-black hover:rounded-lg hover:text-white">
                                <a href="/" className="mt-2"><button onClick={() => { setShow(!show) }}>
                                    Detect
                                </button></a>
                            </li>
                            <li className="flex justify-center h-[50px] hover:bg-black hover:rounded-lg hover:text-white">
                                <a className="mt-2"><button onClick={() => {
                                    setIn(!inn)
                                    setShow(!show)
                                }}>
                                    Login
                                </button></a>
                            </li>
                            <li className="flex justify-center h-[50px] hover:bg-black hover:rounded-lg hover:text-white">
                                <a className="mt-2"><button onClick={() => {
                                    setUp(!up)
                                    setShow(!show)
                                }}>
                                    SignUp
                                </button></a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    };

    function Login() {
        return (
            <div>
                <div className="fixed inset-0 flex items-center justify-center bg-opacity-75 bg-gray-500 z-50">
                    <div className="bg-white sm:w-[700px] sm:h-[560px]">
                        <form className="grid grid-cols-1 gap-[20px] py-[50px] text-lg">
                            <div className="flex justify-center text-4xl font-bold">
                                Login
                            </div>
                            <div className="flex justify-center mt-10 font-semibold">
                                <div className="grid grid-cols-1">
                                    <h1 className="text-gray-500">USERNAME</h1>
                                    <input type="text" className="bg-gray-100 border-2 w-[300px] border-gray-300 rounded-md p-2" />
                                </div>
                            </div>
                            <div className="flex justify-center  font-semibold">
                                <div className="grid grid-cols-1">
                                    <h1 className="text-gray-500">PASSWORD</h1>
                                    <input type="text" className="bg-gray-200 border-2 w-[300px] border-gray-300 rounded-md p-2" />
                                </div>
                            </div>
                            <div className="flex justify-center  font-semibold">
                                <button 
                                type="submit" 
                                className="ml-2 mt-[-8px] w-[100px] h-[40px] text-blue-400 rounded-lg shadow-xl hover:bg-blue-600 hover:text-white"
                                onClick={() => {setIn(!inn)}}>
                                    Login
                                </button>
                            </div>
                            <div className="flex justify-center">
                                <div className="flex items-center bg-white border-2 border-gray-800 rounded-lg h-[40px] w-[300px] font-semibold">
                                    <img src={Google} alt="Google" className="px-10 w-15 h-7"/>
                                    <p className="ml-[-30px]">Continue with Google</p>
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <p className="ml-6">Don't have an Account yet?</p>
                                <button 
                                className="ml-2 mt-[-8px] w-[100px] h-[40px] text-blue-400 rounded-lg shadow-xl hover:bg-blue-600 hover:text-white"
                                onClick={() => {setUp(!up)
                                setIn(!inn)}}>
                                    Signup
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

    function Signup() {
        return (
            <div>
                <div className="hidden md:block">
                    <div className="fixed inset-0 flex items-center justify-center bg-opacity-75 bg-gray-500 z-50">
                        <div className="bg-white sm:w-[700px] sm:h-[560px]">

                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Main;
