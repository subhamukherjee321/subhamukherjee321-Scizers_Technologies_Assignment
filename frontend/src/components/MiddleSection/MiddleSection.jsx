import Image from "next/image";
import {
  firstSectionMiddleData,
  lastMiddleSectionData,
} from "./middleSectionData";

const MiddleSection = () => {
  return (
    <section>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 w-[75%] m-auto py-8 bg-[#F4F9FF]">
        {firstSectionMiddleData?.map((item) => (
          <div
            key={item.id}
            className="justify-center items-center flex-col text-secondary hidden md:flex"
          >
            <Image src={item.image} alt={item.title} />
            <p className="mt-1 mb-[-5px] text-[16px] font-[400]">
              {item?.title}
            </p>
            <h4 className="text-[30px] font-[600]">{item.heading}</h4>
            <div className="mt-1.5 w-[35%] h-[5px] bg-[#D6E1EF]"></div>
          </div>
        ))}

        {firstSectionMiddleData?.map((item) => {
          if (item.id === 2 || item.id === 3) {
            return (
              <div
                key={item.id}
                className="justify-center items-center flex-col text-secondary flex md:hidden"
              >
                <Image src={item.image} alt={item.title} />
                <p className="mt-1 mb-0 md:mb-[-5px] text-[13px] md:text-[16px] font-[400]">
                  {item?.title}
                </p>
                <h4 className="text-[25px] md:text-[30px] font-[600]">
                  {item.heading}
                </h4>
                <div className="mt-1.5 w-[73%] h-[5px] bg-[#D6E1EF]"></div>
              </div>
            );
          }
        })}
      </div>

      <div className="text-center mt-8 font-[500] text-secondary text-4xl md:text-4xl uppercase w-[58%] md:w-[15%] m-auto">
        Harbour Lights
      </div>
      <p className="text-xs text-secondary font-[400] text-center mt-1">
        de GRISOGONO
      </p>
      <p className="text-[10px] text-secondary font-[400] text-center">
        GENEVE
      </p>

      <h2 className="text-center font-[600] text-secondary md:text-4xl text-[2rem] uppercase mt-8">
        Features & Amenities
      </h2>
      <p className="text-center w-[85%] md:w-1/2 m-auto mt-2 md:mt-4">
        Harbour Lights beautifully honours maritime voyages while embracing an
        opulent seafront lifestyle. Its maritime-inspired amenities provide an
        unmatched seaside experience, offering a life of tranquility and bliss.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 w-[90%] md:w-[80%] m-auto mt-12">
        {lastMiddleSectionData?.map((item) => (
          <div
            key={item.id}
            className="flex justify-center items-center flex-col gap-2 rounded-xl p-3"
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
          >
            <Image src={item.image} alt={item.title} />
            <p
              className="text-[14px] text-center font-[600] text-secondary w-[100%] md:w-[50%]"
              style={{ width: item.id === 1 && "36%" }}
            >
              {item.title}
            </p>
          </div>
        ))}
      </div>

      <div className="w-[70%] md:w-[80%] m-auto">
        <p className="md:flex justify-end mt-8 w-full text-[#686868] text-sm text-center hidden">
          *T&Cs apply | ** Based on similar branded projects in the last 2
          years. &nbsp; <u>Source 1</u> &nbsp; | &nbsp; <u>Source 2</u>
        </p>
        <p className="flex justify-center md:justify-end mt-8 w-full text-[#686868] text-xs text-center md:hidden">
          *T&Cs apply | ** Based on similar branded projects in the last 2
          years. Source 1 | Source 2
        </p>
      </div>

      <div className="flex w-[80%] m-auto mt-9 md:mt-12 justify-end gap-4">
        <button className="bg-secondary text-white font-[600] text-[13px] hover:bg-blue-700 border border-secondary rounded-[5px] h-[48px] w-[153px] active:bg-blue-600">
          EXTERIORS
        </button>
        <button className="hover:bg-blue-700 text-secondary hover:text-white font-[600] text-[13px] bg-transparent border border-secondary rounded-[5px] h-[48px] w-[153px] active:bg-blue-600">
          EXTERIORS
        </button>
      </div>
    </section>
  );
};

export default MiddleSection;
