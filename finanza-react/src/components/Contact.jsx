import { useState } from "react";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully!");
    console.log(formData);
  };

  return (
    <div className="container-xxl py-5">
      <div className="container">

        <div className="row g-5">

          {/* Contact Form */}
          <div className="col-lg-6 wow fadeIn">

            <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">
              Contact
            </p>

            <h1 className="display-5 mb-4">
              If You Have Any Query, Please Contact Us
            </h1>

            <form onSubmit={handleSubmit}>

              <div className="row g-3">

                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <label>Your Name</label>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <label>Your Email</label>
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                    <label>Subject</label>
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      placeholder="Message"
                      style={{ height: "100px" }}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                    <label>Message</label>
                  </div>
                </div>

                <div className="col-12">
                  <button className="btn btn-primary py-3 px-5" type="submit">
                    Send Message
                  </button>
                </div>

              </div>

            </form>

          </div>

          {/* Google Map */}
          <div
            className="col-lg-6 wow fadeIn"
            style={{ minHeight: "450px" }}
          >

            <div className="position-relative rounded overflow-hidden h-100">

              <iframe
                title="map"
                className="position-relative w-100 h-100"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143"
                style={{ border: 0, minHeight: "450px" }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Contact;