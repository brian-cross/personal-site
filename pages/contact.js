import gsap from "gsap";
import { background, font } from "../styles/theme";
import { useEffect, useRef } from "react";

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
    <>
      <main>
        <div className="container" ref={el => (form = el)}>
          <h1 className="header">Let's start something...</h1>
          <input
            className="first"
            type="text"
            placeholder="First Name"
            aria-label="First Name"
          />
          <input
            className="last"
            type="text"
            placeholder="Last Name"
            aria-label="Last Name"
          />
          <input
            className="email"
            type="email"
            placeholder="Email Address"
            aria-label="Email Address"
          />
          <textarea
            className="description"
            placeholder="Tell me about your project..."
            aria-label="Tell me about your project"
          />
          <button className="button" aria-label="Send Request">
            Send Request
          </button>
        </div>
      </main>
      <style jsx>{`
        main {
          width: 90%;
          max-width: 95rem;
          margin: 0 auto;
          height: 100%;
          display: flex;
          align-items: stretch;
          justify-content: center;
        }

        @media screen and (min-width: 700px) {
          main {
            align-items: center;
            justify-content: flex-end;
          }
        }

        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: auto;
          grid-template-areas:
            "header header"
            "first last"
            "email email"
            "description description"
            "button button";
          gap: 2rem;
          width: 100%;
          max-width: 40rem;
          margin: 1rem 0;
          visibility: hidden;
        }

        @media screen and (min-width: 700px) {
          .container {
            margin: 3rem 0;
          }
        }

        input {
          height: 3em;
          padding: 0 1em;
        }

        textarea {
          height: 15em;
          padding: 1em;
          resize: vertical;
        }

        input,
        textarea {
          color: ${font.secondary};
          background-color: ${background.header};
          border: none;
          width: 100%;
        }

        button {
          height: 4em;
        }

        .header {
          grid-area: header;
          align-self: center;
          margin-top: 1em;
          margin-bottom: 0.5em;
        }

        @media screen and (min-width: 700px) {
          .header {
            margin-top: 0;
          }
        }
        .first {
          grid-area: first;
        }

        .last {
          grid-area: last;
        }

        .email {
          grid-area: email;
        }

        .description {
          grid-area: description;
        }

        .button {
          grid-area: button;
          text-transform: uppercase;
          letter-spacing: 0.33em;
          color: ${font.primary};
          background-color: transparent;
          border: 0.15em solid ${font.primary};
        }
      `}</style>
    </>
  );
}
