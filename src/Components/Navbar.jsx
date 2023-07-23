function Navbar(){
    return(
        <div className="sm:hidden py-[55px] text-black fixed inset-0 flex items-start justify-end z-50">
            <div className="bg-white rounded-lg h-[165px] w-[130px] text-xl mr-2">
                <nav>
                    <ul className="mt-0 grid grid-cols-1 gap-2 font-semibold">
                        <li className="flex justify-center h-[50px] hover:bg-black hover:rounded-lg hover:text-white">
                            <a href="/" className="mt-2">Detect</a>
                        </li>
                        <li className="flex justify-center h-[50px] hover:bg-black hover:rounded-lg hover:text-white">
                            <a href="/signin" className="mt-2">Login</a>
                        </li>
                        <li className="flex justify-center h-[50px] hover:bg-black hover:rounded-lg hover:text-white">
                            <a href="/signup" className="mt-2">Signup</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;