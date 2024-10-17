'use client'
import React from 'react';
import { FaPhone } from 'react-icons/fa';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("mvgoowey");

  const handleSubmission = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Attempting to submit...");
    
    await handleSubmit(event); // Formspree submission
    
    if (state.succeeded) {
      console.log("Form successfully submitted!");
    } else if (state.errors && Array.isArray(state.errors) && state.errors.length > 0) {
      console.log("Submission failed:", state.errors);
    }
    
  };

  return (
    <div id='contact' className='min-h-[70vh] min-w-full flex items-center justify-center'>
      <div className='flex flex-col items-center justify-center gap-3 space-y-6 p-14'>
        <div className='flex flex-col md:flex-row items-center text-center md:text-left text-5xl md:text-7xl'>
          <h1 className='bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent'>
            Get in Touch
          </h1>
          <FaPhone className='text-red-500 text-4xl md:text-5xl mt-5 md:mt-0 md:ml-4' />
        </div>

        <p className='text-center text-lg font-semibold text-white'>
          Let&apos;s <span className='text-blue-500 text-xl'>Build</span> Something <span className='text-blue-500 text-xl'>Awesome</span>!
        </p>

        <div className='grid grid-cols-1'>
          <form onSubmit={handleSubmission} className="flex flex-col gap-4 ">
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div>
                <label htmlFor="name" className='text-white'>Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  className="p-2 border border-gray-300 rounded-md w-full focus:ring-4 focus:ring-indigo-600 outline-none transition-all duration-200"
                  required
                  placeholder='John Doe'
                />
              </div>
              <div>
                <label htmlFor="email" className='text-white'>Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="p-2 border border-gray-300 rounded-md w-full focus:ring-4 focus:ring-indigo-600 outline-none transition-all duration-200"
                  required
                  placeholder='johndoe@gmail.com'
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>
            </div>

            <div className='col-span-1'>
              <label htmlFor="message" className='text-white'>Message</label>
              <textarea
                id="message"
                name="message"
                className="p-2 border border-gray-300 rounded-md w-full focus:ring-4 focus:ring-indigo-600 outline-none transition-all duration-200"
                required
                placeholder='Hi, Osama!...'
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="rounded-lg border-indigo-600 bg-gradient-to-r from-indigo-600 to-red-500 px-5 py-3 text-xl font-bold text-white shadow-lg shadow-indigo-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-600"
            >
              {state.submitting ? 'Sending...' : 'Send'}
            </button>

            {state.succeeded && (
              <p className='text-center text-lg font-semibold text-green-500 mt-4'>
                Thanks for your message!
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
