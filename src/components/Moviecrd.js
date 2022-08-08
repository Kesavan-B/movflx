import { React,} from "react";
import { Grid } from "@mui/material";
import { Carddatas } from "./Carddatas";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { AiOutlineClockCircle, AiOutlineLike } from "react-icons/ai";
import {Link} from "react-router-dom"

export const Moviecrd = () => {
  return (
    <div className="Moviecrd">
      
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContenet="center"
        spacing={2}
        width="100%"
        sx={{ paddingBottom: "100px" }}
      >
        {Carddatas &&
          Carddatas.map((e, index) => {
            let url=(e.title)
            console.log(url)
            return (
             
              <Grid item sm={6} md={3} lg={3} key={index} >
                <Link to={`/home/${url}`}>
                <Card
                  sx={{
                    maxWidth: 345,
                    borderRadius: "8px",
                    background: "none",
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image={e.imag}
                      alt="movies"
                      sx={{ borderRadius: "0px" }}
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
                </Link>
              </Grid>
             
            );
          })}
      </Grid>
    </div>
  );
};
