
import { Route, Router, Routes } from "react-router-dom";
import Footer from "../commoncom/Footer";

import MainBlog from "./MainBlog";

const Blog = () => {
    return (
        <>
            <div>
                <Routes>
                    <Route path="/" element={<MainBlog/>}/>
                </Routes>
                {/* <MainBlog /> */}
            </div>
            <Footer />
        </>
    );
};

export default Blog;
