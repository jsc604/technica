import Image, { StaticImageData } from "next/image";

interface TitleProps {
  image: StaticImageData;
  alt: string;
  heading: string;
}

const TitleBanner = ({image, alt, heading}: TitleProps) => {
  return (
    <div className="bg-black pt-8">
      <div className="w-5/6 mx-auto">
        <h1 className="font-semibold text-4xl md:text-5xl lg:text-6xl text-stone-300">{heading}</h1>
        <div className="relative w-full h-60 md:h-96 lg:h-128">
          <Image src={image} fill objectFit="cover" alt={alt} />
        </div>
      </div>
    </div>
  )
};

export default TitleBanner;
