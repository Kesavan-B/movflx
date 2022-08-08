import React from "react";
import { Download } from "./Download";
import { Footers } from "./Footers";
import { Headsa } from "./Headsa";
import { Onlines } from "./Onlines";
import { Strips } from "./Strips";
import { Upcoming } from "./Upcoming";
import { White } from "./White";
import { Worldbest } from "./Worldbest";

export const Total = () => {
  return (
    <div>
      <Headsa />
      <Upcoming />
      <Download />
      <Onlines />
      <White />
      <Worldbest />
      <Strips />
      <Footers />
    </div>
  );
};
