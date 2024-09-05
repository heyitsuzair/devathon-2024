"use client";

import React from "react";

import Moment from "react-moment";

const CreatedAt = ({ children }) => {
  return <Moment fromNow>{children}</Moment>;
};

export default CreatedAt;
