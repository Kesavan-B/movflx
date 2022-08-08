import React from "react";
import { Grid, Box, Button } from "@mui/material";
import { Container } from "@mui/system";
import { Moviecrd } from "./Moviecrd";

export const Upcoming = () => {
  return (
    <div className="Upcoming">
      <Container>
        <Box>
          <div className="up-title">
            <h5>ONLINE STREAMING</h5>
            <h1>Upcoming Movies</h1>
          </div>
          <Grid
            container
            directon="row"
            alignItems="center"
            justifyContent="center"
            spacing={2}
          >
            <Grid item sm={12} lg={12} md={12} sx={{ textAlign: "center" }}>
              {["Tv shows", "documentry", "movies", "sports"].map(
                (e, index) => (
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{
                      borderColor: " #e4d804",
                      borderRadius: "30px",
                      color: "#fff",
                      fontSize: "12px",
                      fontWeight: "600",
                      padding: "8px 25px",
                      marginRight: "20px",
                      marginTop: "20px",
                    }}
                  >
                    {e}
                  </Button>
                )
              )}
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Container>
      <Moviecrd/>
      </Container>
    </div>
  );
};
