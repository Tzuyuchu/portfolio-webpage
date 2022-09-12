import type { NextPage } from "next";
import App from "../src/App";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Nicholas Nguyen - Personal Page</title>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="WIP Portfolio, feel free to look around!"
        />
        <meta
          name="keywords"
          content="Full-stack developer, Nicholas Nguyen, HTML, CSS, Next.js, React.js, 
        Software Engineer, College Student, Portfolio, Personal Page"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Nicholas Nguyen" />
        <link
          rel="icon"
          href="https://api.iconify.design/emojione-monotone/letter-n.svg?color=%23e3bb19"
        />
      </Head>
      <App />
    </>
  );
};

export default Home;
