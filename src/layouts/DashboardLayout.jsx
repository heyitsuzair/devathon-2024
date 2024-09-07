import { Grid } from "@/components";
import Sidebar from "@/components/sidebar/Sidebar";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <Grid>
      <div className="col-span-3">
        <Sidebar />
      </div>
      <div className="col-span-9">{children}</div>
    </Grid>
  );
};

export default DashboardLayout;
