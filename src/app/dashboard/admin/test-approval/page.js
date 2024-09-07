"use client";

import React, { useState, useEffect } from 'react';
import { DataTablePlain } from '@/components';
import { faEye, faEdit, faTrash, faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from 'next/link';
import { getPendingTest, updateTestStatus } from '@/actions';

const columns = (handleApprove, handleDisapprove) => [
  {
    name: 'Test Name',
    selector: row => row.test_name,
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
        className={`px-2 py-1 rounded text-white ${row.status === 'confirmed' ? 'bg-green-500' : 'bg-red-500'}`}
      >
        {row.status === 'confirmed' ? 'Approved' : 'Pending'}
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
          className={`text-green-500 hover:text-green-700 ${row.status === 'confirmed' ? 'cursor-not-allowed' : 'cursor-pointer'}`}
          onClick={() => handleApprove(row)}
          disabled={row.status === 'confirmed'}
        >
          <FontAwesomeIcon icon={faCheck} title="Approve" />
        </button>
        <button
          className={`text-red-500 hover:text-red-700 ${row.status !== 'confirmed' ? 'cursor-not-allowed' : 'cursor-pointer'}`}
          onClick={() => handleDisapprove(row)}
          disabled={row.status !== 'confirmed'}
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
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const testData = await getPendingTest();
      setData(testData);
      console.log('Fetched data:', testData);
    };

    fetchData();
  }, []);

  // Filter data based on search query
  const filteredData = data.filter(item =>
    (item.test_name?.toLowerCase() || '').includes(searchQuery.toLowerCase()) ||
    (item.category?.toLowerCase() || '').includes(searchQuery.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleApprove = async (row) => {
    const response = await updateTestStatus(row.id, 'confirmed');
    if (response.success) {
      setData(prevData =>
        prevData.map(item =>
          item.id === row.id ? { ...item, status: 'confirmed' } : item
        )
      );
      console.log('Approve clicked for row:', row);
    } else {
      console.error(response.message);
    }
  };

  const handleDisapprove = async (row) => {
    const response = await updateTestStatus(row.id, 'pending');
    if (response.success) {
      setData(prevData =>
        prevData.map(item =>
          item.id === row.id ? { ...item, status: 'pending' } : item
        )
      );
      console.log('Disapprove clicked for row:', row);
    } else {
      console.error(response.message);
    }
  };

  return (
    <div className="p-6">
      <DataTablePlain
        rows={filteredData}
        columns={columns(handleApprove, handleDisapprove)}
        title="Approve Tests"
        isLoading={false}
        onSearch={handleSearch}
      />
    </div>
  );
};

export default Page;
