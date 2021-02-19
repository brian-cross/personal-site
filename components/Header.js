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
  const menuDefaults = { defaults: { duration: 0.3, ease: "power1.inOut" } };
  const menuUp = "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)";
  const menuDown = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";

  useEffect(() => {
    if (!mobileView) clearMenuInlineStyles(menu);
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

  function clearMenuInlineStyles(menu) {
    menu.removeAttribute("style");
    menu.querySelectorAll("li").forEach(li => li.removeAttribute("style"));
  }

  function openMenu() {
    console.log("openMenu");
    gsap
      .timeline(menuDefaults)
      .to(menuButton, { rotation: 180 }, 0)
      .to(menu, { clipPath: menuDown, visibility: "visible" }, 0)
      .to(`.${menu.className} > li`, { opacity: 1, y: "0em", stagger: 0.125 });
  }

  function closeMenu(fast) {
    console.log("closeMenu", fast);
    gsap
      .timeline(menuDefaults)
      .to(menuButton, { rotation: 0 }, 0)
      .to(`.${menu.className} > li`, {
        opacity: 0,
        y: "1em",
        stagger: { each: 0.125, from: "end" },
      })
      .to(menu, { clipPath: menuUp }, fast ? 0 : null)
      .to(menu, { visibility: "hidden" });
  }

  function handleMenu(fast) {
    if (!mobileView) return;
    setMenuOpen(prev => {
      if (!prev) openMenu();
      else closeMenu(fast);
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
          onClick={() => handleMenu(false)}
        />
        <ul
          className={navLinks}
          ref={el => (menu = el)}
          onClick={() => handleMenu(true)}
        >
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
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li className={navLink}>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
