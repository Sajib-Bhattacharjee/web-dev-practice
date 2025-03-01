import React, { useState } from "react";
import styled from "styled-components";

const FAQContainer = styled.div`
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const FAQTitle = styled.h2`
  text-align: center;
  color: #333;
  margin-bottom: 30px;
  font-size: 2em;
`;

const FAQItem = styled.div`
  margin-bottom: 15px;
`;

const Question = styled.div`
  background-color: #fff;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  font-weight: bold;
  color: #333;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #e2e2e2;
  }
`;

const Answer = styled.div`
  max-height: ${({ isOpen }) => (isOpen ? "1000px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease;
  padding: ${({ isOpen }) => (isOpen ? "15px" : "0 15px")};
  background-color: #f1f1f1;
  border-radius: 0 0 8px 8px;
  box-shadow: ${({ isOpen }) =>
    isOpen ? "0 2px 5px rgba(0, 0, 0, 0.1)" : "none"};
  margin-top: -5px;
`;

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is your return policy?",
      answer:
        "Our return policy allows you to return products within 30 days of purchase. Please ensure the items are in their original condition.",
    },
    {
      question: "How long does shipping take?",
      answer:
        "Shipping usually takes 5-7 business days depending on your location.",
    },
    {
      question: "Do you offer customer support?",
      answer:
        "Yes, we offer 24/7 customer support. You can reach us via email, phone, or live chat.",
    },
    {
      question: "Can I change my order?",
      answer:
        "Yes, you can change your order within 24 hours of placing it. Please contact our support team for assistance.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FAQContainer>
      <FAQTitle>Frequently Asked Questions</FAQTitle>
      {faqs.map((faq, index) => (
        <FAQItem key={index}>
          <Question onClick={() => toggleFAQ(index)}>{faq.question}</Question>
          <Answer isOpen={openIndex === index}>{faq.answer}</Answer>
        </FAQItem>
      ))}
    </FAQContainer>
  );
};

export default FAQ;
