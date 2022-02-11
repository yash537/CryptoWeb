import { makeStyles,Container, Typography } from '@material-ui/core';
import React from 'react';
import CarouselSlider from './Carousel';
import BannerImg from "F:/cryptocounter/cryptohunter/src/assests/BG.jpg"
const useStyles = makeStyles(()=>({
    banner:{
        backgroundImage:`url(${BannerImg})`,
    },
    bannerContent:{
      height:400,
      display:"flex",
      flexDirection:"column",
      paddingTop:25,
      justifyContent:"space-around"
    },
    tagline:{
      display:"flex",
      height:"40%",
      flexDirection:"column",
      justifyContent:"center",
      textAlign:"center"
    }
}))

const Banner = () => {

  const classes=useStyles();
  return (
    <div className={classes.banner}>
    <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
          <Typography
          variant="h2"
          style={{
            fontWeight:"bold",
            marginBottom:15,
            fontFamily:"Montserrat"
          }}
          >
            Crypto Hunter
          </Typography>
          <Typography
          variant="subtitle2"
          style={{
            color:"darkgrey",
            textTransform:"capitalize",
            fontFamily:"Montserrat"
          }}
          >
            Get all the Info regarding your favourite Crypto currency
          </Typography>
          <CarouselSlider />
        </div>
    </Container>
    </div>
  );

};

export default Banner;
