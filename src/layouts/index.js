import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import siteData from "../siteData";

import "./index.css";

const TemplateWrapper = ({ children }) =>
  <div>
    <Helmet title={siteData.title} meta={siteData.meta} />
    {children()}
  </div>;

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
