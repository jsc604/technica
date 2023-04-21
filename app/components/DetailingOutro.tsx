import Image from "next/image";

const DetailingOutro = () => {
  return (
    <div className="flex flex-col justify-center mx-auto my-16">
      <div className="w-5/6 flex flex-col lg:flex-row mx-auto bg-black rounded-lg my-12 h-96">
        <h2 className="uppercase font-bold text-xl md:text-3xl m-auto w-full lg:w-1/3 text-center p-4">revel in the satisfaction of driving a car that looks and feels brand new</h2>
        <Image
          src={'https://images.unsplash.com/photo-1494905998402-395d579af36f'}
          height={1494}
          width={2294}
          alt='car'
          className="w-full lg:w-2/3 h-full"
          style={{ objectFit: 'cover', borderRadius: '0.5rem' }}
        />
      </div>
     
    </div>
  )
};

export default DetailingOutro;