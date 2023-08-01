import { useState } from "react";
import Signin from "./Signin";
import Signup from "./Signup";

function LoginContainer() {
    const [up, Setup] = useState(true);
    const [inn, Setin] = useState(false);



    return (
        <div className="h-screen flex items-center justify-center bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRMXVN-l9mmombPQBUTCt0X7f_LTvZcOP6us-yL0cj5gp2A8HXj-jtownrkQmP3M7kMjg&usqp=CAU')] bg-opacity-100 bg-cover bg-no-repeat bg-center">
            <div className={`w-[350px] ${up ? 'h-[600px]' : 'h-[500px]'} sm:w-[600px] sm:h-[600px] bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRMXVN-l9mmombPQBUTCt0X7f_LTvZcOP6us-yL0cj5gp2A8HXj-jtownrkQmP3M7kMjg&usqp=CAU')] bg-cover bg-no-repeat bg-center border-2 border-white shadow-2xl rounded-3xl`}>
                <div className="mt-10 flex justify-center text-3xl font-semibold">
                    {up ? (
                        <div className="flex flex-row drop-shadow-xl rounded-sm text-white">
                            <button
                                className="p-2 text-black border-2"
                            >
                                Signup
                            </button>
                            <button
                                className="p-2 border-2 text-blue-200"
                                onClick={() => {
                                    Setup(false)
                                    Setin(true)
                                }}
                            >
                                Signin
                            </button>
                        </div>
                    ) : (
                        <div className="flex flex-row drop-shadow-xl rounded-sm text-white">
                            <button
                                className="p-2 border-2 text-blue-200"
                                onClick={() => {
                                    Setup(true)
                                    Setin(false)
                                }}
                            >
                                Signup
                            </button>
                            <button
                                className="p-2 text-black border-2"
                            >
                                Signin
                            </button>
                        </div>
                    )}
                </div>
                {up && <Signup></Signup>}
                {inn && <Signin></Signin>}
            </div>
        </div>
    );
};

export default LoginContainer;