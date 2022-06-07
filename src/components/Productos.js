import Box from '@mui/material/Box';
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

export const Productos = ({productos, agregarAlCarro}) =>  {

  
   /* const { } = this.props*/

    return (
      < Box sx={{ flexGrow: 1 }}> 
      <Grid container
       
       spacing={2}
       
      >
        
       
        {productos.map(producto => 
          <Producto
            agregarAlCarro={agregarAlCarro}
            key={producto.name}
            producto={producto}
          />
        )}
         </Grid>
         </Box>
      
    );
  }

export default Productos;
