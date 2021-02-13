import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import { layout, content } from "../styles/Layout.module.scss";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Brian Cross - Web Developer</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <div className={layout}>
        <Header />
        <div className={content}>{children}</div>
        <Footer />
      </div>
    </>
  );
}
