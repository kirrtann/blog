import { Outlet } from "react-router-dom"
import Image from "../commoncom/image"
import BlogNav from "../commoncom/BlogNav"
const MainBlog = () => {
    return (
        <>
            <div className="   place-items-center ">
                <BlogNav
                Title="Discover our blog"/>


                <div className="grid sm:grid-cols-2 px-3 sm:space-x-3  mt-[50px]">
                    <Image
                        src="https://cdn.prod.website-files.com/6649b8d638cfeb3d82c1fd2c/6649bab9a73f80796b2a2508_blog-1.jpg"
                        alt="Photo"
                        className="rounded-2xl h-auto w-[350px] hover:scale-110  duration-300"
                        ButtonText="Travel"
                        date=" 2 may 2023"
                        description="Top 10 trusted brands for amazing"
                    />
                    <Image
                        src="https://cdn.prod.website-files.com/6649b8d638cfeb3d82c1fd2c/6649bac95c591d010fdd6d9b_blog-2.jpg"
                        alt="Photo"
                        className="rounded-2xl h-auto w-[350px] hover:scale-110  duration-300"
                        ButtonText="Entertainment"
                        date=" 2 may 2023"
                        description="These are clothes that you must"
                    />
                    <Image
                        src="https://cdn.prod.website-files.com/6649b8d638cfeb3d82c1fd2c/6649baf3fa71fe56c678baaf_blog-3.jpg"
                        alt="Photo"
                        className="rounded-2xl h-auto w-[350px]      hover:scale-110  duration-300"
                        ButtonText="Entertainment"
                        date=" 2 may 2023"
                        description="These are clothes that you must"
                    />{" "}
                    <Image
                        src="https://cdn.prod.website-files.com/6649b8d638cfeb3d82c1fd2c/6649bb8c059fcc8f08336282_blog-4.jpg"
                        alt="Photo"
                        className="rounded-2xl h-auto w-[350px] hover:scale-110  duration-300"
                        ButtonText="trevel"
                        date=" 2 may 2023"
                        description="How to choose clothes according"
                    />{" "}
                    <Image
                        src="https://cdn.prod.website-files.com/6649b8d638cfeb3d82c1fd2c/6649bbe24e335c99d645f454_blog-5.jpg"
                        alt="Photo"
                        className="rounded-2xl h-auto w-[350px]  hover:scale-110  duration-300"
                        ButtonText="Business"
                        date=" 2 may 2023"
                        description="Add these clothes for your next"
                    />
                    <Image
                        src="	https://cdn.prod.website-files.com/6649b8d638cfeb3d82c1fd2c/6649bc2f4e640780beb156db_blog-6.jpg"
                        alt="Photo"
                        className="rounded-2xl h-auto w-[350px]  hover:scale-110  duration-300"
                        ButtonText="Travel"
                        date=" 2 may 2023"
                        description="10 things to do while shopping for"
                    />
                </div>

            </div>
            <Outlet/>
        </>
    )
}

export default MainBlog
