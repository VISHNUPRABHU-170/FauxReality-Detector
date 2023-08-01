import { Link } from "react-router-dom";

function Signin() {
    return (
        <form className="mt-16 sm:mt-[100px] grid grid-flow-row gap-10 flex justify-center text-xl font-semibold">
            <input type="text" placeholder="Enter MailID" required className="w-[300px] p-3 bg-blue-200 border-2 border-white outline-none rounded-lg shadow-2xl focus:bg-white " />
            <input type="password" placeholder="Enter Password" required className="w-[300px] p-3 bg-blue-200 border-2 border-white outline-none  rounded-lg shadow-2xl focus:bg-white" />
            <div className="flex justify-center">
                <button type="submit" className="p-2 w-[100px] bg-transparent text-white border-2 rounded-lg shadow-2xl hover:bg-white hover:text-black"><Link to="/">Signin</Link></button>
            </div>
        </form>
    );
}

export default Signin;