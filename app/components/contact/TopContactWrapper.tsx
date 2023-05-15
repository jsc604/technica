import Image from 'next/image';
import tshirt from '../../../assets/images/tshirt.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const TopContactWrapper = () => {
  return (
    <div className='flex'>
      <div className='w-full lg:w-1/2 flex flex-col justify-center items-center p-8 text-center'>
        <div className='mb-8'>
          <h1 className="font-semibold text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4">
            Contact Us
          </h1>
          <div className='text-xl 3xl:text-2xl'>
            Want to get in touch? We&apos;d Love to Hear From You!
          </div>
          <div className='text-xl 3xl:text-2xl'>
          Here&apos;s how you can reach us...
          </div>
        </div>
        <div>
          <FontAwesomeIcon icon={faPhone} className='text-2xl 3xl:text-4xl' />
          <div className='font-semibold text-xl 3xl:text-2xl my-2'>Call Us</div>
          <div className='text-xl 3xl:text-2xl'>Pick up the phone and chat with a member of our team.</div>
          <div className='font-semibold hover:text-blue-400 text-xl 3xl:text-2xl'>+1 778-835-2118</div>
        </div>
        <div className='mt-8'>
          <FontAwesomeIcon icon={faEnvelope} size='xl' />
          <div className='font-semibold text-xl 3xl:text-2xl my-2'>Use the form below to drop us an email</div>
        </div>
      </div>
      <div className='w-1/2 lg:block hidden'>
        <Image src={tshirt} width={1440} height={960} alt="technica automotice contact"/>
      </div>
    </div>
  )
};

export default TopContactWrapper;