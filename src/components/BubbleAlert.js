import { Component } from "react";

const styles = {
    bubbleAlert: {
        backgroundColor: '#E9725A',
    }
}
class BubbleAlert extends Component {
    render() {
        return (
            <span style={styles.bubbleAlert}>
                4
            </span>
        )
    }
}
export default BubbleAlert