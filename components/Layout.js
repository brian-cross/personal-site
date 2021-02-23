import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
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
      <div className="layout">
        <Header />
        <div className="content">{children}</div>
        <Footer />
      </div>
      <style jsx>{`
        .layout {
          display: flex;
          flex-direction: column;
          height: 100%;
          width: 100%;
        }

        .content {
          flex-grow: 1;
          width: 100%;
        }
      `}</style>
    </>
  );
}
