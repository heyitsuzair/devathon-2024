"use client";

import React from "react";

import Moment from "react-moment";

const UpdatedAt = ({ children }) => {
  return <Moment fromNow>{children}</Moment>;
};

export default UpdatedAt;
