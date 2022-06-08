import { Component } from "react";
import Logo from "./Logo";
import Carro from "./Carro";

const styles = {
  navbar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: "70px",
    justifyContent: "space-between",
    position: "relative",
    padding: "0 50px",
    boxShadow: "0 2px 3px rgba(0,0,0,0.1)",
  },
};

export const Navbar = ({ carro, esCarroVisible, mostrarCarro }) => {
  return (
    <nav style={styles.navbar}>
      <Logo />
      <Carro
        carro={carro}
        esCarroVisible={esCarroVisible}
        mostrarCarro={mostrarCarro}
      />
    </nav>
  );
};
export default Navbar;
