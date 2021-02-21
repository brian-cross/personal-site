import { useEffect } from "react";

export default function About({ transitionWrapper }) {
  useEffect(() => console.log(transitionWrapper));

  return (
    <main>
      <h1>About Me</h1>
      <h2>How's it going?</h2>
      <p>
        I'm a web developer from Edmonton Alberta Canada. Originally an
        Electronics Technologist with a C and Assembly Language programming
        background, I discovered the power of JavaScript and haven't looked
        back. I'm constantly amazed at the power of modern web technologies and
        what can be done with it.
      </p>
      <style jsx>
        {`
          main {
            width: 90%;
            max-width: 95rem;
            margin: 0 auto;
          }
          p {
            width: 100%;
            max-width: 70ch;
          }

          ul {
            padding-left: 1.125em;
          }

          li {
            margin: 1em 0;
            list-style: disc;
          }
        `}
      </style>
    </main>
  );
}
