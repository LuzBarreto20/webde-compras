import { Grid } from "@mui/material";
import { Component } from "react";
import Producto from "./Producto";

const styles = {
  productos: {
    display: "flex",
    flexflow: "row wrap",
    justifyContent: "space-between",
  },
};

export const Productos = ({ productos, agregarAlCarro }) => {

  return (
    <div>
      <Grid container spacing={8}  >
        {productos.map((producto) => (
          <Producto
            agregarAlCarro={agregarAlCarro}
            key={producto.name}
            producto={producto}
          />
        ))}
      </Grid>
    </div>
  );
};

export default Productos;
