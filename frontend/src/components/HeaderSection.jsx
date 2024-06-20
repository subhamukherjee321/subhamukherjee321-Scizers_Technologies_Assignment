import Image from "next/image";

const HeaderSection = () => {
  return (
    <div className="w-full h-[750px] md:h-[500px] xl:h-[658px] bg-mobile-header md:bg-header bg-cover bg-no-repeat p-4 md:pt-6 md:px-32">
      <div className="flex justify-between w-full items-center">
        <div className="w-[150px] h-[20px] md:w-[165.84px] md:h-[20.86px]">
          <Image
            src="/logo.png"
            alt="Site Logo"
            width={100}
            height={24}
            className="w-full h-full"
          />
        </div>

        <div className="md:block hidden">
          <button className="text-primary rounded-md border-2 items-center border-primary font-[600] py-[1rem] px-[3.2rem] text-md hover:bg-primary hover:text-white active:bg-blue-600 active:border-blue-600">
            ENQUIRE NOW
          </button>
        </div>

        <div className="block md:hidden w-[30px] h-[30px]">
          <Image
            src="/hamburger.svg"
            alt="hamburder button"
            width={100}
            height={24}
            className="w-full h-full"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between md:justify-between items-center md:items-center mt-4 md:mt-20">
        <div>
          <h1
            className="text-[37px] md:text-[48px] text-white uppercase font-oswald font-[600] w-[80%] md:w-[60%]"
          >
            Harbour Lights de <span className="text-primary">GRESOGONO</span>
          </h1>

          <p className="w-[85%] md:w-[65%] mt-2 md:mt-6 text-white text-[15px] md:text-[25px] font-[600] font-poppins">
            1, 2 & 3 Bedrooms Seaside Apartments in Dubai Maritime City
          </p>

          <div className="mt-4 md:mt-10 w-[70%] md:w-[38%]">
            <p className="pl-2 w-full border-l-2 border-primary text-gray-400 font-thin text-[14px] py-2.5 md:py-1 bg-[rgba(0,0,0,0.25)]">
              Rental Returns of{" "}
              <span class="text-white font-['600']">UPTO 11%**</span>
            </p>
            <p className="mt-2 md:mt-4 pl-2 w-full border-l-2 border-primary text-gray-400 font-thin text-[14px] py-2.5 md:py-1 bg-[rgba(0,0,0,0.25)]">
              Rental Returns of{" "}
              <span class="text-white font-['600']">UPTO 11%**</span>
            </p>
          </div>
        </div>

        <div className="w-[90%] md:w-[25%] mt-10 md:mt-0">
          <div
            className="bg-[rgba(60,60,60,0.5)] backdrop-blur-lg p-6 md:p-8 w-full text-white rounded-lg"
            style={{ boxShadow: "rgba(120, 120, 120, 0.1) 0px 7px 29px 0px" }}
          >
            <p className="font-thin text-gray-300 tracking-widest text-xs">
              PRICING STARTS FROM
            </p>
            <h1 className="text-[48px] font-[700] mt-1 font-oswald">
              $ 425,000
            </h1>
            <h2 className="text-[24px] font-[500] font-oswald mt-1">
              AED 1.3 Million
            </h2>

            <button className="mt-6 hover:text-primary rounded-md border-2 items-center border-primary font-[600] py-[0.8rem] w-full text-[14px] tracking-wide bg-primary hover:bg-transparent  text-white active:bg-blue-600 active:border-blue-600 active:text-white">
              GET A PRESENTATION
            </button>
          </div>

          <div
            className="bg-[rgba(60,60,60,0.5)] md:py-4 md:px-8 p-6 w-full rounded-lg mt-1 text-[#98c5e8b7] text-[13px]"
            // style={{ boxShadow: "rgba(150, 150, 150, 0.5) 0px 7px 29px 0px" }}
          >
            Get an Expert’s Presentation of Real Estate in Dubai for Life and
            investment
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
