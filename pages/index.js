import gsap from "gsap";
import { useEffect, useRef } from "react";
import {
  main,
  headingContainer,
  heading,
  subHeading,
} from "../styles/Home.module.scss";

export default function Home() {
  let headings = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);

  useEffect(() => {
    gsap.set(headings, { visibility: "visible" });
    gsap.from([line1, line2], {
      yPercent: 50,
      opacity: 0,
      duration: 1.25,
      delay: 0.5,
      stagger: 1.5,
      ease: "power1",
    });

    line1.addEventListener("mousemove", rotateText);
    line1.addEventListener("mouseout", resetText);
    line2.addEventListener("mousemove", rotateText);
    line2.addEventListener("mouseout", resetText);
  }, []);

  function rotateText(e) {
    const maxRotation = 15;
    const options = { duration: 2, ease: "power2" };
    const { clientWidth: width, clientHeight: height } = e.target;
    const xPercent = gsap.utils.mapRange(0, width, -1, 1, e.offsetX);
    const yPercent = gsap.utils.mapRange(0, height, 1, -1, e.offsetY);
    gsap.to(e.target, { rotateY: maxRotation * xPercent, ...options });
    gsap.to(e.target, { rotateX: maxRotation * yPercent, ...options });
  }

  function resetText(e) {
    setTimeout(() => {
      gsap.to(e.target, {
        rotateX: 0,
        rotateY: 0,
        duration: 2,
      });
    }, 1000);
  }

  return (
    <main className={main}>
      <div className={headingContainer} ref={el => (headings = el)}>
        <h1 className={heading} ref={el => (line1 = el)}>
          Hi, I'm Brian.
        </h1>
        <h2 className={subHeading} ref={el => (line2 = el)}>
          I'm a Web Developer.
        </h2>
      </div>
    </main>
  );
}
