import { useState } from "react";
import Footer from "../commoncom/Footer";
import { TRAVEL, LIFESTYLE, BUSINESS, ENTERTAINMENT, allBlogPosts } from "../data/constant.ts";

type Category = "Discover our blog" | "Travel" | "Lifestyle" | "Business" | "Entertainment";

const Blog = () => {
    const [title, setTitle] = useState("Discover our blog");
    const [pageData, setPageData] = useState<{ id: string; src: string; alt: string; className: string; date: string; description: string }[]>(allBlogPosts);



    const handleCategoryChange = (category: Category) => {
        setTitle(category);

        let newPageData = [];

        switch (category) {
            case "Discover our blog":
                newPageData = allBlogPosts;
                break;
            case "Travel":
                newPageData = TRAVEL.map(post => ({
                    id: post.id.toString(),
                    src: post.image,
                    alt: "Blog Post Image",
                    className: "rounded-2xl h-auto w-[350px] hover:scale-110 duration-300",
                    buttonText: "Travel",
                    date: post.date,
                    description: post.description
                }));
                break;
            case "Lifestyle":
                newPageData = LIFESTYLE.map(post => ({
                    id: post.id.toString(),
                    src: post.image,
                    alt: "Blog Post Image",
                    className: "rounded-2xl h-auto w-[350px] hover:scale-110 duration-300",
                    buttonText: "Lifestyle",
                    date: post.date,
                    description: post.description
                }));
                break;
            case "Business":
                newPageData = BUSINESS.map(post => ({
                    id: post.id.toString(),
                    src: post.image,
                    alt: "Blog Post Image",
                    className: "rounded-2xl h-auto w-[350px] hover:scale-110 duration-300",
                    buttonText: "Business",
                    date: post.date,
                    description: post.description
                }));
                break;
            case "Entertainment":
                newPageData = ENTERTAINMENT.map(post => ({
                    id: post.id.toString(),
                    src: post.image,
                    alt: "Blog Post Image",
                    className: "rounded-2xl h-auto w-[350px] hover:scale-110 duration-300",
                    buttonText: "Entertainment",
                    date: post.date,
                    description: post.description
                }));
                break;
            default:
                newPageData = allBlogPosts;
        }

        setPageData(newPageData);
    };


    return (
        <div className="text-[#e43c13]">
            <h1 className="text-[48px] text-[#e43c13] text-center">{title}</h1>
            <div>
                <ul className="sm:flex grid   place-content-center  gap-y-3 sm:gap-10">
                    <li>
                        <button
                            className="bg-white hover:bg-[#e43c13] text-[#e43c13] hover:text-white py-1 px-2 rounded-[50px]"
                            onClick={() => handleCategoryChange("Discover our blog")}
                        >
                            All
                        </button>
                    </li>
                    <li>
                        <button
                            className="bg-white hover:bg-[#e43c13] text-[#e43c13] hover:text-white py-1 px-2 rounded-[50px]"
                            onClick={() => handleCategoryChange("Travel")}
                        >
                            Travel
                        </button>
                    </li>
                    <li>
                        <button
                            className="bg-white hover:bg-[#e43c13] text-[#e43c13] hover:text-white py-1 px-2 rounded-[50px]"
                            onClick={() => handleCategoryChange("Lifestyle")}
                        >
                            Lifestyle
                        </button>
                    </li>
                    <li>
                        <button
                            className="bg-white hover:bg-[#e43c13] text-[#e43c13] hover:text-white py-1 px-2 rounded-[50px]"
                            onClick={() => handleCategoryChange("Business")}
                        >
                            Business
                        </button>
                    </li>
                    <li>
                        <button
                            className="bg-white hover:bg-[#e43c13] text-[#e43c13] hover:text-white py-1 px-2 rounded-[50px]"
                            onClick={() => handleCategoryChange("Entertainment")}
                        >
                            Entertainment
                        </button>
                    </li>
                </ul>
            </div>

            <div className="grid sm:grid-cols-2 px-2 gap-x-5 place-self-center mt-8">
                {pageData.map((post) => (
                    <div key={post.id} className="blog-post-card ">
                        <img
                            src={post.src}
                            alt={post.alt}
                            className={post.className}
                        />
                        <div className="mt-4">
                            <p className="text-[#e43c13] font-bold">{post.date}</p>

                            <p>{post.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <Footer />
        </div>
    );
};

export default Blog;
