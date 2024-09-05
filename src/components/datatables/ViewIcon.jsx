import React from "react";
import { ButtonIcon } from "../buttons";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const ViewIcon = ({ onClickView = null, isViewDisabled = false }) => {
  return (
    <ButtonIcon
      icon={faEye}
      color="bg-blue-500"
      isRounded
      text="View"
      width="w-24"
      height="h-8"
      onClick={onClickView}
      isDisabled={isViewDisabled}
    />
  );
};

export default ViewIcon;
