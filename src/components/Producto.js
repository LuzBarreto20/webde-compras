import { Component } from "react";
import { Grid, Item } from "@mui/material";
import { makeStyles } from '@material-ui/core/styles';

import Button from "./Button";

const styles = {
  producto: {
    border: "solid 1px #eee",
    boxShadow: "0 5px 5px rgba(0,0,0,0.1) ",
     width: "auto",
    padding: "10px 15px",
    borderRadius: "5px",
    margin: "10px",
    backgroundColor: "red",
    
  },
  img: {
    width: "100%",
    height: "350px",
    objectFit: 'cover',
  },

};

const ProductoStyles = makeStyles({
  container: {
   /*display: 'flex',
    flexDirection: 'row',*/
    /*boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.25)',*/
    background: 'blue',
    /*padding: '16px',
    margin: '20px',
    width: '40px',*/
    border: '1px solid lightGrey',
    width:'250px',
    minHeight: '350px',

  },
});




export const Producto = ({agregarAlCarro, producto}) => {
  const classes = ProductoStyles();
  
    return (
      <Grid  /*className={classes.container}*/ item xl={3}> 
       <Grid xs={8}>
          <p>xs=8</p>
        </Grid>
        <Grid item xs={4}>
          <p>xs=4</p>
        </Grid>
       
        

        {/*  <img   alt={producto.name} src={producto.img} style={styles.img} /> 
        <h3>{producto.name} </h3>
        <p>{producto.price} </p>
        <Button onClick={() => agregarAlCarro(producto)}>
          Agregar al Carro
        </Button>
         */}
      </Grid>
    );
  }

export default Producto;
