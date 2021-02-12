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
        <span className={copyright}>&copy; {new Date().getFullYear()}</span>
        <span className={madeIn}>
          Handcrafted in <img src="/maple-leaf.svg" alt="Canada"></img>
        </span>
      </div>
    </footer>
  );
}
