import { Component } from "react";

const styles = {
  layout: {
    margin: '30px 120px',
    /*background: 'red',*/
}
};
class Layout extends Component {
  render() {
    return (
        <div style={styles.layout}>
          {this.props.children}
          </div>
      
    );
  }
}
export default Layout;
