import gsap from "gsap";
import { useEffect, useRef } from "react";

import {
  main,
  formContainer,
  header,
  first,
  last,
  email,
  description,
  button,
} from "../styles/Contact.module.scss";

export default function Contact() {
  let form = useRef(null);

  useEffect(() => {
    const formElements = form.querySelectorAll("*");
    gsap.set(form, { visibility: "visible" });
    gsap.from(formElements, {
      opacity: 0,
      y: 32,
      stagger: 0.3,
      delay: 0.5,
      duration: 1,
    });
  }, []);

  return (
    <main className={main}>
      <div className={formContainer} ref={el => (form = el)}>
        <h1 className={header}>Let's start something...</h1>
        <input
          className={first}
          type="text"
          placeholder="First Name"
          aria-label="First Name"
        />
        <input
          className={last}
          type="text"
          placeholder="Last Name"
          aria-label="Last Name"
        />
        <input
          className={email}
          type="email"
          placeholder="Email Address"
          aria-label="Email Address"
        />
        <textarea
          className={description}
          placeholder="Tell me about your project..."
          aria-label="Tell me about your project"
        />
        <button className={button} aria-label="Send Request">
          Send Request
        </button>
      </div>
    </main>
  );
}
