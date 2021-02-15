import Link from "next/link";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import {
  header,
  menuIcon,
  navLink,
  navLinks,
} from "../styles/Header.module.scss";

export default function Header() {
  const [, setMenuOpen] = useState(false);
  const [mobileView, setMobileView] = useState(false);

  let menuButton = useRef(null);
  let menu = useRef(null);
  const timeline = useRef();

  useEffect(() => {
    if (mobileView) {
      initMenuAnimation();
    } else {
      clearMenuInlineStyles(menu);
    }
  }, [mobileView]);

  useEffect(() => {
    const mediaList = window.matchMedia("screen and (min-width: 700px)");

    if (!mediaList.matches) setMobileView(true);

    mediaList.addEventListener("change", e => {
      if (e.matches) {
        setMobileView(false);
      } else {
        setMobileView(true);
      }
    });
  }, []);

  function initMenuAnimation() {
    const menuUp = "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)";
    const menuDown = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";

    timeline.current = gsap.timeline({
      paused: true,
      defaults: { duration: 0.3, ease: "power1.inOut" },
    });

    timeline.current
      .fromTo(menuButton, { rotation: 0 }, { rotation: 180 }, 0)
      .fromTo(
        menu,
        { clipPath: menuUp, visibility: "hidden" },
        { clipPath: menuDown, visibility: "visible" },
        0
      )
      .fromTo(
        `.${menu.className} > li`,
        { opacity: 0, y: "1em", stagger: 0.125 },
        { opacity: 1, y: "0em", stagger: 0.125 }
      );
  }

  function clearMenuInlineStyles(menu) {
    menu.removeAttribute("style");
    menu.querySelectorAll("li").forEach(li => li.removeAttribute("style"));
  }

  function handleMenuButton() {
    setMenuOpen(prev => {
      if (!prev) timeline.current.play();
      else timeline.current.reverse();
      return !prev;
    });
  }

  return (
    <header className={header}>
      <nav>
        <Link href="/">
          <a>
            <h1>Brian Cross</h1>
          </a>
        </Link>
        <div
          className={menuIcon}
          ref={el => (menuButton = el)}
          onClick={handleMenuButton}
        />
        <ul className={navLinks} ref={el => (menu = el)}>
          <li className={navLink}>
            <Link href="#">
              <a>Work</a>
            </Link>
          </li>
          <li className={navLink}>
            <Link href="#">
              <a>Blog</a>
            </Link>
          </li>
          <li className={navLink}>
            <Link href="#">
              <a>About</a>
            </Link>
          </li>
          <li className={navLink}>
            <Link href="#">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
