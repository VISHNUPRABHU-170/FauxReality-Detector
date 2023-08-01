import { useState } from "react";
import { Link } from "react-router-dom";

//video analysis component
//Frames detection

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
            className="h-screen flex items-center justify-center bg-[url('https://assets-global.website-files.com/5f3ae94489e0968a6114dc24/61eeae495436c947c638ac56_5fadc1d01d6c0b5c07c87178_Why%2520data%2520integration%2520in%2520healthcare%2520is%2520a%2520big%2520deal.jpeg')] bg-no-repeat bg-cover">
            <div className="grid grid-cols-1 gap-2">
                <div className="flex justify-center font-bold text-4xl text-white drop-shadow-xl">Video Analysis</div>
                <div className="h-[450px] w-[350px] sm:h-[500px] sm:w-[600px] bg-gradient-to-r from-blue-500 to-pink-500 shadow-xl rounded-xl">
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
                                <button className="bg-white shadow-2xl rounded-md w-[240px] h-[45px] hover:bg-pink-800">
                                    <p className="text-[26px] text-blue-700 drop-shadow-xl font-semibold hover:text-white"><Link to="/prediction">Detect Fraudulent</Link></p>
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