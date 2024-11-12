import Footer from "../commoncom/Footer";

const Contact = () => {
  return (
    <>
      <div className=" mt-10 m-1 text-[#e43c13]">
        <div className="place-items-center">
          <h1 className="text-[48px]">Contact us</h1>
          <p className="text-center">
            Nunc vitae odio vitae mauris eleifend ullamcorper.
          </p>
        </div>
        <div className="  mt-10 flex-none ">
          <div className=" place-self-center">
            <input
              type="text"
              className="bg-white md:w-[700px] sm:w-[500px] w-full rounded-[100px] h-[60px] placeholder:text-[#e43c13] p-3 mb-[10px]  outline-none  "
              placeholder="Name "
            />{" "}
            <br />
            <input
              type="email"
              className="bg-white md:w-[700px] sm:w-[500px] w-full rounded-[100px] h-[60px] placeholder:text-[#e43c13] p-3 mb-[10px]  outline-none  "
              placeholder="Email "
            />{" "}
            <br />
            <select
              name="Select"
              id="Select "
              className=" md:w-[700px] sm:w-[500px] w-full h-[62px] rounded-[100px] mb-[10px] p-3 "
            >
              <option value="One">First Choice</option>
              <option value="Second">Second Choice</option>
              <option value="Third">Third Choice</option>
            </select>{" "}
            <br />
            <textarea
              name="comment"
              id="comment"
              placeholder="Comment"
              className=" md:w-[700px] sm:w-[500px] w-full rounded-[100px] p-3 placeholder:text-[#e43c13] "
            ></textarea>{" "}
            <br />
            <label className="">
              <input
                type="checkbox"
                className="border-[#e43c13] bg-[#e43c13] "
              />{" "}
              <span>Stay in the know with Shape! Subscribe now</span>
            </label>{" "}
            <br />
            <button className="bg-[#e43c13] mt-5   text-white hover:bg-white hover:text-[#e43c13] py-[10px] px-[28px]  rounded-3xl ">
              Submit
            </button>
          </div>
        </div>
        <div className="  justify-center pl-3 sm:space-x-10 sm:flex">
          <div>
            <h4 className="text-[26px]">Email Us</h4>
            <a href="" className="underline">
              info@gmail.com
            </a>
          </div>
          <div>
            <h4 className="text-[26px]">Chat With Us</h4>
            <a href="" className="underline">
              Call Now
            </a>
          </div>
          <div>
            <h4 className="text-[26px]">Follow Us</h4>
            <div className="space-x-2 sm:grid flex sm:grid-cols-3  ">
              <a href="" className="underline">
                instagram
              </a>
              <a href="" className="underline">
                Facebook
              </a>
              <a href="" className="underline">
                You Tube
              </a>
              <a href="" className="underline">
                Twitter
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
