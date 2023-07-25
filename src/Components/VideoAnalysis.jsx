import { useState } from "react";
import { Link } from "react-router-dom";

function VideoAnalysis() {

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
    );
};

export default VideoAnalysis;