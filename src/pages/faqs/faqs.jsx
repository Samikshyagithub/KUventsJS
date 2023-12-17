
import React from 'react';
import { Link } from 'react-router-dom';
import "./faqs.scss";
const faqData = [
  {
    question: 'What is the purpose of this website?',
    answer: 'KUvents is a dedicated platform designed to streamline and centralize information about Kathmandu University events. It simplifies event management, fosters community engagement, and enhances the overall university experience. Our goal is to create a vibrant and connected campus culture through seamless event organization and participation.'
  },
  {
    question: 'How can I contact customer support?',
    answer: 'For any assistance or inquiries, please visit our "Contact Us" page on the website. We are here to help and look forward to addressing your questions and concerns'
  },
  // Add more FAQ items as needed
];

// FAQ component
const FAQs = () => (
  <div className="Hello">
    <h1>Frequently Asked Questions</h1>
    <div classname="list">
    <ul>
      {faqData.map((faq, index) => (
        <li key={index}>
          <h3>{faq.question}</h3>
          <p>{faq.answer}</p>
        </li>
      ))}
    </ul>
    <p>
      If you have more questions, please <Link to="/contact-us">contact us</Link>.
    </p>
  </div>
  </div>
);

export default FAQs