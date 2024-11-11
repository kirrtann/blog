import { Link } from "react-router-dom"

const BlogNav = ({ Title }: { Title: string }) => {
    return (
        <>
            <div>
                <h1 className="text-[48px] mb-[10px] justify-center place-items-center mx-2 text-[#e43c13]">
                    {Title}

                </h1>
            </div>
            <div>
                <div className="sm:space-x-6 space-x-3  grid grid-cols-2 text-[14px]  text-center gap-y-[5px] sm:flex ">
                    <Link to="" className="bg-[#e43c13]   place-content-center rounded-[50PX] px-3 text-white ">All</Link>
                    <Link to="Travel" className="hover:bg-[#e43c13]  delay-150 rounded-[50PX] px-3 py-1 bg-white text-[#e43c13]  hover:text-white">Travel</Link>
                    <Link to="" className="hover:bg-[#e43c13]  delay-150 rounded-[50PX] px-3 py-1 bg-white text-[#e43c13]  hover:text-white">Lifestyle</Link>
                    <Link to="" className="hover:bg-[#e43c13]  delay-150 rounded-[50PX] px-3 py-1 bg-white text-[#e43c13]  hover:text-white">Business</Link>
                    <Link to="" className="hover:bg-[#e43c13]  col-span-2 delay-150 rounded-[50PX] px-3 py-1 bg-white text-[#e43c13]  hover:text-white">Entertainment</Link>
                </div>
            </div>
        </>
    )
}

export default BlogNav
