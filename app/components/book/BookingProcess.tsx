const BookingProcess = () => {
  return (
    <div className="w-11/12 mx-auto text-center">
      <h1 className="my-8 font-semibold text-4xl md:text-5xl lg:text-6xl xl:text-7xl">Booking With Us Is Easy!</h1>

      <div className="grid ml:grid-cols-3 gap-6">
        <div className="mx-auto">
          <i className="fa-regular fa-hand-point-right text-5xl"></i>{" "}
          <i className="fa-regular fa-square-check text-green-500 text-5xl"></i>
          <div className="my-4 text-xl ">
            <span className="font-bold">Step 1 - </span>
            <span className="underline">Choose Your Ideal Detailing Package</span>
          </div>
          <div>
            Explore our range of expertly crafted detailing packages, designed to cater to different needs and budgets. Select the package that best suits your vehicle&apos;s requirements and the level of care you desire.
          </div>
        </div>
        <div className="mx-auto">
          <i className="fa-regular fa-hand-point-right text-5xl"></i>{" "}
          <i className="fa-regular fa-clock text-green-500 text-5xl"></i>
          <div className="my-4 text-xl ">
            <span className="font-bold">Step 2 - </span>
            <span className="underline">Select a Convenient Date and Time</span>
          </div>
          <div>
            Pick a date and time that works best for you, ensuring a seamless and hassle-free experience. Our user-friendly booking system allows you to effortlessly schedule your appointment at your convenience.
          </div>
        </div>
        <div className="mx-auto">
          <i className="fa-regular fa-hand-point-right text-5xl"></i>{" "}
          <i className="fa-regular fa-calendar-check text-green-500 text-5xl"></i>
          <div className="my-4 text-xl ">
            <span className="font-bold">Step 3 - </span>
            <span className="underline">Confirm Your Booking and Prepare for Transformation</span>
          </div>
          <div>
            Once you&apos;ve chosen your package and scheduled the appointment, confirm your booking, and get ready to witness the stunning transformation of your vehicle. Our team of professionals is eager to provide you with unparalleled results and exceptional service.
          </div>
        </div>
      </div>
    </div>
  )
};

export default BookingProcess;