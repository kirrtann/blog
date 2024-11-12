import Footer from "../commoncom/Footer";

const Licenses = () => {
  return (
    <>
      <div className="text-[#e43c13] m-2 ">
        <div className="place-items-center py-[50px] ">
          <h2 className="text-[48px]">Licenses</h2>
          <p className="text-center">
            All graphical assets in this template are licensed for personal and
            commercial use. <br /> If you'd like to use a specific asset, please
            check the license below.
          </p>
        </div>

        <div className=" place-self-center py-[100px] ">
          <h5 className="text-[22px] mb-[10px]">Media</h5>
          <p className="mb-[10px]">
            This template used royalty-free images from Unsplash & Pexels
            platform.
          </p>
          <p className="">
            <a href="" className="underline">
              Unsplash licensing details ➙
            </a>
          </p>
         <br />
          <p>
            <a href="" className="underline">
              Pexels licensing details ➙
            </a>
          </p>
          <h5 className="text-[22px] mt-10 mb-5 ">Typography</h5>
          <p className="mb-5">We used Google Fonts in this template building. which are free to use for personal and commercial use.</p>
          <a href="" className="underline">DM Sans font licensing details ➙</a>
        </div>
       
      </div>
      <Footer/>
    </>
  );
};

export default Licenses;
