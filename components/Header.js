import Link from "next/link";
import { useState } from "react";
import {
  header,
  homelink,
  menuIcon,
  navlink,
} from "../styles/Header.module.scss";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={header}>
      <nav>
        <Link href="/">
          <a className={homelink}>
            <h1>Brian Cross</h1>
          </a>
        </Link>
        <div className={menuIcon} onClick={() => setMenuOpen(!menuOpen)} />
        <ul>
          <li>
            <Link href="#">
              <a className={navlink}>Work</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a className={navlink}>Blog</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a className={navlink}>About</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a className={navlink}>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
