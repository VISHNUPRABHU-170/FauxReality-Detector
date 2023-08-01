import { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {

    const [name, setName] = useState('');
    const [pass, setPassword] = useState('');
    const [cpass, setCPassword] = useState('');
    const [mailid, setMailid] = useState('');
    const [con, setCon] =useState(true);
    

    const handleSubmit = () => {
        if(pass != cpass){
            setCon(false)
            window.alert("Password should be same in bot input box")
        }
    }

    return (
        <form onSubmit={handleSubmit} className="mt-16 grid grid-flow-row gap-10 flex justify-center text-xl font-semibold">
            <input type="text" placeholder="Enter Username" onChange={(e) => {setName(e.target.value)}} required className="w-[300px] p-3 bg-blue-200 border-2 outline-none  rounded-lg shadow-2xl hover:bg-white" />
            <input type="text" placeholder="Enter MailID" onChange={(e) => {setMailid(e.target.value)}} required className="w-[300px] p-3 bg-blue-200 border-2 outline-none  rounded-lg shadow-2xl hover:bg-white" />
            <input type="password" placeholder="Enter Password" onChange={(e) => {setPassword(e.target.value)}} required className="w-[300px] p-3 bg-blue-200 border-2 border-white outline-none  rounded-lg shadow-2xl hover:bg-white" />
            <input type="password" placeholder="Confirm Password" onChange={(e) => {setCPassword(e.target.value)}}  required className="w-[300px] p-3 bg-blue-200 border-2 border-white outline-none  rounded-lg shadow-2xl hover:bg-white" />
            <div className="flex justify-center">
                <button type="submit" className="p-2 w-[100px] bg-transparent text-white border-2 rounded-3xl shadow-2xl hover:bg-white hover:text-black"><Link to="/">Signup</Link></button>
            </div>
        </form>
    );

}

export default Signup;