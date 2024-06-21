import Image from "next/image";
import images from "./lastSectionData";

const GridSection = () => {
  return (
    <section className="grid grid-cols-4 gap-4 md:gap-8 w-[80%] m-auto">
      {images?.map((image, i) => {
        if (i !== 0) {
          return (
            <div key={i}>
              <Image src={image} alt={i + 1} />
            </div>
          );
        }
      })}
    </section>
  );
};

export default GridSection;
