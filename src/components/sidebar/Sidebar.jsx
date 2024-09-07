"use client";
import React from "react";
import Link from "next/link";
import { faCheck, faDoorOpen, faGear, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { routes } from "@/config";

const Sidebar = () => {
  const navItems = [
    { label: "Dashboard", href: routes.dashboard.admin.index, icon: faHome },
    { label: "Test Approval", href: routes.dashboard.admin.testApproval, icon: faCheck },
    { label: "Users", href: routes.dashboard.admin.index, icon: faUser },
    { label: "Settings", href:routes.dashboard.admin.index, icon: faGear },
  ];

  return (
    <div className="h-screen bg-gray-800 text-white w-64 flex flex-col">
      {/* Sidebar Header */}
      <div className="flex items-center justify-center h-16 bg-gray-900">
        <h1 className="text-2xl font-semibold">Admin Panel</h1>
      </div>

      {/* Sidebar Items */}
      <nav className="flex flex-col flex-grow">
        {navItems.map((item) => (
          <Link key={item.label} href={item.href} className="flex items-center py-3 px-4 hover:bg-gray-700">
            <span className="text-lg"><FontAwesomeIcon icon={item.icon} /></span>
            <span className="ml-4">{item.label}</span>
          </Link>
        ))}
      </nav>

      <div className="flex items-center justify-center py-3 px-4 bg-gray-900 hover:bg-gray-700">
        <FontAwesomeIcon icon={faDoorOpen} />
        <span className="ml-4">Logout</span>
      </div>
    </div>
  );
};

export default Sidebar;
