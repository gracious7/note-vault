import React, { useState } from 'react';
import AdminSidebar from '../components/AdminSidebar';

const ContactUs: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Simulate sending the email (replace with your actual email sending logic)
    await sendEmail({ name, email, message });

    // Reset the form fields
    setName('');
    setEmail('');
    setMessage('');

    // Display a success message
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  const sendEmail = async (formData: { name: string; email: string; message: string }) => {
    // Implement your email sending logic here (e.g., using a backend API)
    // For this example, we'll just log the data to the console
    console.log('Sending email:', formData);
  };

  return (
    <div className="admin-container">
      <AdminSidebar />
      <main className="dashboard">
        <section>
          <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-96">
              <h1 className="text-2xl font-semibold mb-4">Contact Us</h1>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-semibold">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full border border-gray-300 p-2 rounded focus:ring focus:ring-indigo-400"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-semibold">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full border border-gray-300 p-2 rounded focus:ring focus:ring-indigo-400"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700 font-semibold">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full border border-gray-300 p-2 rounded focus:ring focus:ring-indigo-400"
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className={`bg-[#056be0] text-white font-semibold px-4 py-2 rounded hover:bg-[#054ae0] transition duration-300 ${
                      isSubmitted ? 'pointer-events-none opacity-50' : ''
                    }`}
                  >
                    {isSubmitted ? 'Submitted!' : 'Submit'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ContactUs;
