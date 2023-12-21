import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div>
            <div className=" h-[800px] hero" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="text-center hero-content text-neutral-content">
                    <div className="p-8 text-center text-white">
                        <h1 className="mb-4 text-4xl font-bold">Welcome to SCC Technovision Task Manager</h1>
                        <Link to="/login">
                            <button className="px-4 py-2 btn btn-outline btn-info ">Let's Explore</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;