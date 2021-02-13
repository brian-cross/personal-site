import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
    "promote your business.",
    "make awesome websites.",
    "increase your sales.",
    "create useful apps.",
  ];

  const [stringIndex, setStringIndex] = useState(0);

  return (
    <main className={main}>
      <div className={headingContainer}>
        <motion.h1
          initial={{ y: "0.5em", rotate: -5, opacity: 0 }}
          animate={{ y: "0em", rotate: -5, opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.75 }}
          className={heading}
        >
          Hey, I'm Brian.
        </motion.h1>
        <motion.h2
          initial={{ y: "0.5em", rotate: -5, opacity: 0 }}
          animate={{ y: "0em", rotate: -5, opacity: 1 }}
          transition={{ delay: 1.25, duration: 0.75 }}
          className={subHeading}
        >
          {"I use code to: "}
          <Typed
            typingInterval={150}
            typingDelay={1750}
            backspaceInterval={75}
            backspaceDelay={2000}
            onComplete={phase => {
              if (phase === "backspace")
                setStringIndex(index => ++index % strings.length);
            }}
          >
            {strings[stringIndex]}
          </Typed>
        </motion.h2>
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
