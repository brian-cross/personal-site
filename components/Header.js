import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { header, menuIcon } from "../styles/Header.module.scss";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia("(min-width: 700px)");
    const listener = e => setMenuOpen(e.matches);
    setMenuOpen(mediaQueryList.matches);
    mediaQueryList.addEventListener("change", listener);
    return () => mediaQueryList.removeEventListener("change", listener);
  }, []);

  const icon = {
    open: { rotate: 180 },
    closed: { rotate: 0 },
  };

  const menu = {
    open: { clipPath: `polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)` },
    closed: { clipPath: `polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)` },
  };

  const transition = { type: "spring", duration: 0.5 };

  return (
    <header className={header}>
      <nav>
        <h1>Brian Cross</h1>
        <motion.div
          variants={icon}
          animate={menuOpen ? "open" : "closed"}
          transition={transition}
          className={menuIcon}
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <motion.ul
          variants={menu}
          animate={menuOpen ? "open" : "closed"}
          transition={transition}
        >
          <li>
            <Link href="#">
              <a>Work</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>Contact</a>
            </Link>
          </li>
        </motion.ul>
      </nav>
    </header>
  );
}
