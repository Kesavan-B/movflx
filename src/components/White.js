import React from "react";
import { Grid,Button} from "@mui/material";
import { Container } from "@mui/system";
import { BsFillPlayFill } from "react-icons/bs";
import { PERSON } from "../assests/Imgdata";

export const White = () => {
  return (
    <div className="White">
      <Container>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={2}
        sx={{paddingTop:'50px'}}
      >
        <Grid item lg={5} md={5} sm={12}>
          <div className="live">
            <div className="divs">
              <span></span>
              <p>ONLINE STREAMING</p>
            </div>
            <div className="shows">
              <h1>Live Movie & TV Shows For Friends & Family</h1>
              <p>
                Lorem ipsum dolor sit amet, consecetur adipiscing elseddo
                eiusmod There are many variations of passages of lorem Ipsum
                available, but the majority have suffered alteration.
              </p>
            </div>
            <div className="active">
              <h1 style={{textShadow:'-1px 0 #d81c2b, 1px 1px #d81c2b, 2px 1px red, 1px -1px #d81c2b',color:'#fff',fontSize:'50px'}}>HD 4K</h1>
              <div className="plus">
               <h1 style={{textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black',margin:'0',paddingLeft:'12px'}}> 20K+ <br/><span style={{textShadow:'none',fontSize:'16px'}}>Active Customer</span></h1>
              </div>
            </div>
            <Button
            variant="outlined"
            size="large"
            startIcon={<BsFillPlayFill />}
            className="online-signs"
            sx={{
              border: "none",
              borderRadius: "30px",
              color: "#000",
              fontSize: "12px",
              fontWeight: "600",
              padding: "12px 30px",
              background:'#e4d804',
              className:"watch"
            }}
          >
            Watch now
          </Button>
          </div>
        </Grid>
        <Grid item lg={7} md={7} sm={12}>
          <div className="persons"> 
         <img src={PERSON} alt="persons" style={{width:'100%'}}/>
         </div>
        </Grid>
      </Grid>
      </Container>
    </div>
  );
};
