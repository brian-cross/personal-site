import gsap from "gsap";
import { useEffect, useRef } from "react";

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
    const options = { duration: 2, ease: "power1" };
    const { clientWidth: width, clientHeight: height } = e.target;
    const xPercent = gsap.utils.mapRange(0, width, -1, 1, e.offsetX);
    const yPercent = gsap.utils.mapRange(0, height, 1, -1, e.offsetY);
    gsap.to(e.target, { rotateY: maxRotation * xPercent, ...options });
    gsap.to(e.target, { rotateX: maxRotation * yPercent, ...options });
  }

  function resetText(e) {
    // setTimeout(() => {
    gsap.to(e.target, {
      rotateX: 0,
      rotateY: 0,
      duration: 2,
    });
    // }, 100);
  }

  return (
    <>
      <main>
        <div className="heading-container" ref={el => (headings = el)}>
          <h1 className="heading" ref={el => (line1 = el)}>
            Hi, I'm Brian.
          </h1>
          <h2 className="sub-heading" ref={el => (line2 = el)}>
            I'm a Web Developer.
          </h2>
        </div>
        <div className="rocket">
          <img src="/rocket.svg" alt="rocket" width={540} height={770}></img>
        </div>
      </main>
      <style jsx>
        {`
          main {
            width: 90%;
            max-width: 95rem;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            @media screen and (min-width: 1025px) {
              flex-direction: row;
            }
            justify-content: space-between;
            height: 100%;
            perspective: clamp(500px, 90vw, 1500px);
          }

          .heading-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            @media screen and (min-width: 1025px) {
              align-items: flex-start;
            }
            visibility: hidden;
          }

          .heading {
            font-size: clamp(44px, 8vw, 96px);
            margin-top: 1em;
            margin-bottom: 0;
          }

          .sub-heading {
            font-size: clamp(22px, 4vw, 48px);
            margin: 0;
          }

          .rocket {
            display: flex;
            align-items: center;
            justify-content: center;
            //flex-basis: 20rem;
            img {
              margin: 2rem 0;
              height: clamp(28rem, 55vmax, 45rem);
              width: auto;
            }
          }
        `}
      </style>
    </>
  );
}
