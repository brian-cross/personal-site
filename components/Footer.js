import {
  footer,
  content,
  copyright,
  madeIn,
} from "../styles/Footer.module.scss";

export default function Footer() {
  return (
    <footer className={footer}>
      <div className={content}>
        <span className={copyright}>
          &copy; {new Date().getFullYear()} - Brian Cross
        </span>
        <span className={madeIn}>
          Made in Canada
          <img
            src="/maple-leaf.svg"
            alt="maple leaf"
            width={24}
            height={24}
          ></img>
        </span>
      </div>
    </footer>
  );
}
