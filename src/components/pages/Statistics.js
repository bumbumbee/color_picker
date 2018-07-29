import React from 'react';
import * as actions from "../../actions/colorActions";
import {connect} from "react-redux";

class Statistics extends React.Component {
    render() {
        const colors = this.props.colors.map((color, i) => {
            return <div key={i} className={color.title}
                        style={color.maxlevel!==0? {height: `calc(${color.maxlevel}*50px)`}: {height: `50px)`}}
            >{color.maxlevel}</div>
        });

        return (
            <div className='Statistics'>
                <h2>Re<span>s</span>ults</h2>
                <div className="results">
                    {colors}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        colors: state.colors,
    }
};

export default connect(mapStateToProps, actions)(Statistics)