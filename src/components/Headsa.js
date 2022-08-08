import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { LOGOS } from "../assests/Imgdata";
import { FaSearch } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";
import { Headcont } from "./Headcont";
import { AiOutlineDown } from "react-icons/ai";
import { Divider } from "@mui/material";

const pages = ["HOMEONE", "MOVIE", "TV SHOW", "PRICING", "BLOG", "CONTACTS"];

export const Headsa = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div className="banner">
      <Container maxWidth="xl">
        <AppBar
          position="static"
          sx={{ padding: "25px 0px", background: "none", boxShadow: "none" }}
        >
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <img
                src={LOGOS}
                alt="logos"
                sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
              />
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <img
                src={LOGOS}
                alt="logos"
                sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
              />
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex", justifyContent: "center" },
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    padding: "0px 25px",
                    fontWeight: "800",
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Box
              className="signup-conts"
              sx={{
                flexGrow: 1,
                display: {
                  xs: "none",
                  md: "flex",
                  justifyContent: "end",
                  alignItems: "center",
                },
              }}
            >
              <FaSearch style={{ fontSize: "18px" }} />
              <Divider orientation="vertical" variant="middle" sx={{color:'yellow'}}/>
              <div className="globe-menu">
                <Button sx={{ padding: "0px", color: "#fff" }}>
                  <FiGlobe
                    style={{
                      marginLeft: "15px",
                      color: "#e4d804",
                      fontSize: "18px",
                    }}
                  />
                  En <AiOutlineDown style={{ marginLeft: "15px" }} />{" "}
                </Button>
              </div>
              <Button
                variant="outlined"
                className="appbar-sign"
                sx={{
                  marginLeft: "15px",
                  padding: "10px 30px",
                  borderColor: "#e4d804",
                  borderRadius: "25px",
                  color: "#fff",
                  fontWeight:"700"
                }}
              >
                sign In
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Container>
      <Headcont />
    </div>
  );
};
