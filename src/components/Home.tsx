import Footer from "../commoncom/Footer"
import Image from "../commoncom/image"




const Home = () => {
    return (
        <>
            <div className="bg-[#ECE9E2]">

                <h1 className="text-center sm:text-[48px] px-2 text-[#e43c13] mt-14  ">
                    Hey, we’re BlogMin <br />
                    Join us for stories, thoughts, and ideas.
                </h1>
                <div className="flex place-self-center mt-5">
                    <div
                        className="relative flex bg-white h-[50px] rounded-[100px]"
                        data-twe-input-wrapper-init
                        data-twe-input-group-ref>
                        <input
                            type="search"
                            className="peer block  text-[#e43c13] bg-white min-h-[auto]  sm:w-[400px]   w-[250px] rounded-[50px]  border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"

                            placeholder="Search "
                            aria-label="Search"
                            id="search-input"
                            aria-describedby="search-button" />
                        <label

                            className=" absolute left-3 top-0 mb-0 max-w-[90%]   origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
                        >Search...
                        </label>
                        <button
                            className="relative z-[2] -ms-0.5 flex items-center  bg-[#e43c13] rounded-[50px] bg-primary px-3 m-1 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outl ine-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
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
                <div >
                    <div className="sm:flex flex-none sm:space-x-6 mx-2 place-content-center  place-items-center pt-32 ">
                        <Image
                            src="https://cdn.prod.website-files.com/6649b8d638cfeb3d82c1fd2c/6649bab9a73f80796b2a2508_blog-1.jpg"
                            alt="Photo"
                            className="rounded-2xl h-auto w-[350px] hover:scale-110  duration-300"
                            ButtonText="Travel"
                            date=" 2 may 2023"
                            description="Top 10 trusted brands for amazing" />
                        <Image
                            src="https://cdn.prod.website-files.com/6649b8d638cfeb3d82c1fd2c/6649bac95c591d010fdd6d9b_blog-2.jpg"
                            alt="Photo"
                            className="rounded-2xl h-auto w-[350px]      hover:scale-110  duration-300"
                            ButtonText="Entertainment"
                            date=" 2 may 2023"
                            description="These are clothes that you must" />
                    </div>
                    <div className=" px-2 sm:justify-center place-items-center pt-8">
                        <Image
                            src="https://cdn.prod.website-files.com/6649b8d638cfeb3d82c1fd2c/6649baf3fa71fe56c678baaf_blog-3.jpg"
                            alt="Photo"
                            className="rounded-2xl sm:w-[720px] sm:h-[400px] w-fit hover:scale-110 duration-300 transform-3d"
                            ButtonText="Lifestyle"
                            date="2 may 2023"
                            description="How to update for the latest"
                        />

                    </div>
                    <div className=" sm:space-x-8 sm:flex flex-none mx-2 place-content-center place-items-center justify-center sm:pt-32 pt-5 ">
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
                </div>
                <div className="bg-white w-full p-10   sm:w-[600px] mt-10 px-2 sm:h-[220px] rounded-3xl  place-self-center flex justify-center">

                    <div className="flex flex-col  justify-center ">
                        <h2 className="sm:text-[36px] pt-2  text-[25px] text-[#e43c13]">Subscribe to new posts
                        </h2>
                        <div className=" w-full mx-auto place-content-center text-center">

                            <div className="mt-8 bg-[#ECE9E2] flex items-center  p-1 max-w-xl mx-auto rounded-[50PX] border border-[#e43c13] " >
                                <input type="email" placeholder="Enter your email" className="w-full bg-transparent py-2  text-gray-800 text-base placeholder:text-[#e43c13] border-none outline-none" />
                                <button className="bg-[#e43c13] hover:bg-white  hover:text-[#e43c13] text-white text-base font-semibold py-2 px-2 sm:px-8  rounded-[50PX]  focus:outline-none">
                                    Subscribe
                                </button>

                            </div> <p className="text-[#e43c13]">Get the email newsletter </p>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Home
