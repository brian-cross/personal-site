import { useEffect, useState } from "react";

import {
  main,
  headingContainer,
  heading,
  subHeading,
  typed,
} from "../styles/Home.module.scss";

export default function Home() {
  const strings = [
    "build cool stuff.",
    "make awesome websites.",
    "promote your business.",
    "increase your sales.",
  ];

  const [stringIndex, setStringIndex] = useState(0);

  return (
    <main className={main}>
      <div className={headingContainer}>
        <h1 className={heading}>Hey, I'm Brian.</h1>
        <h2 className={subHeading}>
          {"I use code to: "}
          <Typed
            typingInterval={200}
            typingDelay={2000}
            backspaceInterval={100}
            backspaceDelay={2000}
            onComplete={phase => {
              if (phase === "backspace")
                setStringIndex(index => ++index % strings.length);
            }}
          >
            {strings[stringIndex]}
          </Typed>
        </h2>
      </div>
    </main>
  );
}

function Typed({
  typingInterval,
  typingDelay,
  backspaceInterval,
  backspaceDelay,
  onComplete,
  children,
}) {
  const [text, setText] = useState("");

  function type() {
    return new Promise(resolve => {
      const timeout = setTimeout(() => {
        let index = 0;
        const characters = [];
        const interval = setInterval(() => {
          if (index < children.length) {
            characters.push(children.charAt(index++));
            setText(characters.join(""));
          } else {
            clearTimeout(timeout);
            clearInterval(interval);
            onComplete("type");
            resolve();
          }
        }, typingInterval);
      }, typingDelay);
    });
  }

  function backspace() {
    return new Promise(resolve => {
      const timeout = setTimeout(() => {
        const characters = children.split("");
        const interval = setInterval(() => {
          if (characters.pop()) setText(characters.join(""));
          else {
            clearTimeout(timeout);
            clearInterval(interval);
            onComplete("backspace");
            resolve();
          }
        }, backspaceInterval);
      }, backspaceDelay);
    });
  }

  useEffect(() => {
    type().then(backspace);
  }, [children]);

  return <span className={typed}>{text}</span>;
}
