import Footer from "../commoncom/Footer"


const Subcrib = () => {
  return (
    <>

      <div className=" p-10 mt-[110px] sm:w-[600px] mb-[100px] px-2 sm:h-[220px] rounded-3xl  place-self-center flex justify-center">

        <div className="flex flex-col  justify-center ">
          <h2 className="sm:text-[36px] pt-2 text-center text-[48px] text-[#e43c13]">Subscribe to our  newsletter
          </h2>
          <p className="text-[#e43c13]  text-center mt-3">
            Topics you would like me to generate content about!
          </p>
          <div className=" w-full mx-auto place-content-center text-center">

            <div className="mt-8  bg-white flex items-center  p-1 max-w-xl mx-auto rounded-[50PX] border border-[#e43c13] " >
              <input type="email" placeholder="Enter your email" className="w-full bg-transparent py-2  text-gray-800 text-base placeholder:text-[#e43c13] border-none outline-none" />
              <button className="bg-[#e43c13] hover:bg-white  hover:text-[#e43c13] text-white text-base font-semibold py-2 px-2 sm:px-8  rounded-[50PX]  focus:outline-none">
                Subscribe
              </button>

            </div>
          </div>
        </div>
      </div>

      <Footer />

    </>
  )
}

export default Subcrib
