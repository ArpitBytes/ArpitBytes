import React from "react";
import { contactDetails } from "../Details";

function Contact() {
  const { email, phone } = contactDetails;

  return (
    <main className="container mx-auto max-width section">
      {/* Header */}
      <h2 className="text-center text-xl md:text-2xl lg:text-4xl text-dark-heading dark:text-light-heading font-semibold md:font-bold mb-4">
        Let’s Connect
      </h2>

      {/* Subtext */}
      <p className="text-center text-base md:text-lg text-content font-light max-w-2xl mx-auto leading-relaxed mb-10">
        I’m always open to discussing full-stack development opportunities, collaborations, or just exchanging ideas. 
        Feel free to get in touch via email or phone — I’d be happy to connect.
      </p>

      {/* Contact Information */}
      <div className="text-center space-y-4 md:space-y-6">
        <h5 className="text-xl md:text-2xl lg:text-3xl text-gradient font-semibold md:font-bold">
          <a href={`mailto:${email}`} className="hover:underline">
            {email}
          </a>
        </h5>

        <span className="text-content text-base font-light block">or</span>

        <h5 className="text-xl md:text-2xl lg:text-3xl text-gradient font-semibold md:font-bold">
          <a href={`tel:${phone}`} className="hover:underline">
            {phone}
          </a>
        </h5>
      </div>

      {/* Optional Footer Section */}
      <div className="text-center mt-10">
        <p className="text-sm md:text-base text-content font-light">
          You can also find me on{" "}
          <a
            href="https://github.com/ArpitBytes"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gradient font-medium hover:underline"
          >
            GitHub
          </a>{" "}
          or{" "}
          <a
            href="https://www.linkedin.com/in/arpit-gupta2312"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gradient font-medium hover:underline"
          >
            LinkedIn
          </a>
          .
        </p>
      </div>
    </main>
  );
}

export default Contact;
