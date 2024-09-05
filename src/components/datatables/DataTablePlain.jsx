"use client";

import React from "react";
import DataTable from "react-data-table-component";
import { SpinnerSmall } from "../spinners";
import { InputPlain } from "../inputs";

const DataTablePlain = ({
  rows = [],
  columns = [],
  title = "",
  isLoading = false,
  onSearch = null,
}) => {
  return (
    <>
      {onSearch && (
        <div className="md:w-1/4 ml-auto">
          <InputPlain placeholder="Search" onChange={onSearch} label="Search" />
        </div>
      )}
      <DataTable
        title={title}
        highlightOnHover
        progressPending={isLoading}
        progressComponent={<SpinnerSmall />}
        pagination={true}
        striped
        columns={columns}
        data={rows}
      />
    </>
  );
};

export default DataTablePlain;
