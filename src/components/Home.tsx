import Image from "../commoncom/image"



const Home = () => {
    return (
        <>
            <div className="bg-[#ECE9E2]">
                <h1 className="text-center text-[48px] text-[#e43c13] mt-14  ">
                    Hey, we’re BlogMin <br />
                    Join us for stories, thoughts, and ideas.
                </h1>
                <div className="flex justify-center mt-5">
                    <div
                        className="relative flex bg-white rounded-[100px]"
                        data-twe-input-wrapper-init
                        data-twe-input-group-ref>
                        <input
                            type="search"
                            className="peer block  text-[#e43c13] bg-white min-h-[auto] w-full  rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"

                            placeholder="Search "
                            aria-label="Search"
                            id="search-input"
                            aria-describedby="search-button" />
                        <label

                            className=" absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
                        >Search...
                        </label>
                        <button
                            className="relative z-[2] -ms-0.5 flex items-center bg-[#e43c13] rounded-2xl bg-primary px-5  text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                            type="button"
                            id="search-button"
                            data-twe-ripple-init
                            data-twe-ripple-color="light">
                            <span className="[&>svg]:h-5 [&>svg]:w-5">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>

                <div className="flex space-x-8 justify-center pt-32 ">
                    <Image
                        src="https://cdn.prod.website-files.com/6649b8d638cfeb3d82c1fd2c/6649bab9a73f80796b2a2508_blog-1.jpg"
                        alt="Photo"
                        className="rounded-2xl h-auto w-[350px] hover:scale-110  duration-300"
                        ButtonText="trevel"
                        date=" 2 may 2023"
                        description="Top 10 trusted brands for amazing" />
                    <Image
                        src="https://cdn.prod.website-files.com/6649b8d638cfeb3d82c1fd2c/6649bac95c591d010fdd6d9b_blog-2.jpg"
                        alt="Photo"
                        className="rounded-2xl h-auto w-[350px]  hover:scale-110  duration-300"
                        ButtonText="Entertainment"
                        date=" 2 may 2023"
                        description="These are clothes that you must" />
                </div>
                <div className="flex justify-center pt-8">
                    <Image
                        src="	https://cdn.prod.website-files.com/6649b8d638cfeb3d82c1fd2c/6649baf3fa71fe56c678baaf_blog-3.jpg"
                        alt="Photo"
                        className="rounded-2xl  w-[720px] h-[400px]  hover:scale-110  duration-300"
                        ButtonText="Lifestyle"
                        date="2 may 2023 "
                        description="How to update for the latest" />
                </div>
                <div className="flex space-x-8 justify-center pt-32 ">
                    <Image
                        src="https://cdn.prod.website-files.com/6649b8d638cfeb3d82c1fd2c/6649bb8c059fcc8f08336282_blog-4.jpg"
                        alt="Photo"
                        className="rounded-2xl h-auto w-[350px] hover:scale-110  duration-300"
                        ButtonText="trevel"
                        date=" 2 may 2023"
                        description="How to choose clothes according" />
                    <Image
                        src="https://cdn.prod.website-files.com/6649b8d638cfeb3d82c1fd2c/6649bbe24e335c99d645f454_blog-5.jpg"
                        alt="Photo"
                        className="rounded-2xl h-auto w-[350px]  hover:scale-110  duration-300"
                        ButtonText="Business"
                        date=" 2 may 2023"
                        description="Add these clothes for your next" />
                </div>
                <div className="bg-white w-[720px] mt-10  h-[220px] rounded-3xl pl-10  flex place-self-center ">

                    <div className="flex flex-col justify-center">
                        <h2 className="text-[36px] pt-2  text-[#e43c13]">Subscribe to new posts
                        </h2>
                        <div className=" w-full mx-auto text-center">

                            <div className="mt-8 bg-white flex items-center sm:p-4 p-2 max-w-xl mx-auto rounded-2xl border border-[#e43c13] " >
                                <input type="email" placeholder="Enter your email" className="w-full bg-transparent py-2  text-gray-800 text-base placeholder:text-[#e43c13] border-none outline-none" />
                                <button className="bg-[#e43c13] hover:bg-white  hover:text-[#e43c13] text-white text-base font-semibold py-2 px-2 sm:px-8 rounded-xl focus:outline-none">
                                    Subscribe
                                </button>

                            </div> <p className="text-[#e43c13]">Get the email newsletter </p>
                        </div>
                    </div>
                </div>

                <div className= "  flex w-[720px] justify-between place-self-center pt-24 text-[#e43c13] ">

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
                <div className="place-self-center pt-5 ">
                    <p className="text-[#e43c13]">© All rights reserved by <span className="border-b-2 border-[#e43c13]">Flowsark.</span> </p>
                    <p className="text-[#e43c13]">Powered by <a href="" className="border-b-2 border-[#e43c13]"> Webflow.</a></p>
                </div>
            </div>
        </>
    )
}

export default Home
