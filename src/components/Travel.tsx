import { Outlet } from "react-router-dom"
import Image from "../commoncom/image"
import BlogNav from "../commoncom/BlogNav"


const Travel = () => {
    return (<>
    <div>
        <BlogNav
        Title="Travel"/>
    </div>
        <div>
            <Image
                src="https://cdn.prod.website-files.com/6649b8d638cfeb3d82c1fd2c/6649bab9a73f80796b2a2508_blog-1.jpg"
                alt="Photo"
                className="rounded-2xl h-auto w-[350px] hover:scale-110  duration-300"
                ButtonText="Travel"
                date=" 2 may 2023"
                description="Top 10 trusted brands for amazing"
            />
        </div>
        <Outlet />
    </>)

}

export default Travel
