const ContactForm = () => {
  return (
    <div className="w-full my-10">
      <div className="text-center text-xl font-semibold">How can we help?</div>
      <form action="/send-data-here" method="get" className="flex flex-col w-10/12 sm:w-3/4 lg:w-1/2 mx-auto">

        <div className="grid sm:grid-cols-2 sm:gap-8">
          <label htmlFor="contact" className="sr-only">Contact</label>
          <input
            type="text"
            id="contact"
            name="contact"
            required
            placeholder='Name*'
            className="text-black my-4 h-10 rounded-md p-4" />

          <label htmlFor="phone" className="sr-only">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder='Phone Number'
            className="text-black my-4 h-10 rounded-md p-4" />
        </div>

        <label htmlFor="email" className="sr-only">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder='Email*'
          className="text-black my-4 h-10 rounded-md p-4" />

        <label htmlFor="notes" className="sr-only">Message</label>
        <textarea
          id="notes"
          name="notes"
          required
          placeholder="Message*"
          className="text-black my-4 h-10 rounded-md p-4 h-28" />

        <button type="submit" className="bg-blue-500 w-fit mx-auto py-1.5 px-3.5 rounded-full">
          Send Message
        </button>
      </form>
    </div>
  )
}

export default ContactForm;