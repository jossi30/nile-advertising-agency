import React, { useState } from 'react';

export default function ContactMe() {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    topic: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://formspree.io/f/xyyrqryq', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formState),
    })
      .then((response) => {
        if (response.ok) {
          setIsSubmitted(true);
        } else {
          alert('There was a problem with your submission.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleShowForm = () => {
    setIsFormVisible(true);
  };

  if (isSubmitted) {
    return <p className='thank-u'>Thank you, we will be contacting you shortly</p>;
  }

  return (
    <section id="free-trail" className="contact--section">
      <div>
        {!isFormVisible && (
          <button onClick={handleShowForm} className="btn btn-github">
            Click Here to Sign Up for a <b>FREE Trail</b>
          </button>
        )}
        {isFormVisible && (
          <>
            <div>
              <p className="sub--title">Sign up for a</p>
              <h2>FREE Trail</h2>
              <p className="text-lg">
               .
              </p>
            </div>
            <form className="contact--form--container" onSubmit={handleSubmit}>
              <div className="container">
                <label htmlFor="firstName" className="contact--label">
                  <span className="text-md">First Name</span>
                  <input
                    type="text"
                    className="contact--input text-md"
                    name="firstName"
                    id="firstName"
                    value={formState.firstName}
                    onChange={handleChange}
                    required
                  />
                </label>
                <label htmlFor="lastName" className="contact--label">
                  <span className="text-md">Last Name</span>
                  <input
                    type="text"
                    className="contact--input text-md"
                    name="lastName"
                    id="lastName"
                    value={formState.lastName}
                    onChange={handleChange}
                    required
                  />
                </label>
                <label htmlFor="email" className="contact--label">
                  <span className="text-md">Email</span>
                  <input
                    type="email"
                    className="contact--input text-md"
                    name="email"
                    id="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                  />
                </label>
                <label htmlFor="phoneNumber" className="contact--label">
                  <span className="text-md">Phone Number</span>
                  <input
                    type="number"
                    className="contact--input text-md"
                    name="phoneNumber"
                    id="phoneNumber"
                    value={formState.phoneNumber}
                    onChange={handleChange}
                    required
                  />
                </label>
                </div>
              <label htmlFor="topic" className="contact--label">
                <span className="text-md">Choose a topic</span>
                <select
                  id="topic"
                  className="contact--input text-md"
                  name="topic"
                  value={formState.topic}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Select One...</option>
                  <option>Email Marketing</option>
                  <option>Text Marketing</option>
                </select>
              </label>
              <label htmlFor="message" className="contact--label">
                <span className="text-md">Message</span>
                <textarea
                  className="contact--input text-md"
                  id="message"
                  name="message"
                  rows="8"
                  placeholder="Type your message..."
                  value={formState.message}
                  onChange={handleChange}
                  required
                />
              </label>
              <label htmlFor="checkbox" className="checkbox--label">
                <input
                  type="checkbox"
                  required
                  name="checkbox"
                  id="checkbox"
                />
                <span className="text-sm">I accept the terms</span>
              </label>
              <div>
                <button className="btn btn-primary contact--form--btn">Submit</button>
              </div>
            </form>
          </>
        )}
      </div>
    </section>
  );
}
