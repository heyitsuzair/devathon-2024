import React from "react";
import { ButtonIcon } from "../buttons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const DeleteIcon = ({ onClickDelete = (null) }) => {
  return (
    <ButtonIcon
      icon={faTrash}
      color="bg-red-500"
      isRounded
      text="Delete"
      width="w-24"
      height="h-8"
      onClick={onClickDelete}
    />
  );
};

export default DeleteIcon;
