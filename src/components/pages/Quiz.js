import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import * as actions from '../../actions/colorActions'

class Quiz extends React.Component {

    state = {didMount: false};

    componentDidMount() {
        setTimeout(() => {
            this.setState({didMount: true})
        }, 0)
    }

    render() {
        const {didMount} = this.state;
        const colors = this.props.colors.map((color, i) => {
            return (
                <Link to={'/quiz/' + color.title} key={i}
                      onClick={() => this.props.setActive(color)}>
                    <div className="single-color">
                        <div
                            className={color.title}>
                        </div>
                    </div>
                </Link>
            )
        });

        return (
            <div className='Quiz'>
                <h2 className={`title ${didMount && 'visible'}`}>qu<span>i</span>z</h2>
                <div className="container">
                    {colors}
                </div>
                <h4>Choose your color to start eye test</h4>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        colors: state.colors,
        active: state.active,
    }
};

export default connect(mapStateToProps, actions)(Quiz)