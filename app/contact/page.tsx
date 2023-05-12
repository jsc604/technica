'use client'

import { useState } from 'react';
import TopContactWrapper from '../components/contact/TopContactWrapper';
import ContactForm from '../components/contact/ContactForm';
import ConfirmRequest from '../components/contact/ConfirmRequest';

const Contact = () => {
  const [submitted, setSubmitted] = useState<boolean>(true);

  return (
    <div className="mt-8">
      <TopContactWrapper />
      {!submitted && <ContactForm setSubmitted={setSubmitted} />}
      {submitted && <ConfirmRequest />}
    </div>
  )
};

export default Contact;