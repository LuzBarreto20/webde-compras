import React from "react";

const styles = {
  layout: {
    margin: "30px 250px",
    /*background: 'red',*/
  },
};
const Layout = ({children}) => {
  return <div style={styles.layout}>{children}</div>;
};
export default Layout;
