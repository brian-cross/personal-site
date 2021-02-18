import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import { layout, content } from "../styles/Layout.module.scss";
import { useRouter } from "next/router";
import Transition from "./Transition";

export default function Layout({ children }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Brian Cross - Web Developer</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta
          name="description"
          content="I'm a web developer from Canada. I build lightning fast websites using modern frameworks such as React and Next.JS as well as vanilla JavaScript, HTML, and CSS."
        ></meta>
      </Head>
      <div className={layout}>
        <Header />

        <div className={content}>
          <Transition location={router.pathname}>{children}</Transition>
        </div>

        <Footer />
      </div>
    </>
  );
}
