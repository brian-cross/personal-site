import Link from "next/link";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { background, colors, font } from "../styles/theme";

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
      .to(".nav-link", { opacity: 1, y: "0em", stagger: 0.125 });
  }

  function closeMenu(fast) {
    console.log("closeMenu", fast);
    gsap
      .timeline(menuDefaults)
      .to(menuButton, { rotation: 0 }, 0)
      .to(".nav-link", {
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
    <>
      <header>
        <nav>
          <Link href="/">
            <a>
              <h1>Brian Cross</h1>
            </a>
          </Link>
          {mobileView && (
            <div
              className="menu-icon"
              ref={el => (menuButton = el)}
              onClick={() => handleMenu(false)}
            />
          )}
          <ul
            className="nav-links"
            ref={el => (menu = el)}
            onClick={() => handleMenu(true)}
          >
            <li className="nav-link">
              <Link href="#">
                <a>Work</a>
              </Link>
            </li>
            <li className="nav-link">
              <Link href="#">
                <a>Blog</a>
              </Link>
            </li>
            <li className="nav-link">
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            <li className="nav-link">
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <style jsx>
        {`
          header {
            position: relative;
            display: flex;
            align-items: center;
            width: 100%;
            color: ${colors.white};
            background-color: ${background.header};
            text-transform: uppercase;
            letter-spacing: 0.33em;

            nav {
              display: flex;
              height: 6rem;
              align-items: center;
              justify-content: space-between;
              width: 90%;
              max-width: 95rem;
              margin: 0 auto;
            }

            .menu-icon {
              position: relative;
              height: 1.5rem;
              width: 2rem;

              &::before,
              &::after {
                content: "";
                position: absolute;
                height: 1.5rem;
                width: 0.2em;
                right: 0;
                background-color: ${font.primary};
                border-radius: 0.2em;
              }

              &::before {
                transform: translateX(-1.45rem) rotate(-45deg);
              }

              &::after {
                transform: translateX(-0.5rem) rotate(45deg);
              }
            }

            h1 {
              font-size: 1.5rem;
              margin: 0;
              transition: color 0.25s linear;

              &:hover {
                color: ${background.menu};
              }
            }

            .nav-links {
              position: absolute;
              z-index: 1;
              top: 100%;
              left: 0;
              right: 0;
              font-size: 1.25rem;
              padding: 1.5em;
              margin: 0;
              background-color: ${background.menu};
              clip-path: polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%);
              visibility: hidden;

              .nav-link {
                opacity: 0;
                transform: translateY(1em);
              }
            }

            .nav-link + .nav-link {
              margin-top: 1.5em;
            }

            @media screen and (min-width: 700px) {
              .nav-links {
                position: static;
                margin-left: auto;
                font-size: 1rem;
                padding: 0;
                background-color: inherit;
                clip-path: none;
                visibility: visible;

                .nav-link {
                  display: inline-block;
                  opacity: 1;
                  transform: none;
                  transition: transform 0.25s ease-in-out, color 0.25s linear;

                  &:hover {
                    color: ${background.menu};
                    transform: translateY(-0.15em);
                  }
                }

                .nav-link + .nav-link {
                  margin-top: 0;
                  margin-left: clamp(3rem, 5vw, 5rem);
                }
              }
            }
          }
        `}
      </style>
    </>
  );
}
