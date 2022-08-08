import { Divider, Grid } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { LOGOS, SPON } from "../assests/Imgdata";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(1)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "20ch",
      "&:focus": {
        width: "30ch",
      },
    },
  },
}));

export const Footers = () => {
  return (
    <div className="Footers">
      <Container>
        <div className="overall-footers">
          <Box className="all-foot-menu">
            <div className="foot-logo">
              <img src={LOGOS} alt="logos" />
            </div>
            <div className="foot-menus">
              {["HOME", "MOVIE", "TV SHOW", "PAGES", "PRICING"].map(
                (e, index) => (
                  <ul key={index}>
                    <li>{e}</li>
                  </ul>
                )
              )}
              <Grid>
                <Search sx={{ display: "flex", alignItems: "center" }}>
                  <SearchIconWrapper></SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Find Favorite Movie"
                    inputProps={{ "aria-label": "search" }}
                  />
                  <SearchIcon />
                </Search>
              </Grid>
            </div>
          </Box>
          <Divider />
          <Box className="social-media">
            <div className="social-menus">
              {["FAQ", "HELP CENTER", "TERMS OF USE", "PRIVACY"].map(
                (a, index) => (
                  <ul key={index}>
                    <li>{a}</li>
                  </ul>
                )
              )}
            </div>
            <div className="social-icons"></div>
          </Box>
        </div>
      </Container>
      <div className="copyrights">
        <Container>
          <div className="sponsers">
            <div>
              <p>
                Copyright © 2022. All Rights Reserved By{" "}
                <span style={{ color: "#e4d804" }}>Movflx</span>
              </p>
            </div>
            <div className="soc-pay">
              <img src={SPON} alt="spon" style={{width:'100%'}}/>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};
