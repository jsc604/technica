import Image from "next/image";

import bentley from '../../../assets/images/bentley-front-bw.jpeg';
import interior from '../../../assets/images/cayenne-int.jpeg';
import Link from "next/link";

const TopCall = () => {
  return (
    <div className="grid md:grid-cols-2 my-8 gap-6 w-11/12 h-80 lg:h-96 xl:h-112 mx-auto">
      <div className="relative">
        <Image
          src={bentley}
          alt="Bentley front"
          layout="fill"
          className="z-10 rounded-3xl object-cover"
        />
        <div className="flex justify-center w-full absolute top-3/4 left-0 z-20">
          <Link
            className="text-center bg-blue-500 w-fit min-w-[200px] md:min-w-[300px] hover:bg-blue-400 text-xl sm:text-3xl text-white px-6 py-2 rounded-md font-semibold transform -translate-y-1/2"
            href="/book"
          >
            Book Vehicle Coating
          </Link>
        </div>
      </div>

      <div className="relative">
        <Image
          src={interior}
          alt="cayenne interior"
          layout="fill"
          className="z-10 rounded-3xl object-cover"
        />
        <div className="flex justify-center w-full absolute top-3/4 left-0 z-20">
          <Link
            className="text-center bg-blue-500 w-fit min-w-[200px] md:min-w-[300px] hover:bg-blue-400 text-xl sm:text-3xl text-white px-6 py-2 rounded-md font-semibold transform -translate-y-1/2"
            href="/book"
          >
            Book Detailing
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopCall;
