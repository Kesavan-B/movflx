import { Container } from '@mui/system'
import React from 'react'
import { Box,Grid,Button } from "@mui/material";
import { Moviecrd } from './Moviecrd';

export const Onlines = () => {
  return (
    <div className='Onlines'>
      <Container>
        <Box>
            <div>
            <div className="up-titles">
            <h5>ONLINE STREAMING</h5>
            <h1>Upcoming Movies</h1>
          </div>
            </div>
            <Grid item sm={12} lg={12} md={12} sx={{ textAlign: "center" }}>
              {["Tv shows", "documentry", "movies", "sports"].map(
                (e, index) => (
                  <Button
                    variant="outlined"
                    size="large"
                    
                    sx={{
                      borderColor: " #e4d804",
                      background:"rgb(0 0 0 / 77%)",
                      color: "#fff",
                      fontSize: "12px",
                      fontWeight: "600",
                      padding: "8px 25px",
                      marginRight: "20px",
                      marginTop: "20px",
                      marginBottom:"25px"
                    }}
                  >
                    {e}
                  </Button>
                )
              )}
            </Grid>
            <Moviecrd/>
        </Box>
      </Container>
    </div>
  )
}
