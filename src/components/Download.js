import { Container } from "@mui/system";
import React from "react";
import {  Grid } from "@mui/material";
import { HD } from "../assests/Imgdata";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import VideocamIcon from "@mui/icons-material/Videocam";

export const Download = () => {
  return (
    <div className="download">
      <Container>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={6}
          sx={{ paddingBottom: "50px" }}
        >
          <Grid
            item
            lg={6}
            md={6}
            sm={12}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <img src={HD} alt="4k" style={{ width: "100%" }} />
          </Grid>
          <Grid item lg={6} md={6} sm={12}>
            <div className="service">
              <div className="divs">
                <span></span>
                <p>OUR SERVICES</p>
              </div>
              <div className="offline">
                <h1>Download Your Shows Watch Offline.</h1>
                <p>
                  Lorem ipsum dolor sit amet, consecetur adipiscing elseddo
                  eiusmod tempor.There are many variations of passages of lorem
                  Ipsum available, but the majority have suffered alteration in
                  some injected humour.
                </p>
              </div>
              <div className="full-menu">
                <div className="enjoy">
                  <LiveTvIcon
                  className="appbar-sign"
                    sx={{
                      border: "1px dashed #e4d804",
                      padding: "30px",
                      borderRadius: "50px",
                      fontSize: "35px",
                    }}
                  />
                  <div
                    className="enjoy-contents"
                    style={{ borderBottom: "1px dashed #38373c" }}
                  >
                    {" "}
                    <h3>Enjoy on Your TV.</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consecetur adipiscing elit,
                      sed do eiusmod tempor.
                    </p>
                  </div>
                </div>

                <div className="enjoy">
                  <VideocamIcon
                  className="appbar-sign"
                    sx={{
                      border: "1px dashed #e4d804",
                      padding: "30px",
                      borderRadius: "50px",
                      fontSize: "35px",
                    }}
                  />
                  <div className="enjoy-contents">
                    {" "}
                    <h3>Watch Everywhere.</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consecetur adipiscing elit,
                      sed do eiusmod tempor.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
