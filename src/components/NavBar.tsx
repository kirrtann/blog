
const NavBar = () => {
    return (
        <>
            <div className="">
                <div className="flex  bg-[#ECE9E2]">
                    <div className="pt-10 pl-10">
                        <a href="">   <img src="https://cdn.prod.website-files.com/6649a073ce571a7f8882641d/66520df92e7578426e374ed7_BlogMin.svg" alt="logo" /></a>
                    </div>
                    <div className="flex-grow pt-10 flex justify-center">
                        <ul className="flex text-[#e43c13] text-[18px] space-x-10 ">
                            <li><a href="/Home">Home</a></li>
                            <li><a href="/Blog">Blog</a></li>
                            <li><a href="/About">About</a></li><li>
                                <div>Page</div>
                            </li>
                        </ul></div>
                    <div className=" pr-10  pt-10">
                        <button className="bg-[#e43c13] rounded-[100px] text-[16px] text-center px-6 py-[14px]  hover:bg-white hover:text-[#e43c13] text-white" >Subscribe</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar
