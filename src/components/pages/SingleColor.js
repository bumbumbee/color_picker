import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import * as actions from '../../actions/colorActions'

class SingleColor extends React.Component {
    state = {
        didMount: false,
        currentcolor: true
    };

    componentDidMount() {
        setTimeout(() => {
            this.setState({didMount: true})
        }, 0)
    }

    toggleActive = (color) => {
       if(this.props.active.title === color.title) this.setState({currentcolor: !this.state.currentcolor});
       else this.setState({currentcolor: true});
      //  console.log(this.state.currentcolor);
        this.props.setActive(color)
    };


    render() {
        const {didMount} = this.state;
        const colors = this.props.colors.map((color, i) => {
            return (
                <Link to={'/colors/' + color.title} key={i}>
                    <div className="single-color">
                        <div
                            className={this.props.active.title === color.title &&
                            this.state.currentcolor === true ? color.title + " active" :
                                color.title + " unactive"}
                            onClick={() => this.toggleActive(color)}>
                            <div className='text'>{color.description}</div>
                        </div>
                    </div>
                </Link>
            )
        });

        return (
            <div className={`Colors ${didMount && 'visible'}`}>
                <div className="container">
                    {colors}
                </div>
                <h2 className={`title ${didMount && 'hide'}`}>p<span>i</span>cker</h2>
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

export default connect(mapStateToProps, actions)(SingleColor)