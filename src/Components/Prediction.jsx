import { useState } from "react";

function Prediction() {

    const [res,setRes] = useState(false);

    return (
        <div>
            <div className="fixed inset-0 flex items-center justify-center bg-opacity-75 bg-gray-500 z-50">
                <div className="bg-white rounded-2xl w-[320px] h-[418px] sm:w-[700px] sm:h-[560px]">
                    {res ? (<div className="grid grid-cols-1">
                        <h1 className="flex justify-center text-5xl font-bold text-green-500 drop-shadow-xl">Real</h1>
                    </div>) : (<div className="grid grid-cols-1">
                        <h1 className="flex justify-center text-5xl font-bold text-red-500 drop-shadow-xl">Fake</h1>
                    </div>) }
                </div>
            </div>
            
        </div>
    );
};

export default Prediction;