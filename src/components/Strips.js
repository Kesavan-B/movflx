import React from "react";
import { Box,Button } from "@mui/material";

export const Strips = () => {
  return (
    <div className="Strips">
      <Box className="trial">
        <div className="trial-cont">
        <h2 style={{margin:'0px'}}>TRIAL START FIRST 30 DAYS</h2>
        <p>Enter Your email to create or restart your membership</p>
      </div>
      <div className="labels">
        <form>
        <input type="email" placeholder="Enter your email" style={{width:'30ch',padding:'19px'}}/>
        <Button variant="contained" sx={{color:'#e4d804',background:'#171d22',fontWeight:'600',padding:'15.5px',borderRadius:'0px'}}>get started</Button>
        </form>
      </div>
      </Box>
    </div>
  );
};
