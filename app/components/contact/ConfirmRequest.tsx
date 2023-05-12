import styles from '../../contact/page.module.css';

const ConfirmRequest = () => {
  return (
    <div className={`flex flex-col w-10/12 sm:w-3/4 lg:w-1/2 mx-auto text-center my-10 border p-8 rounded-3xl ${styles.confirmRequest}`}>

      <i className="fa-regular fa-circle-check text-7xl text-green-500"></i>

      <div className="font-semibold text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4">
        We have received your request!
      </div>

      <div className="text-xl 3xl:text-2xl mb-4">
        Keep an eye out for an email from us.
      </div>

      <div className="text-xl 3xl:text-2xl">
        Our team will be reaching out shortly with a response to your message.
      </div>

    </div>
  )
};

export default ConfirmRequest;