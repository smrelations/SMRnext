import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";

import Header from "./header";
import Footer from "./footer";

const Layout = ({ children, siteTitle = "SMR Relations" }) => {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Head for meta/scripts */}
      <Head>
        <title>{siteTitle}</title>
        <script src="https://apis.google.com/js/api.js" async defer />
      </Head>

      <Header siteTitle={siteTitle} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  siteTitle: PropTypes.string,
};

export default Layout;
