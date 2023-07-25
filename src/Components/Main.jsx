import { useState } from "react";
import { Link } from "react-router-dom";


function Main() {
    const [show, setShow] = useState(false)
    const [file, setFile] = useState(null);

    const handleFileDrop = (e) => {
        e.preventDefault();
        const droppedFile = e.dataTransfer.files[0];
        readFile(droppedFile);
    };

    const readFile = (file) => {
        const reader = new FileReader();
        reader.onload = (event) => {
            const fileContent = event.target.result;
            setFile(file.name);
        };
        reader.readAsText(file);
    };

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
                                <Link to="/">Detect</Link>
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
                            setShow(!show);
                        }}
                        className="text-xl ml-3 font-semibold bg-white text-blue-400 rounded-lg drop-shadow-xl w-[75px] h-[40px] hover:bg-gray-600 hover:text-white"
                    >
                        SignUp
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2">
                <div onDrop={handleFileDrop}
                    onDragOver={(e) => e.preventDefault()}
                    className="h-screen flex items-center justify-center">
                    <div className="grid grid-cols-1 gap-2">
                        <div className="flex justify-center font-bold text-3xl text-blue-800 drop-shadow-xl">Image Analysis</div>
                        <div className="h-[450px] w-[350px] sm:h-[500px] sm:w-[600px] bg-blue-300 shadow-xl rounded-xl">
                            <div className="border-dashed border-2 border-white mt-4 sm:mt-4 ml-4 w-[320px] h-[418px] sm:h-[470px] sm:w-[570px]">
                                <div className="grid grid-cols-1">
                                    <div className="py-[60px] grid grid-cols-1">
                                        <div className="flex justify-center mt-[-40px] sm:mt-[-30px]">
                                            <img src="https://i.ibb.co/sj6NrdZ/upload-icon.png" alt="upload" className="h-[200px]" />
                                        </div>
                                        <div
                                        >
                                            {file ? (
                                                <div className="flex justify-center font-medium text-xl mt-[-15px] text-gray-600">
                                                    <p className="mr-2 flex items-center justify-center bg-gray-100 rounded-md h-10 w-[150px]">{file.substring(0, 10) + '' + "...."}</p>
                                                    <img src="https://i.ibb.co/1zspQzq/cancel-icon.png" onClick={() => { setFile(null) }} className="py-1 w-[30px] h-[40px]" />
                                                </div>
                                            ) : (
                                                <div className="flex justify-center font-medium text-xl mt-[-15px] text-white">
                                                    <h1>Drop Files here</h1>
                                                </div>
                                            )}
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
                                            <p className="text-[26px] text-blue-700 drop-shadow-xl font-semibold hover:text-white"><Link to="/prediction">Detect Fraudulent</Link></p>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div onDrop={handleFileDrop}
                    onDragOver={(e) => e.preventDefault()}
                    className="h-screen flex items-center justify-center">
                    <div className="grid grid-cols-1 gap-2">
                        <div className="flex justify-center font-bold text-3xl text-green-800 drop-shadow-xl">Video Analysis</div>
                        <div className="h-[450px] w-[350px] sm:h-[500px] sm:w-[600px] bg-green-300 shadow-xl rounded-xl">
                            <div className="border-dashed border-2 border-white mt-4 sm:mt-4 ml-4 w-[320px] h-[418px] sm:h-[470px] sm:w-[570px]">
                                <div className="grid grid-cols-1">
                                    <div className="py-[60px] grid grid-cols-1">
                                        <div className="flex justify-center mt-[-40px] sm:mt-[-30px]">
                                            <img src="https://i.ibb.co/sj6NrdZ/upload-icon.png" alt="upload" className="h-[200px]" />
                                        </div>
                                        <div
                                        >
                                            {file ? (
                                                <div className="flex justify-center font-medium text-xl mt-[-15px] text-gray-600">
                                                    <p className="mr-2 flex items-center justify-center bg-gray-100 rounded-md h-10 w-[150px]">{file.substring(0, 10) + '' + "...."}</p>
                                                    <img src="https://i.ibb.co/1zspQzq/cancel-icon.png" alt="Cancel" onClick={() => { setFile(null) }} className="py-1 w-[30px] h-[40px]" />
                                                </div>
                                            ) : (
                                                <div className="flex justify-center font-medium text-xl mt-[-15px] text-white">
                                                    <h1>Drop Files here</h1>
                                                </div>
                                            )}
                                        </div>
                                        <div className="flex justify-center font-medium text-xl py-3 text-white">
                                            <h1>OR</h1>
                                        </div>
                                    </div>
                                    <div className="flex justify-center">
                                        <input type="file" className="px-12 mt-[-55px] w-[300px]" />
                                    </div>
                                    <div className="flex justify-center py-2 sm:py-8">
                                        <button className="bg-white shadow-2xl rounded-md w-[240px] h-[45px] hover:bg-green-800">
                                            <p className="text-[26px] text-green-700 drop-shadow-xl font-semibold hover:text-white"><Link to="/prediction">Detect Fraudulent</Link></p>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {show && <Navbar />}
        </div>
    );

    function Navbar() {
        return (
            <div className="sm:hidden py-[55px] text-black fixed inset-0 flex items-start justify-end z-20">
                <div className="bg-white rounded-lg h-[165px] w-[130px] text-xl mr-2">
                    <nav>
                        <ul className="mt-0 grid grid-cols-1 gap-2 font-semibold">
                            <li className="flex justify-center py-2 h-[50px] hover:bg-black hover:rounded-lg hover:text-white">
                                <Link to="/">Detect</Link>
                            </li>
                            <li className="flex justify-center py-2 h-[50px] hover:bg-black hover:rounded-lg hover:text-white">
                                <Link to="/signin">Login</Link>
                            </li>
                            <li className="flex justify-center py-2 h-[50px] hover:bg-black hover:rounded-lg hover:text-white">
                                <Link to="/signup">Signin</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    };
};

export default Main;
