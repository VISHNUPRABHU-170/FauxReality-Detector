import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="sm:hidden py-[55px] text-black fixed inset-0 flex items-start justify-end z-20">
            <div className="bg-white rounded-lg h-[85px] w-[100px] text-xl mr-2">
                <nav>
                    <ul className="mt-0 grid grid-cols-1 gap-0 font-semibold">
                        <li className="flex justify-center py-2 h-[50px] hover:bg-black hover:rounded-lg hover:text-white">
                            <Link to="/signin">Login</Link>
                        </li>
                        <li className="flex justify-center py-1 h-[50px] hover:bg-black hover:rounded-lg hover:text-white">
                            <Link to="/signup">SignUp</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;