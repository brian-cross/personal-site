import "normalize.css";
import Layout from "../components/Layout";
import { PageTransition } from "next-page-transitions";
import globalStyles from "../styles/global";

const TIMEOUT = 300;

function MyApp({ Component, pageProps, router }) {
  return (
    <Layout>
      <PageTransition timeout={TIMEOUT} classNames="page-transition">
        <Component {...pageProps} key={router.route} />
      </PageTransition>
      <style jsx global>
        {`
          [class^="page-transition"] {
            height: 100%;
          }

          .page-transition-enter {
            opacity: 0;
          }

          .page-transition-enter-active {
            opacity: 1;
            transition: ${`opacity ${TIMEOUT}ms ease-in`};
          }

          .page-transition-exit {
            opacity: 0;
            transition: ${`opacity ${TIMEOUT}ms ease-in`};
          }

          .page-transition-exit-active {
            opacity: 0;
          }
        `}
      </style>
      <style jsx global>
        {globalStyles}
      </style>
    </Layout>
  );
}

export default MyApp;
