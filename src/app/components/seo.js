import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";

const Seo = ({ description, meta, title }) => {
  const defaultTitle = "Your Site Name"; // Replace with your site title
  const defaultDescription = "Your site description"; // Replace with your default description
  const author = "Your Name"; // Replace with author

  const metaDescription = description || defaultDescription;

  return (
    <Head>
      <title>{title ? `${title} | ${defaultTitle}` : defaultTitle}</title>

      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={author} />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta name="twitter:description" content={metaDescription} />

      {meta &&
        meta.map((m, i) => (
          <meta key={i} {...m} />
        ))}
    </Head>
  );
};

Seo.defaultProps = {
  meta: [],
  description: "",
};

Seo.propTypes = {
  description: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default Seo;
