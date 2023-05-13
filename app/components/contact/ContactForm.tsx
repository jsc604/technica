'use client'

import { useState } from "react";
import { FormEvent } from "react";
import ConfirmRequest from "./ConfirmRequest";

const apiKey = process.env.NEXT_PUBLIC_ORBIS_API_KEY;

const ContactForm = () => {
  const [contact, setContact] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  const submitForm = async (event: FormEvent) => {
    event.preventDefault();

    let url = `
    https://orbisx.ca/app/api/VSV93?key=${apiKey}&dothis=saveLead&source=Website&contact=${contact}&email=${email}&notes=${notes}
    `;

    if (phone) {
      url += `&phone=${phone}`;
    }

    const response = await fetch(url, {
      method: 'GET',
    });

    if (response.ok) {
      setSubmitted(true);
    } else {
      console.error('Form submission failed');
    }
  };

  return (
    <>
      {!submitted && (
        <div className="w-full my-10 w-10/12 sm:w-3/4 lg:w-1/2 mx-auto p-8">
          <div className="font-semibold text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center">How can we help?</div>
          <form onSubmit={submitForm} className="flex flex-col">

            <div className="grid sm:grid-cols-2 sm:gap-8">
              <label htmlFor="contact" className="sr-only">Contact</label>
              <input
                type="text"
                id="contact"
                name="contact"
                required
                placeholder='Name*'
                className="text-black my-4 h-10 rounded-md p-4"
                value={contact}
                onChange={e => setContact(e.target.value)}
              />

              <label htmlFor="phone" className="sr-only">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder='Phone Number'
                className="text-black my-4 h-10 rounded-md p-4"
                value={phone}
                onChange={e => setPhone(e.target.value)}
              />
            </div>

            <label htmlFor="email" className="sr-only">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder='Email*'
              className="text-black my-4 h-10 rounded-md p-4"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />

            <label htmlFor="notes" className="sr-only">Message</label>
            <textarea
              id="notes"
              name="notes"
              required
              placeholder="Message*"
              className="text-black my-4 h-10 rounded-md p-4 h-28"
              value={notes}
              onChange={e => setNotes(e.target.value)}
            />

            <button type="submit" className="bg-blue-500 w-fit mx-auto py-1.5 px-3.5 rounded-full">
              Send Message
            </button>
          </form>
        </div>
      )}

      {submitted && (
        <ConfirmRequest />
      )}
    </>
  )
}

export default ContactForm;