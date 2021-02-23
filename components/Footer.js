import { footer } from "../styles/theme";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="content">
          <span className="copyright">
            &copy; {new Date().getFullYear()} - Brian Cross
          </span>
          <span className="made-in">
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
      <style jsx>{`
        footer {
          $border: 1px solid ${footer.separator};
          width: 100%;
          color: ${footer.font};

          .content {
            width: 90%;
            max-width: 95rem;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1em 0;
            border-top: $border;
          }

          .copyright {
            border-right: $border;
            padding-right: 1em;
          }

          .made-in {
            display: flex;
            align-items: center;
            padding-left: 1em;

            img {
              width: 1.5em;
              height: 1.5em;
              margin-left: 0.75em;
            }
          }
        }
      `}</style>
    </>
  );
}
