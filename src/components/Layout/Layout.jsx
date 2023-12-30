import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";

const Layout = ({ children,title,description,keyword,author }) => {
  return (
    <div className="layout">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keyword} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title:'MusiCart - Shop the Music',
  description:'Explore a world of musical possibilities with our MERN stack music devices shopping platform. Discover top-quality instruments, audio equipment, and accessories. From guitars to synthesizers, find your perfect gear. Shop now for an immersive musical experience.',
  keyword:'music instruments, audio equipment,mern stack,ecommerce, synthesizers, headphones,',
  author:'Rahul Singh - NIT RAIPUR'
}

export default Layout;
