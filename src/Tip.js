import React, {Component} from "react";
import './Tip.css';

class Tip extends Component{
    render(){
        const setPosition = {
            marginLeft: this.props.left,
            marginTop: this.props.top
        }
        return(
            <div>
                {/* <i class="pointer far fa-hand-pointer"></i> */}
                <i class="pointer far fa-hand-point-down"></i>
                <div className="tip" style={setPosition}>Hi! This is a sample tip.</div>
            </div>
        ); 
    }
}

export default Tip;