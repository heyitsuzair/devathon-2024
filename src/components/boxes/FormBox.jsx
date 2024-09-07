import React from "react";
import { SpinnerLarge } from "../spinners";

const FormBox = ({ isLoading = false, children }) => {
  return isLoading ? (
    <div className="h-[80vh] flex items-center justify-center">
      <SpinnerLarge />
    </div>
  ) : (
    children
  );
};

export default FormBox;
