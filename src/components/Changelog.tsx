import Footer from "../commoncom/Footer";

const Changelog = () => {
  return (
    <>
      <div className="text-[#e43c13] mx-2 ">
        <div className="place-items-center py-[50px] ">
          <h2 className="text-[48px]">Changelog</h2>
          <p className="text-center">
            You will find here any logged updates or changes to the template.
          </p>
        </div>{" "}
        <div className="place-self-center sm:mb-[200px] text-[#e43c13] container sm:py-[100px ">
          <h5 className="text-[22px]">Version 1.0.0</h5>
          <ul>
            <li>Initial release</li>
          </ul>
        </div>
      </div>{" "}
      <div className="pb-[80px]">
        <Footer />
      </div>
    </>
  );
};

export default Changelog;
