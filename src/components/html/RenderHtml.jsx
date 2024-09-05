import React from "react";

const RenderHtml = ({ html }) => {
  return <div dangerouslySetInnerHTML={{ __html: html }}></div>;
};

export default RenderHtml;
