"use client";

import React, { useState } from "react";
import { DataTablePlain } from '@/components';
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const dummyInstructors = [
  { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', approved: true },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '098-765-4321', approved: false },
  { id: 3, name: 'Emily Johnson', email: 'emily@example.com', phone: '555-555-5555', approved: true },
  // Add more rows as needed
];

const columns = [
  {
    name: 'Instructor Name',
    selector: row => row.name,
    sortable: true,
  },
  {
    name: 'Email',
    selector: row => row.email,
    sortable: true,
  },
  {
    name: 'Phone Number',
    selector: row => row.phone,
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
    name: 'Actions',
    cell: row => (
      <div className="flex space-x-2">
        <button className="text-green-500 hover:text-green-700">
          <FontAwesomeIcon icon={faCheck} title="Approve" />
        </button>
        <button className="text-red-500 hover:text-red-700">
          <FontAwesomeIcon icon={faTimes} title="Disapprove" />
        </button>
      </div>
    ),
  },
];

const Page = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter data based on search query
  const filteredData = dummyInstructors.filter(instructor =>
    instructor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    instructor.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    instructor.phone.includes(searchQuery)
  );

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="p-6">
      <DataTablePlain
        rows={filteredData}
        columns={columns}
        title="Approve Instructors"
        isLoading={false}
        onSearch={handleSearch}
      />
    </div>
  );
};

export default Page;
