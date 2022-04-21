import { FC } from "react";
import Head from "next/head";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

interface Props {
  children: JSX.Element;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Recepie App</title>
        <meta name="author" content="Fl0rchus" />
        <meta name="description" content="Recepie app created with NextJS" />
      </Head>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
