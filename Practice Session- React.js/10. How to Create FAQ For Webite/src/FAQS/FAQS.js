import React, { useState } from "react";

import style from "./faqs.module.css";
import { faqsData } from "./data";
import FAQ from "./FAQ";
const FAQS = () => {
  const [faqs, setFaqs] = useState(faqsData);

  return (
    <main className={style.container}>
      <section className={style.faqs}>
        <h1>FAQs For Website</h1>
        {faqs.map((faq) => (
          <FAQ key={faq.id} {...faq} />
        ))}
      </section>
    </main>
  );
};

export default FAQS;
