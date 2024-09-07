"use client";

import { DataTablePlain } from '@/components';
import React from 'react';
import { faEye, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const dummyData = [
  { id: 1, name: 'Item 1', category: 'MDCAT' },
  { id: 2, name: 'Item 2', category: 'ECAT' },
  { id: 3, name: 'Item 3', category: 'NTS' },
  // Add more rows as needed
];

const columns = [
  {
    name: 'Test Name',
    selector: row => row.name,
    sortable: true,
  },
  {
    name: 'Category',
    selector: row => row.category,
    sortable: true,
  },
  {
    name: 'View',
    cell: row => (
      <FontAwesomeIcon
        icon={faEye}
        className="text-blue-500 cursor-pointer"
        title="View"
      />
    ),
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  },
  {
    name: 'Edit',
    cell: row => (
      <FontAwesomeIcon
        icon={faEdit}
        className="text-green-500 cursor-pointer"
        title="Edit"
      />
    ),
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  },
  {
    name: 'Delete',
    cell: row => (
      <FontAwesomeIcon
        icon={faTrash}
        className="text-red-500 cursor-pointer"
        title="Delete"
      />
    ),
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  },
];

const Page = () => {
  const handleSearch = (e) => {
    console.log('Search query:', e.target.value);
  };

  return (
    <div className="">
      <DataTablePlain
        rows={dummyData}
        columns={columns}
        title="Dummy Data Table"
        isLoading={false} // Change to true if loading state is needed
        onSearch={handleSearch}
      />
    </div>
  );
};

export default Page;
