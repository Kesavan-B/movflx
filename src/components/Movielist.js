import {React,useState,useEffect} from "react";
import { Grid } from "@mui/material";
import { Carddatas } from "./Carddatas";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { AiOutlineClockCircle, AiOutlineLike } from "react-icons/ai";
import { useParams } from "react-router-dom";

export const Movielist = () => {
  const [select, setSelect] = useState({});
  let { name } = useParams();
  useEffect(() => {
    let b = Carddatas.filter((e) => (e.title) === name);
  
    setSelect(b[0])
    console.log(b[0])
  }, // eslint-disable-next-line
  []);

  return (
    <div>
      <Grid item sm={6} md={3} lg={3} >
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
              image={select && select.imag}
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
                  {select && select.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#e4d804", fontWeight: "600" }}
                >
                  {select && select.year}
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
                  {select && select.type}
                </Typography>
                <div className="details-dur">
                  <Typography variant="body2">
                    <span className="ions">
                      <AiOutlineClockCircle />
                    </span>{" "}
                    {select && select.dur}
                  </Typography>
                  <Typography variant="body2">
                    <span className="ions">
                      <AiOutlineLike />
                    </span>{" "}
                    {select && select.likes}
                  </Typography>
                </div>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </div>
  );
};
