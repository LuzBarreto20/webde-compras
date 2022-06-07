import { Component } from "react";
import { Grid, Item } from "@mui/material";
import Box from "@mui/material/Box";

import { makeStyles } from "@material-ui/core/styles";

import { Button, Typography } from "@material-ui/core";

const ProductoStyles = makeStyles({
  container: {
    borderRadius: 8,
    boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
    width: "300px",
    minHeight: "350px",
    overflow: "hidden",
  },
  containerBotton: {
    padding: "14px",
  },
  img: {
    width: "100%",
    height: "350px",
    objectFit: "cover",
  },
});

export const Producto = ({ agregarAlCarro, producto }) => {
  const classes = ProductoStyles();

  return (
    <Grid item xs={12} sm={6} md={3} xl={3}>
      <Box className={classes.container}>
        <img alt={producto.name} src={producto.img} className={classes.img} />
        <Grid
          container
          flexDirection="column"
          className={classes.containerBotton}
        >
          <Grid
            container
            pb="12px"
            flexDirection="row"
            justifyContent="space-between"
          >
            <Grid item>
              <Typography style={{ fontWeight: 400, fontSize: 18 }}>
                {producto.name}{" "}
              </Typography>
            </Grid>
            <Grid item>
              <Typography style={{ fontWeight: 800, fontSize: 18 }}>
                {" "}
                {producto.price} $
              </Typography>
            </Grid>
          </Grid>
          <Button
            style={{ background: "rgba(145, 195, 0, 0.9)" }}
            onClick={() => agregarAlCarro(producto)}
            variant="contained"
            size="small"
          >
            Agregar al Carro
          </Button>
        </Grid>
      </Box>
    </Grid>
  );
};

export default Producto;
