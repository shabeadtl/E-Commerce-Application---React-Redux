import React from "react";

export default function ContactUs() {
  return (
    <div className="container" style={{marginTop:'90px'}}>
      <div className="card shadow-lg border-0">
        <div className="card-body p-4">
          <h2 className="card-title text-center mb-4">Contact Us</h2>
          <p className="text-center text-muted mb-4">
            Got questions or feedback? We’d love to hear from you!  
            Fill out the form below and we’ll get back to you soon.
          </p>

          <form>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input type="text" className="form-control" placeholder="Your Name" />
            </div>

            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input type="email" className="form-control" placeholder="name@example.com" />
            </div>

            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea className="form-control" rows="4" placeholder="Write your message..."></textarea>
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
