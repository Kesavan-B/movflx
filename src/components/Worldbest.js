import { Box, Container } from "@mui/system";
import React from "react";
import { Worlddatas } from "./Worlddatas";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { AiOutlineClockCircle, AiOutlineLike } from "react-icons/ai";

export const Worldbest = () => {
  return (
    <div className="down">
      <Container sx={{paddingBottom:'20px'}}>
        <Box>
          <div>
            <div className="up-titles">
              <p>BEST TV SERIES</p>
              <h1>World Best TV Series</h1>
            </div>
            <Grid
              container
              direction="row"
              alignItems="center"
              justifyContenet="center"
              spacing={2}
              margin="auto"
              width="100%"
              sx={{ paddingBottom: "100px" }}
            >
              {Worlddatas &&
                Worlddatas.map((e, index) => {
                  return (
                    <Grid item sm={6} md={3} lg={3} key={index}>
                      <Card
                        sx={{
                          maxWidth: 345,
                          borderRadius: "0px",
                          background: "none",
                          boxShadow:"none"
                        }}
                      >
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            image={e.imag}
                            alt="movies"
                            sx={{ borderRadius: "10px" }}
                          />
                          <CardContent sx={{ padding: "10px 0px" }}>
                            <div className="tit-year">
                              <Typography
                                gutterBottom
                                variant="body2"
                                component="div"
                                sx={{ fontWeight: "600" }}
                              >
                                {e.title}
                              </Typography>
                              <Typography
                                variant="body2"
                                sx={{ color: "#e4d804", fontWeight: "600" }}
                              >
                                {e.year}
                              </Typography>
                            </div>
                            <div className="details">
                              <Typography
                                gutterBottom
                                variant="body2"
                                component="div"
                                sx={{
                                  color: "#e4d804",
                                  border: "2px solid #fff",
                                  padding: "2px 8px",
                                  fontSize: "11px",
                                  fontWeight: "600",
                                }}
                              >
                                {e.type}
                              </Typography>
                              <div className="details-dur">
                                <Typography variant="body2">
                                  <span className="ions">
                                    <AiOutlineClockCircle />
                                  </span>{" "}
                                  {e.dur}
                                </Typography>
                                <Typography variant="body2">
                                  <span className="ions">
                                    <AiOutlineLike />
                                  </span>{" "}
                                  {e.likes}
                                </Typography>
                              </div>
                            </div>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grid>
                  );
                })}
            </Grid>
          </div>
        </Box>
      </Container>
    </div>
  );
};
