import { useEffect } from "react";

import {
  main,
  headingContainer,
  heading,
  subHeading,
} from "../styles/Home.module.scss";

export default function Home() {
  useEffect(() => {
    window.addEventListener("mousemove", e =>
      console.log(e.clientX, e.clientY)
    );
  }, []);

  return (
    <main className={main}>
      <div className={headingContainer}>
        <h1 className={heading}>Hey, I'm Brian.</h1>
        <h2 className={subHeading}>I'm a web developer from Canada.</h2>
      </div>
    </main>
  );
}
