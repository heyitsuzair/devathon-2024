"use client";

import React, { useState } from 'react';
import { DataTablePlain } from '@/components';
import { faEye, faEdit, faTrash, faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from 'next/link';

const dummyData = [
  { id: 1, name: 'Item 1', category: 'MDCAT', approved: false },
  { id: 2, name: 'Item 2', category: 'ECAT', approved: false },
  { id: 3, name: 'Item 3', category: 'NTS', approved: true },
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
    name: 'Status',
    cell: row => (
      <span
        className={`px-2 py-1 rounded text-white ${row.approved ? 'bg-green-500' : 'bg-red-500'}`}
      >
        {row.approved ? 'Approved' : 'Not Approved'}
      </span>
    ),
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
  {
    name: 'Approval',
    cell: row => (
      <div className="flex space-x-2">
        <button
          className={`text-green-500 hover:text-green-700 ${row.approved ? 'cursor-not-allowed' : 'cursor-pointer'}`}
          onClick={() => handleApprove(row)}
          disabled={row.approved}
        >
          <FontAwesomeIcon icon={faCheck} title="Approve" />
        </button>
        <button
          className={`text-red-500 hover:text-red-700 ${!row.approved ? 'cursor-not-allowed' : 'cursor-pointer'}`}
          onClick={() => handleDisapprove(row)}
          disabled={!row.approved}
        >
          <FontAwesomeIcon icon={faTimes} title="Disapprove" />
        </button>
      </div>
    ),
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  },
  {
    name: 'View Ratings',
    cell: row => (
      <Link href={`/ratings/${row.id}`} className="text-blue-500 hover:underline">
        View Ratings
      </Link>
    ),
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  },
];

const Page = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [data, setData] = useState(dummyData);

  // Filter data based on search query
  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleApprove = (row) => {
    // Update the approval status in the data
    setData(prevData =>
      prevData.map(item =>
        item.id === row.id ? { ...item, approved: true } : item
      )
    );
    console.log('Approve clicked for row:', row);
  };

  const handleDisapprove = (row) => {
    // Update the disapproval status in the data
    setData(prevData =>
      prevData.map(item =>
        item.id === row.id ? { ...item, approved: false } : item
      )
    );
    console.log('Disapprove clicked for row:', row);
  };

  return (
    <div className="p-6">
      <DataTablePlain
        rows={filteredData}
        columns={columns}
        title="Approve Tests"
        isLoading={false}
        onSearch={handleSearch}
      />
    </div>
  );
};

export default Page;
