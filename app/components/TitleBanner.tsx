import Image, { StaticImageData } from "next/image";

interface TitleProps {
  image: StaticImageData;
  alt: string;
  height: number;
  width: number;
  heading: string;
}

const TitleBanner = ({image, alt, height, width, heading}: TitleProps) => {
  return (
    <div className="bg-black pt-8">
      <div className="w-5/6 mx-auto">
        <h1 className="font-semibold text-4xl md:text-5xl lg:text-6xl text-stone-300">{heading}</h1>
        <Image src={image} height={height} width={width} alt={alt} style={{ objectFit: 'cover', width: '100vw', height: '65vh' }} />
      </div>
    </div>
  )
};

export default TitleBanner;