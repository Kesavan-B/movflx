import React from "react";
import { Box } from "@mui/system";
import { Button, Container, Grid } from "@mui/material";
import { BsFillPlayFill, BsCalendar, BsClock } from "react-icons/bs";

export const Headcont = () => {
  return (
    <Box className="Headcont" sx={{ color: "#fff", padding: "130px 5px" }}>
      <Container maxWidth="xl">
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="flex-start"
        spacing={2}
      >
        <Grid item xl={5} lg={5} md={5} sx={12} className="contents">
          <h2>Movflx</h2>
          <h1>
            Unlimited <span>Movie</span>, TVs Shows, & More.
          </h1>
          <div className="category">
            <div className="pg">
              <p>PG18</p>
            </div>
            <div className="hd">
              <p>HD</p>
            </div>
            <div className="drama">
              <p>Romance, Drama</p>
            </div>
            <div className="year">
              <p>
                <span>
                  <BsCalendar />
                </span>
                2022
              </p>
            </div>
            <div className="duration">
              <p>
                <span>
                  <BsClock />
                </span>
                128 min
              </p>
            </div>
          </div>
          <Button
            variant="outlined"
            size="large"
            startIcon={<BsFillPlayFill />}
            className="appbar-sign"
            sx={{
              borderColor: " #e4d804",
              borderRadius: "30px",
              color: "#fff",
              fontSize: "12px",
              fontWeight: "600",
              padding: "12px 20px",
            }}
          >
            Watch now
          </Button>
        </Grid>
      </Grid>
      </Container>
    </Box>
  );
};
