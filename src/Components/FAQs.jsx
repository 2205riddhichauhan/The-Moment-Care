import React from 'react';
import './FAQs.css';

const FAQs = () => {
  const faqList = [
    {
      question: "What is MOMent Care?",
      answer:
        "MOMent Care is a supportive platform designed to provide pregnant women and new mothers with resources, tools, and emotional support throughout their motherhood journey.",
    },
    {
      question: "Who can use this website?",
      answer:
        "This website is for expecting mothers, new moms, or anyone looking to support a mother through pregnancy, postpartum, and early parenting.",
    },
    {
      question: "Is MOMent Care free to use?",
      answer:
        "Yes! All the resources, guides, music, and tools are available completely free for your convenience and care.",
    },
    {
      question: "How do I log in or sign up?",
      answer:
        "Use the 'Login' or 'Sign Up' options from the Welcome page. If you don't have an account, just sign up with your email and password.",
    },
    {
      question: "What kind of content is provided?",
      answer:
        "You can find pregnancy books, do’s and don’ts, music for relaxation, expert guides, learning sections, and more — all curated for moms.",
    },
    {
      question: "Who created MOMent Care?",
      answer:
        "This platform was created by a student learning React, passionate about helping moms using modern technology and design.",
    },
  ];

  return (
    <div className="faqs-container container my-5">
      <h2 className="text-center mb-4 text-primary">Frequently Asked Questions</h2>
      <div className="accordion" id="faqAccordion">
        {faqList.map((faq, index) => (
          <div className="accordion-item mb-3" key={index}>
            <h2 className="accordion-header" id={`heading${index}`}>
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${index}`}
                aria-expanded="false"
                aria-controls={`collapse${index}`}
              >
                {faq.question}
              </button>
            </h2>
            <div
              id={`collapse${index}`}
              className="accordion-collapse collapse"
              aria-labelledby={`heading${index}`}
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
