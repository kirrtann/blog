

const Footer = () => {
    return (
        <>

            <div className=" sm:flex sm:flex-auto mx-2  flex  bottom-0 space-x-5   place-content-center sm:space-x-10 md:space-x-20 place-self-center pt-24 text-[#e43c13] ">

                <ul className="text-2xl">
                    <li >  <a href="">Home</a> </li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
                <ul>
                    <li>Style Guide</li>
                    <li>Licenses</li>
                    <li>Changelog</li>

                </ul>
                <ul>
                    <li><button className="text-[#e43c13] bg-white rounded-3xl px-5 py-2 hover:bg-[#e43c13] hover:text-white ">Become a Subscribe</button></li>
                    <li>Get updates delivered to your inbox.</li>
                    <li className="flex space-x-3 pt-7"><span><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/600px-Instagram_logo_2022.svg.png" className="w-7" alt="" /></span>
                        <span><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Facebook_Logo_2023.png/768px-Facebook_Logo_2023.png" className="w-7" alt="" /></span>
                        <span><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4fcdsIUPUgmbvGaP-RC4RbHYdVtoN_fM8aya_8gOXI2BRtClESO-0_jgWTtKtIVmOQKs&usqp=CAU" className="w-7" alt="" /></span>
                        <span><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWK7U1qR8TSAuBf4OEb-SerRUliMZK3OwOeg&s" className="w-7" alt="" /></span></li>
                </ul>
            </div>
            <div className="place-self-center pt-5 pb-10">
                <p className="text-[#e43c13]">© All rights reserved by <span className="border-b-2 border-[#e43c13]">Flowsark.</span> </p>
                <p className="text-[#e43c13]">Powered by <a href="" className="border-b-2 border-[#e43c13]"> Webflow.</a></p>
            </div>
        </>
    )
}

export default Footer
