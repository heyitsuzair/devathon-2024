import { Grid } from "@/components";
import Sidebar from "@/components/sidebar/Sidebar";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <Grid alignItems="items-start">
      <div className="col-span-3">
        <Sidebar />
      </div>
      <div className="col-span-9 p-5">{children}</div>
    </Grid>
  );
};

export default DashboardLayout;
