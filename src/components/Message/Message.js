import React, { useState } from "react";

function Message() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    console.log(formData);
    // send a POST request to database
  };

  return (
    <div className="message py-4">
      <div className="container">
        <h2 className="display-6">
          Are you ready
          <br /> to board this rocket ship?
        </h2>
        <p className="lead">Share your excitement with us.</p>
        <form
          onSubmit={handleSubmit}
          className="message-form card border-0 p-4 mb-4"
        >
          <div className="my-3 ">
            <input
              type="text"
              className="form-control mb-3 border-0"
              id="name"
              placeholder="Name*"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              className="form-control mb-3 border-0"
              id="email"
              name="email"
              placeholder="Email*"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <textarea
              className="form-control mb-3 border-0"
              id="message"
              name="message"
              placeholder="Message*"
              value={formData.message}
              onChange={handleChange}
              required
              rows="10"
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn btn-secondary rounded-pill align-self-center mb-3"
          >
            Shoot us a message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Message;
