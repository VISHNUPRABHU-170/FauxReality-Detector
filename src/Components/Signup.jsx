import { Link } from "react-router-dom";
import Google from "./google-icon.png";
import { useState } from "react";

function Signup() {

    const [name, setName] = useState('');
    const [pass, setPass] = useState('');
    
    const handleSubmit = () => {
        if(name.trim() === '' || pass.trim() === ''){
            window.alert("Fill Detials")
        }
    }

    return (
        <div>
            <div className="fixed inset-0 flex items-center justify-center bg-opacity-75 bg-gray-500 z-50">
                <div className="bg-white rounded-2xl sm:w-[700px] sm:h-[560px]">
                    <form className="grid grid-cols-1 gap-[20px] py-[50px] text-lg">
                        <div className="flex justify-center text-4xl font-bold">
                            SignUp
                        </div>
                        <div className="flex justify-center mt-2">
                            <div className="flex items-center bg-white border-2 border-gray-500 rounded-lg w-[250px] h-[40px]">
                                <img src={Google} alt="Google" className="px-4 w-15 h-6" />
                                <button className="ml-[-10px]">Continue with Google</button>
                            </div>
                        </div>
                        <div className="flex justify-center mt-5 font-semibold">
                            <div className="grid grid-cols-1">
                                <h1 className="text-gray-500">USERNAME</h1>
                                <input type="text" onChange={(e) => {setName(e.target.value)}} className="bg-gray-100 border-2 w-[300px] border-gray-200 rounded-md p-2" required />
                            </div>
                        </div>
                        <div className="flex justify-center  font-semibold">
                            <div className="grid grid-cols-1">
                                <h1 className="text-gray-500">PASSWORD</h1>
                                <input type="password" onChange={(e) => {setPass(e.target.value)}} className="bg-gray-100 border-2 w-[300px] border-gray-200 rounded-md p-2" required />
                            </div>
                        </div>
                        <div className="flex justify-center  font-semibold">
                            <Link to="/" onClick={handleSubmit} className="flex justify-center font-semibold py-1  ml-2 mt-[-8px] w-[100px] h-[40px] text-blue-400 rounded-lg shadow-xl hover:bg-blue-600 hover:text-white">SignUp</Link>
                        </div>
                        <div className="flex justify-center">
                            <p className="ml-6">Already have an Account?</p>
                            <Link to="/signin" className="flex justify-center font-semibold py-1 ml-2 mt-[-8px] w-[100px] h-[40px] text-blue-400 rounded-lg shadow-xl hover:bg-blue-600 hover:text-white">Login</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signup;