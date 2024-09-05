import React from "react";
import { DeleteIcon, ViewIcon } from ".";

const ActionsWrapper = ({
  onClickDelete = null,
  onClickView = null,
  isViewDisabled = false,
}) => {
  return (
    <div className="flex items-center gap-2">
      {onClickView && (
        <ViewIcon isViewDisabled={isViewDisabled} onClickView={onClickView} />
      )}
      {onClickDelete && <DeleteIcon onClickDelete={onClickDelete} />}
    </div>
  );
};

export default ActionsWrapper;
