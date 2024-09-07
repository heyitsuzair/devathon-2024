import { Grid, TestCard } from "@/components";
import React from "react";

const Tests = ({ tests }) => {
  return (
    <Grid>
      {tests.map((test) => (
        <div className="col-span-12 md:col-span-6 lg:col-span-3">
          <TestCard test={test} />
        </div>
      ))}
    </Grid>
  );
};

export default Tests;
