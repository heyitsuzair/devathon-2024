"use client";

import React, { useState, useEffect } from "react";
import { DataTablePlain } from '@/components';
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getPendingInstructor, updateInstructorStatus } from '@/actions';  // Import your server actions here

const columns = (handleApprove, handleDisapprove) => [
  {
    name: 'Instructor Name',
    selector: row => `${row.first_name} ${row.last_name}`, // Concatenate first and last name
    sortable: true,
  },
  {
    name: 'Email',
    selector: row => row.email_address, // Updated to use email_address
    sortable: true,
  },
  {
    name: 'Phone Number',
    selector: row => row.phone_number, // Updated to use phone_number
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
    name: 'Actions',
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
  },
];

const Page = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [data, setData] = useState([]);

  // Fetch pending instructors on component mount
  useEffect(() => {
    const fetchData = async () => {
      const instructorData = await getPendingInstructor();
      setData(instructorData);
      console.log('Fetched instructors:', instructorData);  // Log data for debugging
    };

    fetchData();
  }, []);

  // Filter data based on search query
  const filteredData = data.filter(instructor =>
    (`${instructor.first_name} ${instructor.last_name}`.toLowerCase().includes(searchQuery.toLowerCase()) ||
    instructor.email_address.toLowerCase().includes(searchQuery.toLowerCase()) ||
    instructor.phone_number.includes(searchQuery))
  );

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleApprove = async (row) => {
    const response = await updateInstructorStatus(row.id, 'confirmed');
    if (response.success) {
      setData(prevData =>
        prevData.map(item =>
          item.id === row.id ? { ...item, status: 'confirmed' } : item
        )
      );
      console.log('Approved instructor:', row);
    } else {
      console.error('Error approving instructor:', response.message);
    }
  };

  const handleDisapprove = async (row) => {
    const response = await updateInstructorStatus(row.id, 'pending');
    if (response.success) {
      setData(prevData =>
        prevData.map(item =>
          item.id === row.id ? { ...item, status: 'pending' } : item
        )
      );
      console.log('Disapproved instructor:', row);
    } else {
      console.error('Error disapproving instructor:', response.message);
    }
  };

  return (
    <div className="p-6">
      <DataTablePlain
        rows={filteredData}
        columns={columns(handleApprove, handleDisapprove)}
        title="Approve Instructors"
        isLoading={false}
        onSearch={handleSearch}
      />
    </div>
  );
};

export default Page;
