import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  header,
  homelink,
  menuIcon,
  navlink,
} from "../styles/Header.module.scss";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [enableAnimation, setEnableAnimation] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia("(min-width: 700px)");

    setEnableAnimation(!mediaQueryList.matches);
    setMenuOpen(mediaQueryList.matches);

    const listener = e => {
      // Mobile -> Desktop
      if (e.matches) {
        setEnableAnimation(false);
        setMenuOpen(true);
      }
      // Desktop -> Mobile
      else {
        setMenuOpen(false);
        setEnableAnimation(true);
      }
    };

    mediaQueryList.addEventListener("change", listener);

    return () => mediaQueryList.removeEventListener("change", listener);
  }, []);

  const icon = {
    open: { rotate: 180 },
    closed: { rotate: 0 },
  };

  const menu = {
    open: {
      clipPath: `polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)`,
      transition: enableAnimation
        ? {
            delay: 0.3,
            duration: 0.5,
            delayChildren: 0.75,
            staggerChildren: 0.1,
          }
        : { duration: 0 },
    },
    closed: {
      clipPath: `polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)`,
      transition: enableAnimation
        ? {
            delay: 0.75,
            duration: 0.5,
            delayChildren: 0.3,
            staggerChildren: 0.1,
            staggerDirection: -1,
          }
        : { duration: 0 },
    },
  };

  const item = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        duration: enableAnimation ? 0.2 : 0,
      },
    },
    closed: {
      opacity: 0,
      y: 10,
      transition: {
        type: "tween",
        duration: enableAnimation ? 0.2 : 0,
      },
    },
  };

  return (
    <header className={header}>
      <nav>
        <Link href="/">
          <a className={homelink}>
            <h1>Brian Cross</h1>
          </a>
        </Link>
        <motion.div
          variants={icon}
          animate={menuOpen ? "open" : "closed"}
          transition={{ type: "tween", duration: enableAnimation ? 0.3 : 0 }}
          className={menuIcon}
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <motion.ul variants={menu} animate={menuOpen ? "open" : "closed"}>
          <motion.li variants={item}>
            <Link href="#">
              <a className={navlink}>Work</a>
            </Link>
          </motion.li>
          <motion.li variants={item}>
            <Link href="#">
              <a className={navlink}>Blog</a>
            </Link>
          </motion.li>
          <motion.li variants={item}>
            <Link href="#">
              <a className={navlink}>About</a>
            </Link>
          </motion.li>
          <motion.li variants={item}>
            <Link href="#">
              <a className={navlink}>Contact</a>
            </Link>
          </motion.li>
        </motion.ul>
      </nav>
    </header>
  );
}
