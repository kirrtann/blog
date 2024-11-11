import Footer from "../commoncom/Footer";

const About = () => {
  return (
    <>
      <div>
        <div className="md:flex  gap-x-10 ml-[15px]  place-content-center py-[100px] text-[#e43c13] ">
          <div>
            <img
              src="https://assets-global.website-files.com/6649a073ce571a7f8882641d/664a22556796fe699ea787f0_about.jpg"
              alt="About image"
              className="rounded-[30px] md:w-[250px] "
            />
            <li className="flex space-x-3 pt-7">
              <span>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/600px-Instagram_logo_2022.svg.png"
                  className="w-7"
                  alt=""
                />
              </span>
              <span>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Facebook_Logo_2023.png/768px-Facebook_Logo_2023.png"
                  className="w-7"
                  alt=""
                />
              </span>
              <span>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4fcdsIUPUgmbvGaP-RC4RbHYdVtoN_fM8aya_8gOXI2BRtClESO-0_jgWTtKtIVmOQKs&usqp=CAU"
                  className="w-7"
                  alt=""
                />
              </span>
              <span>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWK7U1qR8TSAuBf4OEb-SerRUliMZK3OwOeg&s"
                  className="w-7"
                  alt=""
                />
              </span>
            </li>
          </div>
          <div className="sm:w-[450px]">
            <h1 className="text-[48px] mb-3 ">
              Hi! I'm Casey :) Wander with Me
            </h1>
            <p className="mb-3 ">
              If you are going to use a passage of Lorem Ipsum, you need to be
              sure there isn't anything embarrassing hidden in the middle of
              text. All the Lorem Ipsum generators on the Internet tend to
              repeata predefined chunks as necessary
            </p>
            <p className="mb-3">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s
              with the release of Letraset sheets containing Lorem Ipsum
              passages.
            </p>
          </div>
        </div>
        <div className="mx-2">
          <div className="bg-white w-full p-10   sm:w-[600px] mt-10 px-2 sm:h-[220px] rounded-3xl  place-self-center flex justify-center">
            <div className="flex flex-col  justify-center ">
              <h2 className="sm:text-[36px] pt-2  text-[25px] text-[#e43c13]">
                Subscribe to new posts
              </h2>
              <div className=" w-full mx-auto place-content-center text-center">
                <div className="mt-8 bg-[#ECE9E2] flex items-center  p-1 max-w-xl mx-auto rounded-[50PX] border border-[#e43c13] ">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-transparent py-2  text-gray-800 text-base placeholder:text-[#e43c13] border-none outline-none"
                  />
                  <button className="bg-[#e43c13] hover:bg-white  hover:text-[#e43c13] text-white text-base font-semibold py-2 px-2 sm:px-8  rounded-[50PX]  focus:outline-none">
                    Subscribe
                  </button>
                </div>
                <p className="text-[#e43c13]">Get the email newsletter </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default About;
