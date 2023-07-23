import icon from "./icon.jpg"
function Main() {
    return (
        <div>
            <div className="text-white bg-teal-500 shadow-xl w-full h-[55px] sm:h-[70px] flex items-center grid grid-cols-3">
                <img src={icon} alt="icon" className="w-[60px] h-[70px] sm:w-[90px]" />
                <h1 className="drop-shadow text-[28px] sm:text-4xl font-bold px-1 sm:px-4 ml-[-420px]">
                    FauxReality Detector
                </h1>
                <div className="hidden md:block ml-[-70px]">
                    <nav className="px-[100px] ml-[200px]">
                        <ul className="grid grid-cols-3 gap-[100px]">
                            <li><a href="/">Find</a></li>
                            <li><a href="/signin">Login</a></li>
                            <li><a href="/signup">Signup</a></li>
                        </ul>
                    </nav>
                </div>
            </div>

        </div>
    );
};

export default Main;