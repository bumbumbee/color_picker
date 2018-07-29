import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import * as actions from '../../actions/colorActions'


class Home extends React.Component {
    state = {didMount: false};
    componentDidMount(){
        setTimeout(() => {
            this.setState({didMount: true})
        }, 0)
    }


    render() {
        const {didMount} = this.state;
        const colors = this.props.colors.map((color, i) => {
            return (
                <Link to={'/colors/'+color.title} key={i}>
                    <div className="single-color">
                        <div
                            className={color.title}
                            onClick={() => this.props.setActive(color)}>
                            {color.title==='yelloworange' && 'c'}
                            {color.title==='yellow' && 'o'}
                            {color.title==='green' && 'l'}
                            {color.title==='darkgreen' && 'o'}
                            {color.title==='lightblue' && 'r'}
                        </div>
                    </div>
                </Link>
            )
        });

        return (
            <div className={`Home ${didMount && 'visible'}`}>
                <div className="container">
                    {colors}
                </div>
                <h2 className={`title ${didMount && 'visible'}`}>p<span>i</span>cker</h2>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        colors: state.colors,
        active: state.active
    }
};

export default connect(mapStateToProps, actions)(Home)