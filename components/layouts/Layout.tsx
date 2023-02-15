import Head from "next/head";
import { FC, ReactNode } from "react";
import { Navbar } from "../ui";

interface Props {
  children: ReactNode;
  title?: string;
}

const origin = (typeof window === 'undefined' )? '' : window.location.origin

export const Layout: FC<Props> = ({ children, title }) => {
  
  
  
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Roberto Arce" />
        <meta
          name="decription"
          content={`Informacion sobre el pokemon ${title}`}
        />
        <meta name="keywords" content={`pokemon,${title},pokedex`} />
        <meta
          property="og:title"
          content={`Información sobre ${title} | Pokemon App}`}
        />
        <meta
          property="og:description"
          content={`Esta es la página de información de ${title}`}
        />
        <meta
          property="og:image"
          content={`${origin}/imgs/banner.png`}
        />
      </Head>
      <Navbar />
      <main
        style={{
          padding: "0px 20px",
        }}
      >
        {children}
      </main>
    </>
  );
};
